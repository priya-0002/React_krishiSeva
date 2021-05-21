import React from 'react'
import {useEffect,useState} from 'react'

const Weather = () => {
    const [weather,setWeather]=useState(null)
    const [search,setSearch]=useState("pune")
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7a4224bd8bcaeb775ccdf914dbf751c3`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setWeather(data)
            console.log(weather)
        })
           
        
    }, [search])
   

    
    const atmosphere=(e)=>{
        setSearch(e.target.value)
        console.log(search)
     

        
            
    }
    return (
        <div>
             <h1>Weather app</h1>
             <input type="text" onChange={atmosphere}/>
          
         </div>

    )
}

export default Weather
