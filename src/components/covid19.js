import React,{Component} from 'react';
import axios from 'axios';
import './all.css';
import { Link } from 'react-router-dom';

class covid extends Component{
    state={
        cov:[],
        In_total:[]
    }
    componentDidMount(){
        axios.get('https://api.covid19api.com/countries')
        .then(response=>{
            this.setState({
                cov:response.data
            })
        })
        axios.get('https://api.covid19api.com/world/total')
        .then(response=>{
            this.setState({
                In_total:response.data
            })
        })
    }
   
    render(){
        const {In_total}=this.state
        const {cov}=this.state
        const cases=cov.length?(cov.map(covid=>{            
            return(
                <div className='card-panel grey darken-4 aa' key={covid.Slug}>
                    <Link to={'/'+covid.Slug}>
                    <p>{covid.Country}</p>
                    </Link>   
                </div>
                )

        })):(<p>Wait for a moment......</p>)
        return(
            <div className='container'>
              <div className="card-panel  bb"><h5 className='card-title'>Total Confirmed </h5>
              {In_total.TotalConfirmed}
              </div>
              <div className="card-panel  bb"><h5 className='card-title'>Total Deaths </h5>{In_total.TotalDeaths}</div>
              <div className="card-panel bb"><h5 className='card-title'>Total Recovered </h5>{In_total.TotalRecovered}</div><br/>
              {cases}
            </div>
            
        )
    }
    
    
}
export default covid;