import weatherCodeIcons from "../utils/icons"
import windArrow from "../assets/wind-arrow.svg"

export default function HalfDay({title, weather}) {
  return (
    <div className="flex flex-col items-center text-lg">
        <h3 className="font-bold">{title}</h3>
        <p>{weather.temp}°</p>
        <p>{weather.humidity}%</p>
        <div className="flex">
          <p>{weather.windSpeed} Km/h</p>
          <img 
            src={windArrow} alt=""
            style={{transform:`rotate(${weather.windDirection}deg)`}} 
          />
        </div>
        <img 
          src={weatherCodeIcons[weather.weathercode]} alt="icon weather"
          className="w-[50px] drop-shadow-xl"
        />
    </div>
  )
}
