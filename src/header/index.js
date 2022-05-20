import React from 'react'
import logo from './logo.png';
import './style.css';
export const Header = () =>{
    return(
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>YOUR SPOTTABL TEAM</h1>
        <p>Spottabl supports you all throughout</p>
      </div>
    )
}