import React from 'react'
import './Trip.css'

export default function Trip(props) {
  return (
    <div>
      {props.trips.map((trip) => (
        <div className='container' key={trip.eid}>
          <div className='img-container'>
            <img className='thumb-img' src={trip.photos[0]} alt={trip.title} />
          </div>
          <div className='content-container'>
            <a
              href={trip.url}
              target='_blank'
              rel='noopener noreferrer'
              className='title'
            >
              {trip.title}
            </a>
            <div className='trip-description'>
              {trip.description.substring(0, 85)}...
              <a
                href={trip.url}
                target='_blank'
                rel='noopener noreferrer'
                className='read-more'
              >
                Read more
              </a>
            </div>
            <div className='tag-container'>
              <span className='category'>Category:</span>
              {trip.tags.map((tag) => (
                <span key={tag}>
                  <span className='tags' onClick={() => props.onTagClick(tag)}>
                    {tag}
                  </span>
                </span>
              ))}
            </div>
            <div className='preview-container'>
              {trip.photos.slice(1).map((photo) => (
                <div key={photo}>
                  <img className='preview-img' src={photo} alt={photo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
