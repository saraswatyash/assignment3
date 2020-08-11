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
                "name": "Saharanpur",
                "country": "India",
                "region": "Uttar Pradesh",
                "lat": "29.967",
                "lon": "77.550",
                "timezone_id": "Asia/Kolkata",
                "localtime": "2020-08-11 06:35",
                "localtime_epoch": 1597127700,
                "utc_offset": "5.50"
            },
            "current": {
                "observation_time": "01:05 AM",
                "temperature": 28,
                "weather_code": 176,
                "weather_icons": [
                    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"
                ],
                "weather_descriptions": [
                    "Patchy rain possible"
                ],
                "wind_speed": 9,
                "wind_degree": 117,
                "wind_dir": "ESE",
                "pressure": 1001,
                "precip": 0.1,
                "humidity": 85,
                "cloudcover": 79,
                "feelslike": 32,
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
        let {wea}=this.state
        event.preventDefault();
        axios.get('http://api.weatherstack.com/current?access_key=6000574ccf7a28b1b07fde399018b33e&query='+this.state.a)
        .then(response=>{
            this.setState({
                wea:response
            })
        })
        
    }
    render(){
        const {wea}=this.state
        console.log(wea)
        const Weather=wea.length?(wea.map(Weather=>{
            return(
                <div className='card-panel' >
                    <span className='card-title'>{Weather.data.location.name},{Weather.data.location.country}</span>
                    {wea.data.current.temperature}
                </div>
            )
            })):(<p>Type in the Country</p>)       
    return(
        <div className='container' >
        <form onSubmit={this.handleclick}>
           <input type='text' name='a' onChange={this.addeve}></input>
        </form>
        {Weather}
        </div>
    )
    }
}
export default weather;