import React from 'react'
import {useEffect,useState} from 'react'
import "./weather.css"


const Weather = () => {
    const [weather,setWeather]=useState(null)
    const [search,setSearch]=useState("pune")
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7a4224bd8bcaeb775ccdf914dbf751c3`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setWeather(data.main)
            console.log(weather)
        })
           
        
    }, [search])
   

    
    const atmosphere=(e)=>{
        setSearch(e.target.value)
        console.log(search)     
    }
    return (
        <div >
             <h1>Weather app</h1>
             <div className="search-container">
             <input type="text" placeholder="enter city" name="search" onChange={atmosphere}/>
            
             {!weather?<p>No data found: </p>: <div><h3>{weather.temp}  degree</h3></div>}
             </div>
         </div>

    )
}

export default Weather
