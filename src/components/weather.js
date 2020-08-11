import React from 'react';
import axios from 'axios';
import './all.css';
class weather extends React.Component{
    state={
        a:null,
        wea:{
            "request": {
                "type": "City",
                "query": "Saharanpur, India",
                "language": "en",
                "unit": "m"
            },
            "location": {
                "name": "",
                "country": "",
                "region": "Uttar Pradesh",
                "lat": "29.967",
                "lon": "77.550",
                "timezone_id": "Asia/Kolkata",
                "localtime": "2020-08-11 08:02",
                "localtime_epoch": 1597132920,
                "utc_offset": "5.50"
            },
            "current": {
                "observation_time": "02:32 AM",
                "temperature": 0,
                "weather_code": 176,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
                ],
                "weather_descriptions": [
                    "Patchy rain possible"
                ],
                "wind_speed": 12,
                "wind_degree": 134,
                "wind_dir": "SE",
                "pressure": 1002,
                "precip": 0.1,
                "humidity": 78,
                "cloudcover": 82,
                "feelslike": 36,
                "uv_index": 6,
                "visibility": 10,
                "is_day": "yes"
            }
        }
    }
    addeve=(event) => {
        this.setState({
           a:event.target.value
        });
    }
    
    handleclick=(event)=>{
        event.preventDefault();
        axios.get('http://api.weatherstack.com/current?access_key=6000574ccf7a28b1b07fde399018b33e&query='+this.state.a)
        .then(response=>{
            this.setState({
                wea:response.data
            })
        })
    }
    render(){
        const {wea}=this.state

    return(
        <div className='container' >
        <form onSubmit={this.handleclick}>
           <input type='text' name='a' onChange={this.addeve}></input>
        </form>
        <div className='card-panel light-blue accent-4 aa'>
        <h6 className='card-title'>{wea.location.name},{wea.location.country}</h6>  
         <h1 className=''>{wea.current.temperature}</h1>
        </div>
        
        </div>
    )
    }
}
export default weather;