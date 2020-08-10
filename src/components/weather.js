import React from 'react';
import axios from 'axios';
class weather extends React.Component{
    state={
        countries:[]
    }
    // componentDidMount(){
    //     axios.get('https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/search/?query=san')
    //     .then(response=>{
    //         this.setState({
    //             countries:response.data
    //         })
    //     })
    // }
    render(){
    const {countries}=this.state
    console.log(countries)
    return(
        <div className='card teal'>
            <input type='text'/>
            <button value='Submit'>Submit</button>
        </div>
    )
    }
}
export default weather;