import React from 'react'
import {useNavigate } from 'react-router-dom';
import './App.css';
function HomePage(){
    const navigate = useNavigate();
    const goToChecker = () =>{
        navigate('/checker');
    };
    return(
        <div className="container home-container">
            <header>
                <h1>JEE Advanced 2025</h1>
                <p>Confused what to take.Look at previous year records</p>
            </header>
            <div className="home-action">
                <button onClick={goToChecker} className="cta-button">
                    Open Rank Checker
                </button>
            </div>
        </div>
    )
}
export default HomePage;