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
                <div className='card-panel lime accent-3 aa' key={covid.Slug}>
                    <Link to={'/'+covid.Slug}>
                    <p>{covid.Country}</p>
                    </Link>   
                </div>
                )

        })):(<p>Error......</p>)
        return(
            <div className='container'>
              <div className="card-panel red bb"><h6>Total Confirmed {In_total.TotalConfirmed}</h6></div>
              <div className="card-panel red bb"><h6>Total Deaths &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{In_total.TotalDeaths}</h6></div>
              <div className="card-panel red bb"><h6>Total Recovered {In_total.TotalRecovered}</h6></div><br/>
              {cases}
              
            </div>
        )
    }
    
    
}
export default covid;