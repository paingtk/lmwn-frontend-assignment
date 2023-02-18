import React, { useEffect, useState, useRef } from 'react'
import './AppSearchBar.css'

export default function AppSearchBar({ filter, onInputChange }) {
  const [enteredFilter, setEnteredFilter] = useState(filter)
  const inputRef = useRef()

  useEffect(() => {
    setEnteredFilter(filter)
  }, [filter])

  const handleKeyUp = (e) => {
    const inputValue = e.target.value.trim()
    if (e.key === 'Enter' || inputValue === '') {
      onInputChange(inputValue)
    }
  }
  return (
    <div className='search-container'>
      <input
        ref={inputRef}
        className='search-bar'
        type='text'
        placeholder='Find and go...'
        value={enteredFilter}
        onKeyUp={handleKeyUp}
        onChange={(e) => setEnteredFilter(e.target.value)}
      />
    </div>
  )
}
