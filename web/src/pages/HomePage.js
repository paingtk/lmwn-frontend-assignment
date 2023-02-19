import React, { useState, useEffect } from 'react'
import AppSearchBar from '../components/AppSearchBar'
import Trip from '../components/Trip'

// fetch API and filter data
const fetchTrips = async (filter) => {
  const keyword = `?keyword="${filter}"`
  const res = await fetch('http://localhost:4000/api/trips' + keyword)
  const data = await res.json()
  return data.trips
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
        <div style={{ marginTop: '5rem' }}>No data to show!</div>
      )}
    </div>
  )
}
