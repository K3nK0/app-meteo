import getApiWeather from "./services/apiOpenMeteo"

import InputCity from "./components/InputCity"

import { useEffect, useState } from "react"

import dataJSON from "../../data.json"
import getCurrentLocation from "./services/getCurrentLocation"
import CurrentWeather from "./components/CurrentWeather"
import TodaysWeather from "./components/TodaysWeather"
import WeatherPerHours from "./components/WeatherPerHours"

function App() {

  let currentWeather = undefined
  let dailyWeather = undefined
  let allSchedules = undefined
  const listHoursPerDay = []
  let hoursPerDay = []

  const [location, setLocation] = useState({
    city: "",
    lat: "",
    long: ""
  })

  useEffect(() => {
    async function fetchData() {
      const currentLocation = await getCurrentLocation();
      setLocation(currentLocation)
    }
    fetchData();
  }, []);


  const [dataWeather, setDataWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (location.lat && location.long) {
        async function fetchWeatherData() {
          try {
            await getApiWeather(location.lat, location.long, setDataWeather);
            setLoading(false)
          } catch (err) {
            console.error("Error fetching weather data: ", err);
            setLoading(false)
          }
      }
      fetchWeatherData()
    }
  },[location])

  if (loading) {
    return <p>Loading...</p>
  }
  
  if(dataWeather !== null && dataWeather !== undefined){
    currentWeather = dataWeather.current_weather
    dailyWeather = dataWeather.daily
    allSchedules = dataWeather.hourly

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
  }


  return (
    <>
      <div className="flex flex-col gap-5 min-w-[320px] w-screen max-w-[550px] mx-auto px-5 py-12 bg-gradient-to-b from-sky-500 to-indigo-500">
        <InputCity location={location} setLocation={setLocation} />
        {dataWeather !== null ? (
          <div className="flex flex-col gap-5">
            <CurrentWeather currentWeather={currentWeather} />
            <TodaysWeather dailyWeather={dailyWeather} allSchedules={allSchedules} />
            {listHoursPerDay.length >= 1 && <WeatherPerHours listHoursPerDay={listHoursPerDay} /> }
          </div>
        ) : 
        <p>Loading...</p>
        }
      </div>
    </>
  )
}

export default App
