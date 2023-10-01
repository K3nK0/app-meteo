import { formatHours } from "../utils/formatDate";
import windArrow from "../assets/wind-arrow.svg";
import weatherCodeIcons from "../utils/icons"


export default function ColumnHour({dataWeather}) {

  return (
    <div className='flex flex-col items-center border rounded p-1'>
        <p>{formatHours(dataWeather.time)}</p>
        <p>{dataWeather.temp}°</p>
        <p>{dataWeather.humidity}%</p>
        <p>{dataWeather.windSpeed}Km/h</p>
        <img 
            src={windArrow} alt=""
            className="w-[30px] drop-shadow-xl"
            style={{transform:`rotate(${dataWeather.windDirection}deg)`}} 
        />
        <img 
          src={weatherCodeIcons[dataWeather.weathercode]} alt="icon weather"
          className="w-[30px] drop-shadow-xl"
        />
    </div>
  )
}
