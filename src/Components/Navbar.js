import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        const { load, dets, cityName, countryCode } = this.props;
        return(
            <div className="App">
        {load ?
            <nav id="view-nav">
        <div className="city-detail">
            <p className="cty-date">
                {dets.dt_txt}
            </p>
            <h3 className="city-name">
            {cityName}, {countryCode}
            </h3>
        </div>
    </nav>
    :
        <nav> 
        Search for a city
        </nav>
        
        }
        </div>
        )
    }
}

export default Navbar;