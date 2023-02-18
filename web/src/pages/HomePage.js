import React, { useState, useEffect } from 'react'
import AppSearchBar from '../components/AppSearchBar'
import Trip from '../components/Trip'

// fetch API and filter data
const fetchTrips = async (filter) => {
  const res = await fetch('http://localhost:9000/trips')
  const data = await res.json()
  const filteredData = filter
    ? data.filter(
        (d) =>
          d.tags.includes(filter.charAt(0).toUpperCase() + filter.slice(1)) ||
          d.title.toLowerCase().includes(filter) ||
          d.description.toLowerCase().includes(filter)
      )
    : data
  return filteredData
}

export default function HomePage() {
  const [filter, setFilter] = useState('')
  const [trips, setTrips] = useState([])

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  useEffect(() => {
    const getTrips = async () => {
      const filteredTrips = await fetchTrips(filter)
      setTrips(filteredTrips)
    }
    getTrips()
  }, [filter])

  return (
    <div>
      <AppSearchBar filter={filter} onInputChange={handleFilterChange} />
      {trips.length ? (
        <Trip trips={trips} onTagClick={handleFilterChange} />
      ) : (
        <div>No data to show!</div>
      )}
    </div>
  )
}
