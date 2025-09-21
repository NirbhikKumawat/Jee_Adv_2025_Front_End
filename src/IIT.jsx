import React from 'react'
import {useNavigate } from 'react-router-dom';
import './App.css';

export default function IIT() {
    const navigate = useNavigate();
    const goToBombay = () =>{
        navigate('/iit/bombay');
    }
    const goToDelhi = () =>{
        navigate('/iit/delhi');
    }
    const goToMadras = () =>{
        navigate('/iit/madras');
    }
    const goToKanpur =()=>{
        navigate('/iit/kanpur');
    }
    return(
        <div className="container home-container">
            <header>
                <h1>JEE Advanced 2025</h1>
                <p>Confused what to take.Look at previous year records</p>
            </header>
            <div className="home-action">
                <button onClick={goToBombay} className="cta-button">
                    IIT Bombay
                </button>
                <button onClick={goToDelhi} className="cta-button">
                    IIT Delhi
                </button>
                <button onClick={goToMadras} className="cta-button">
                    IIT Madras
                </button>
                <button onClick={goToKanpur} className="cta-button">
                    IIT Kanpur
                </button>
            </div>
        </div>
    )
}