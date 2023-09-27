import React, { useState } from 'react'

export default function InputCity({location, setLocation}) {

  const [getCity, setGetCity] = useState(location.city)

  const handleSubmit = (e) => {
    e.preventDefault()

    setLocation({...location, city: getCity})
  }

  return (
    <form onSubmit={handleSubmit} >
     <input 
        type="text"
        className='w-full p-2.5 bg-white/10 rounded-lg shadow-xl'
        value={getCity}
        onChange={e => setGetCity(e.target.value)}
     /> 
    </form>
  )
}
