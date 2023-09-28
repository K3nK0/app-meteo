import React, { useState } from 'react'
import {nanoid} from "nanoid"

export default function InputCity({location, setLocation}) {

  const [getCity, setGetCity] = useState("")

  const [proposalsCity, setProposalsCity] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setLocation({
      city: proposalsCity[0].name,
      lat: proposalsCity[0].latitude,
      long: proposalsCity[0].longitude
    })

    setGetCity("")
    setProposalsCity([])
  }

  const handleInputLocation = async (citySearch) => {
    try {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${citySearch}&count=10&language=fr&format=json`)
      if(!response.ok) return
      const data = await response.json()
      const proposals = data.results
      if(proposals !== undefined) setProposalsCity(proposals)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} >
     <input 
        type="text"
        list='proposals-city'
        className='w-full p-2.5 text-white text-center text-4xl bg-white/10 rounded-lg shadow-xl placeholder:text-white placeholder:text-4xl'
        placeholder={location.city}
        value={getCity}
        onChange={e => {
          setGetCity(e.target.value)
          handleInputLocation(e.target.value)
        }}
     />
     <datalist id='proposals-city'>
      {proposalsCity.map(city => {
        return <option 
          key={nanoid(4)} 
          value={city.name}
          label={city.country}
          />
      })}
      
     </datalist>
    </form>
  )
}
