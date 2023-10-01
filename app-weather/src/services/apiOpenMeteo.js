export default async function getApiWeather(lat, long, setDataWeather) {

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin`)
    .then(res => {
        if(!res.ok){
            throw new Error(`Fetch error: ${res.status}`)
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        setDataWeather(data)
    })
    .catch(err => {
        console.log(err)
        throw err
    })
}