import getApiWeather from "./services/apiOpenMeteo"
import fog from "./assets/icons/fog.png"
import heavyRain from "./assets/icons/heavyRain.png"
import overcast from "./assets/icons/overcast.png"
import partCloudy from "./assets/icons/partCloudy.png"
import rain from "./assets/icons/rain.png"
import snow from "./assets/icons/snow.png"
import stormRain from "./assets/icons/stormRain.png"
import sun from "./assets/icons/sun.png"
import thunderstorm from "./assets/icons/thunderstorm.png"

import InputCity from "./components/InputCity"

import { useEffect, useState } from "react"

import dataJSON from "../../data.json"
import getCurrentLocation from "./services/getCurrentLocation"

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


  const weatherCodeIcons = {
    "0": sun,
    "1": partCloudy,
    "2": partCloudy,
    "3": overcast,
    "45": fog,
    "48": fog,
    "51": rain,
    "53": rain,
    "55": rain,
    "56": rain,
    "57": rain,
    "61": rain,
    "63": rain,
    "65": rain,
    "66": rain,
    "67": rain,
    "71": snow,
    "73": snow,
    "75": snow,
    "77": snow,
    "80": heavyRain,
    "81": heavyRain,
    "82": heavyRain,
    "85": snow,
    "86": snow,
    "95": thunderstorm,
    "96": stormRain,
    "99": stormRain
  }

  return (
    <>
    <div className="h-screen grid place-items-center">
      <div className="w-[350px] px-5 py-12 rounded-2xl bg-gradient-to-b from-sky-500 to-indigo-500">
        <InputCity location={location} setLocation={setLocation} />
      </div>
    </div>
    
      
    </>
  )
}

export default App
