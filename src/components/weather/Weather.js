import React from 'react'
import {useEffect,useState} from 'react'





const Weather = () => {
    const [weather,setWeather]=useState()
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=7a4224bd8bcaeb775ccdf914dbf751c3')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setWeather(data)
        })
           
        
    }, [])
    const atmosphere=(e)=>{
        const holdValue=
        setWeather(e.target.value)
        console.log(weather)
    }
    return (
        <div>
             <h1>Weather app</h1>
             <input type="text" onClick={atmosphere}/>
            
            
           
            <h3>{weather.main.temp}</h3>
         
            
        </div>
    )
}

export default Weather
