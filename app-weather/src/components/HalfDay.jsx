import weatherCodeIcons from "../utils/icons"

export default function HalfDay({title, weather}) {
  return (
    <div className="flex flex-col items-center text-lg">
        <h3 className="font-bold">{title}</h3>
        <p>{weather.temp}°</p>
        <p>Humiditée: {weather.humidity}</p>
        <img 
        src={weatherCodeIcons[weather.weathercode]} alt="icon weather"
        className="w-[50px]"
        />
    </div>
  )
}
