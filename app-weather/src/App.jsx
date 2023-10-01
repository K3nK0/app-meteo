import getApiWeather from "./services/apiOpenMeteo"

import InputCity from "./components/InputCity"

import { useEffect, useState } from "react"

import dataJSON from "../../data.json"
import getCurrentLocation from "./services/getCurrentLocation"
import CurrentWeather from "./components/CurrentWeather"
import TodaysWeather from "./components/TodaysWeather"
import WeatherPerHours from "./components/WeatherPerHours"

function App() {

  // getApiWeather()
  const [location, setLocation] = useState({
    city: "",
    lat: "",
    long: ""
  })

  // console.log("location", location);

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

  const listHoursPerDay = []
  let hoursPerDay = []


  for(let i = 0; i < allSchedules.time.length; i++){
  
    if(hoursPerDay[0] === undefined){
      hoursPerDay.push(
        {"time":allSchedules.time[i], 
        "temp":allSchedules.temperature_2m[i], 
        "humidity":allSchedules.relativehumidity_2m[i], 
        "weathercode":allSchedules.weathercode[i],
        "windSpeed": allSchedules.windspeed_10m[i],
        "windDirection": allSchedules.winddirection_10m[i]
      }
      )
    } 
    else if(new Date(hoursPerDay[0].time).getDay() === new Date(allSchedules.time[i]).getDay()){
      hoursPerDay.push(
        {"time":allSchedules.time[i], 
        "temp":allSchedules.temperature_2m[i], 
        "humidity":allSchedules.relativehumidity_2m[i], 
        "weathercode":allSchedules.weathercode[i],
        "windSpeed": allSchedules.windspeed_10m[i],
        "windDirection": allSchedules.winddirection_10m[i]
      }
      )
      if(i + 1 === allSchedules.time.length){
        listHoursPerDay.push(hoursPerDay)
        hoursPerDay = []
      }
    } else {
      listHoursPerDay.push(hoursPerDay)
      hoursPerDay = []
      hoursPerDay.push(
        {"time":allSchedules.time[i], 
        "temp":allSchedules.temperature_2m[i], 
        "humidity":allSchedules.relativehumidity_2m[i], 
        "weathercode":allSchedules.weathercode[i],
        "windSpeed": allSchedules.windspeed_10m[i],
        "windDirection": allSchedules.winddirection_10m[i]
      })
    }
  }

  return (
    <>
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col gap-7 w-[350px] px-5 py-12 rounded-2xl bg-gradient-to-b from-sky-500 to-indigo-500">
        <InputCity location={location} setLocation={setLocation} />
        <CurrentWeather currentWeather={currentWeather} />
        <TodaysWeather dailyWeather={dailyWeather} allSchedules={allSchedules} />
        {listHoursPerDay.length >= 1 && <WeatherPerHours listHoursPerDay={listHoursPerDay} /> }
      </div>
    </div>
    
      
    </>
  )
}

export default App
