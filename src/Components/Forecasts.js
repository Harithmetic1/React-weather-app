import React, { Component } from 'react';

class Forecasts extends Component{
    
    


    render(){
        const { dets, keyNum, onclick } = this.props;
        // this.setState({key: keyNum})
        // console.log(dets)
        let time = dets.dt_txt.split(" ");
        time = time[1];
        let temp = parseInt(dets.main.temp) - 273;
        return(
            <div className="updates" onClick={() => this.props.getForecastId(keyNum)}>
            {/* {console.log(keyNum)} */}
                <div className="weather-icon">
                <img src={`http://openweathermap.org/img/wn/${dets.weather[0].icon}@2x.png`} alt="weather-icons"/>
                </div>
                <div className="time">
                    <p>{time}</p>
                </div>
                <div className="temp">
                    <h3>{temp}&deg;</h3>
                </div>
            </div>
        )
    }
}

export default Forecasts;