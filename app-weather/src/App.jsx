import getApiWeather from "./services/apiOpenMeteo"

import InputCity from "./components/InputCity"

import { useEffect, useState } from "react"

import dataJSON from "../../data.json"
import getCurrentLocation from "./services/getCurrentLocation"
import CurrentWeather from "./components/CurrentWeather"
import TodaysWeather from "./components/TodaysWeather"
import GraphWeather from "./components/GraphWeather"

function App() {

  // getApiWeather()
  const [location, setLocation] = useState({
    city: "",
    lat: "",
    long: ""
  })

  console.log("location", location);

  useEffect(() => {
    async function fetchData() {
      const currentLocation = await getCurrentLocation();
      setLocation(currentLocation)
    }
    fetchData();
  }, []);

  const dataWeather = dataJSON

  const currentWeather = dataWeather.current_weather
  const dailyWeather = dataWeather.daily
  const allSchedules = dataWeather.hourly


  return (
    <>
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col gap-7 w-[350px] px-5 py-12 rounded-2xl bg-gradient-to-b from-sky-500 to-indigo-500">
        <InputCity location={location} setLocation={setLocation} />
        <CurrentWeather currentWeather={currentWeather} />
        <TodaysWeather dailyWeather={dailyWeather} allSchedules={allSchedules} />
        <GraphWeather />
      </div>
    </div>
    
      
    </>
  )
}

export default App
