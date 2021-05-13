import React, { Component } from 'react';



class Search extends Component{
    render(){
        return(
        <header>
        <div className="user-input">
            <div className="search">
                <input type="text" className="input" onChange={this.props.handleSubmit}/>
                <button className="submit-btn" onClick={this.props.handleChange}><i className="fas fa-search"></i></button>
            </div>
        </div> 
        </header>
        )
    }
}

export default Search;