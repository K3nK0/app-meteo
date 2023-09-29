import { useState } from "react"
import { formatDate, formatHours } from "../utils/formatDate"
import weatherCodeIcons from "../utils/icons"
import HalfDay from "./HalfDay"
import BtnPrevious from "./BtnPrevious"
import BtnNext from "./BtnNext"

export default function TodaysWeather({dailyWeather, allSchedules}) {

  const [indexDay, setIndexDay] = useState(1)

    const sunriseToday = formatHours(dailyWeather.sunrise[indexDay])
    const sunsetToday = formatHours(dailyWeather.sunset[indexDay])

    const morningWeather = []
    const afternoonWeather = []

    for(let i = 0; i < allSchedules.time.length; i++){
      if(new Date(allSchedules.time[i]).getHours() === 9) {
        morningWeather.push({
          "temp":allSchedules.temperature_2m[i],
          "humidity":allSchedules.relativehumidity_2m[i],
          "weathercode":allSchedules.weathercode[i]
        })
      }
      if(new Date(allSchedules.time[i]).getHours() === 14) {
        afternoonWeather.push({
          "temp":allSchedules.temperature_2m[i],
          "humidity":allSchedules.relativehumidity_2m[i],
          "weathercode":allSchedules.weathercode[i]
        })
      }
    }

  return (
    <div className='w-full flex flex-col gap-3.5 p-2.5 text-white text-center bg-white/10 rounded-lg shadow-xl'>
      <div className='border-b-2'>
        <h2 className="text-3xl">{formatDate(dailyWeather.time[indexDay])}</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-left">
            <p>Levé du soleil: {sunriseToday}</p>
            <p>Couché du soleil: {sunsetToday}</p>
        </div>
        <div className="grid grid-cols-[1fr_2px_1fr]">
          <HalfDay title={"MATIN"} weather={morningWeather[indexDay]} />
          <div className="h-full bg-[#e5e7eb]"></div>
          <HalfDay title={"APRES-MIDI"} weather={afternoonWeather[indexDay]} />
        </div>
      </div>
      <div className="w-full grid grid-cols-2">
        <div className="justify-self-start">
          {indexDay > 0 && <BtnPrevious setIndexDay={setIndexDay} indexDay={indexDay} />}
        </div>
        <div className="justify-self-end">
        {indexDay < dailyWeather.time.length -1 && <BtnNext setIndexDay={setIndexDay} indexDay={indexDay} />}
        </div>
      </div>
    </div>
  )
}
