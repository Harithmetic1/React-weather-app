import React, { Component } from 'react';

class CurrentWeather extends Component{
    render(){
        const { dets, cityName } = this.props;
        // console.log(dets)
        let temp = parseInt(dets.main.temp) - 273;
        let max = parseInt(dets.main.temp_max) - 273; 
        let min = parseInt(dets.main.temp_min) - 273; 
        let windSpeed = dets.wind.speed;
        let humidity = dets.main.humidity;
        let pressure = dets.main.pressure;
        return(
            <div>
            
            <section className="weather-results">
            {
        <div className="results">
            <p className="country-name">{cityName}</p>
            <div className="weather-icon">
            <img src={`http://openweathermap.org/img/wn/${dets.weather[0].icon}@2x.png`} alt="weather-icons"/>
            </div>
            <div className="temp-details">
                <p className="temp-num">
                    {temp}&deg;
                </p>
                <span className="temp-name">{dets.weather[0].description}</span>
            </div>
        </div>
}
    </section>

    <section className="other-results">
        <div className="container">
            <div className="weather-icon">
            <img src={`http://openweathermap.org/img/wn/${dets.weather[0].icon}@2x.png`} alt="weather-icons"/>
            </div>
            <div className="results">
                <div className="max">
                 Max/Min:   {max}&deg;/{min}&deg;
                </div>
                <div className="wind">
                   Wind: {windSpeed}m/s
                </div>
                <div className="humidity">
                   Humidity: {humidity}%
                </div>
                <div className="pressure">
                   Pressure: {pressure}hPa
                </div>
            </div>
        </div>
    </section>
    
    
    </div>
        )
    }
}

export default CurrentWeather;