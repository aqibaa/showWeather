const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '88c8d64d8dmsh21e1ea87bcb21b3p1dd8efjsn168bb8e13775',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

const getweather = (city1) => {
    let cityname = document.getElementById("cityname")
    cityname.innerHTML = city1

    let api = `${url}${city1}`

    let response = fetch(api, options)
        .then(response => response.json())
        .then((response) => {
            document.getElementById("country").innerHTML = response.location.country;
            document.getElementById("city").innerHTML = response.location.name
            document.getElementById("region").innerHTML = response.location.region
            document.getElementById("timezone_id").innerHTML = response.location.tz_id
            document.getElementById("long").innerHTML = response.location.lon
            document.getElementById("lat").innerHTML = response.location.lat
            document.getElementById("currtemp").innerHTML = response.current.temp_c + " °C"
            document.getElementById("feelslike").innerHTML = response.current.feelslike_c + " °C"
            document.getElementById("humidity").innerHTML = response.current.humidity + " %"
            document.getElementById("visibility").innerHTML = response.current.vis_km + " KM"
            document.getElementById("speed").innerHTML = response.current.wind_kph + " KM/h"
            document.getElementById("winddirection").innerHTML = response.current.wind_dir
            document.getElementById("windchill").innerHTML = response.current.windchill_c + " °C"
            document.getElementById("cloudcover").innerHTML = response.current.cloud + " %"
            document.getElementById("precipitation").innerHTML = response.current.precip_mm + " mm"
            document.getElementById("dewpoint").innerHTML = response.current.dewpoint_c + " °C"
            document.getElementById("heatindex").innerHTML = response.current.heatindex_c + " °C"
            document.getElementById("uv").innerHTML = response.current.uv
            document.getElementById("pressure").innerHTML = response.current.pressure_in + "° SeaLevel"
        })

}

const city1 = document.getElementById("city1")

const submit = document.getElementById("submit")

submit.addEventListener("click", (evt) => {
    evt.preventDefault()
    getweather(city1.value)
});

getweather("");


