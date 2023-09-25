export default function getApiWeather() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=47.8336&longitude=-3.1581&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&current_weather=true&timezone=Europe%2FBerlin&forecast_days=3")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}