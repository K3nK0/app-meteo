import { useState } from "react"
import ColumnHour from "./ColumnHour"
import BtnNext from "./BtnNext"
import BtnPrevious from "./BtnPrevious"

import { formatDate } from "../utils/formatDate"

export default function WeatherPerHours({listHoursPerDay}) {

    const [indexDay, setIndexDay] = useState(0)

    return (
        <div className='relative w-full flex flex-col gap-3.5 p-2.5 text-white text-center bg-white/10 rounded-lg shadow-xl'>
            <div className='border-b-2'>
                <h2 className="text-3xl">{formatDate(listHoursPerDay[indexDay][0].time)}</h2>
            </div>

            <div className="w-full overflow-x-auto">
                <div className="flex gap-1">
                    {listHoursPerDay[indexDay].map(day => (
                        <ColumnHour key={day.time} dataWeather={day} />
                    ))}
                </div>
            </div>
            
            <div className="w-full grid grid-cols-2 border-t h-12">
                    <div className="justify-self-start">
                    {indexDay > 0 && <BtnPrevious setIndexDay={setIndexDay} indexDay={indexDay} />}
                </div>
                <div className="justify-self-end">
                    {indexDay < listHoursPerDay.length -1 && <BtnNext setIndexDay={setIndexDay} indexDay={indexDay} />}
                </div>
            </div>
        </div>
  )
}
