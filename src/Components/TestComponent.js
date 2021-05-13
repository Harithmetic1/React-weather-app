import React, { Component } from 'react';
import axios from 'axios';

//Children Components
import Navbar from './Navbar.js';
import Search from './Search.js';
import CurrentWeather from './CurrentWeather.js';
import Forecasts from './Forecasts.js';

class TestComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: "",
            cityName: "",
            country: "",
            details: [ ],
            keyId: 0,
            isLoaded: false,
            isError: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        this.setState({value: e.target.value})
        e.preventDefault();
    }


    async handleChange(){
       await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&appid=e239749ee684f1001a49bdbf304aa404`)
       .then(res => {
        //    console.log(res);
           this.setState({
               cityName: res.data.city.name,
               country: res.data.city.country,
               details: res.data.list.splice(0, 4),
               isLoaded: true,
               isError: false
           })
           
       }
       ).catch(err => {
        if (err.response) {
        // client received an error response (5xx, 4xx)
        this.setState({isError: true})
      } else if (err.request) {
        // client never received a response, or request never left
        this.setState({isError: true})
      } else {
        this.setState({isError: true})
        // anything else
      }
   })
    }


    render(){
        const { details, cityName, keyId, isLoaded, country, isError } = this.state;
        let newDetails, firstDetails, navDetails = [ ];
        const white = {
            color: "white",
            textAlign: "center"
        }
        const error =  <div style={white}>
                            <h1>
                                Invalid input, try again
                            </h1>
                        </div>
        return(
            <div>
            <div>
            {navDetails = details.slice(keyId, keyId + 1), console.log(navDetails)}
            { isLoaded? 
                navDetails.map((navDets, key) => {
                return(
                <Navbar load={isLoaded} dets = {navDets} key={key} cityName={cityName} countryCode={country}/>
                )
            })
            : <Navbar />
            }
            <Search handleSubmit = {this.handleSubmit} handleChange={this.handleChange} /> 
             
            {  firstDetails = details.slice(keyId, keyId + 1), console.log(firstDetails) }
            {   isError ? <div style={white}>
                            <h1>
                                Invalid input, try again
                            </h1>
                        </div> :
                firstDetails.map((detxx, key) => {
                return(
                    <CurrentWeather dets = {detxx} key={key} cityName={cityName} />
                )
            })}
            {console.log(details)}
            <section className="hourly-updates">
                <div className="view-containers">
                    {  newDetails = details.slice(0, 3), console.log(newDetails) }
                        { isError? null :
                            newDetails.map( (detx, key) => {
                            {/* console.log(detx, "KeyId: ", keyId, country ) */}
                        return(
                            <Forecasts dets = {detx} keyNum = {key} getForecastId = {keyIndex => this.setState({keyId: keyIndex}) } />      
                        )        
                    })}
                </div>
            </section>
            </div>
            </div>
        )
    }
}
export default TestComponent;