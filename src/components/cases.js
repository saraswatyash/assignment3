import React,{Component} from 'react';
import axios from 'axios';


class cases extends Component{
    state={
        Cases: '',
    }
    async componentDidMount(){
        let a=String(this.props.match.params.Country)
        axios.get('https://api.covid19api.com/total/country/'+a+'/status/confirmed')
        .then(response=>{
            this.setState({
                Cases:response.data.slice(-1)
            })
        })
    }
   
    render(){
        const {Cases}=this.state
        const conf=Cases.length?(Cases.map(cases=>{
            return(
                <div className='card-panel blue' key={1}>
                    <span className='card-title'>Total Cases</span>
                    <h1>{cases.Cases}</h1>
                </div>
            )
        })):(<p>Wait for a moment.............</p>)
        return conf
    }
}
export default cases;