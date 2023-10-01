import weatherCodeIcons from "../utils/icons"

export default function CurrentWeather({currentWeather}) {
  return (
    <div className='w-full flex flex-col gap-3.5 p-2.5 text-white text-center bg-white/10 rounded-lg shadow-xl'>
      <div className='border-b-2'>
        <h2 className="text-3xl">Actuellement</h2>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img 
          src={weatherCodeIcons[currentWeather.weathercode]} 
          alt="icon weather"
          className="w-[70px] drop-shadow-xl" />
        </div>
        <div>
          <p className="text-3xl">{currentWeather.temperature}°</p>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <div className="flex flex-col">
            <p>Vitesse vent :</p>
            <p>{currentWeather.windspeed}Km/h</p>
          </div>
          <div className="flex flex-col">
            <p>Direction :</p>
            <p>{currentWeather.winddirection}°</p>
          </div>
        </div>
      </div>
    </div>
  )
}
