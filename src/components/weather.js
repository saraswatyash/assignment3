import React from 'react';
import axios from 'axios';
import './all.css';
import { Link } from 'react-router-dom';
class weather extends React.Component{
    state={
        cov:[],
        countries:[]
    }
    componentDidMount(){
        axios.get('https://api.covid19api.com/countries')
        .then(response=>{
            this.setState({
                cov:response.data
            })
        })
    }
    render(){
    const {cov}=this.state
    const sh=cov.map(countries=>{
        return(
            <div className='card-panel blue-grey lighten-3 aa'>
                <Link to={'/'+countries.Country}>
                {countries.Country}
                </Link>
            </div>
        )
    })
    return(
        <div className='container'>
            {sh}
        </div>
    )
    }
}
export default weather;