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
    const goToKharagpur = () =>{
        navigate('/iit/kharagpur');
    }
    const goToRoorkee = () =>{
        navigate('/iit/roorkee');
    }
    const goToVaranasi = () =>{
        navigate('/iit/varanasi');
    }
    const goToGuwhati = ()=>{
        navigate('/iit/guwahati');
    }
    const goToHyderabad = ()=>{
        navigate('/iit/hyderabad');
    }
    const goToIndore =()=>{
        navigate('/iit/indore');
    }
    const goToGandhinagar=()=>{
        navigate('/iit/gandhinagar');
    }
    const goToDhanbad =()=>{
        navigate('/iit/dhanbad');
    }
    const goToDharwad =()=>{
        navigate('/iit/dharwad');
    }
    const goToTirupati=()=>{
        navigate('/iit/tirupati');
    }
    const goToRopar =()=>{
        navigate('/iit/ropar');
    }
    const goToPatna =()=>{
        navigate('/iit/patna');
    }
    const goToBhilai=()=>{
        navigate('/iit/bhilai');
    }
    const goToJodhpur=()=>{
        navigate('/iit/jodhpur');
    }
    const goToGoa=()=>{
        navigate('/iit/goa');
    }
    const goToPalakkad=()=>{
        navigate('/iit/palakkad');
    }
    const goToMandi=()=>{
        navigate('/iit/mandi');
    }
    const goToBhubaneswar=()=>{
        navigate('/iit/bhubaneshwar');
    }
    const goToJammu=()=>{
        navigate('/iit/jammu');
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
                <button onClick={goToKharagpur} className="cta-button">
                    IIT Kharagpur
                </button>
                <button onClick={goToRoorkee} className="cta-button">
                    IIT Roorkee
                </button>
                <button onClick={goToVaranasi} className="cta-button">
                    IIT Varanasi
                </button>
                <button onClick={goToGuwhati} className="cta-button">
                    IIT Guwahati
                </button>
                <button onClick={goToHyderabad} className="cta-button">
                    IIT Hyderabad
                </button>
                <button onClick={goToIndore} className="cta-button">
                    IIT Indore
                </button>
                <button onClick={goToGandhinagar} className="cta-button">
                    IIT Gandhinagar
                </button>
                <button onClick={goToDhanbad} className="cta-button">
                    IIT Dhanbad
                </button>
                <button onClick={goToDharwad} className="cta-button">
                    IIT Dharwad
                </button>
                <button onClick={goToTirupati} className="cta-button">
                    IIT Tirupati
                </button>
                <button onClick={goToRopar} className="cta-button">
                    IIT Ropar
                </button>
                <button onClick={goToPatna} className="cta-button">
                    IIT Patna
                </button>
                <button onClick={goToBhilai} className="cta-button">
                    IIT Bhilai
                </button>
                <button onClick={goToJodhpur} className="cta-button">
                    IIT Jodhpur
                </button>
                <button onClick={goToGoa} className="cta-button">
                    IIT Goa
                </button>
                <button onClick={goToPalakkad} className="cta-button">
                    IIT Palakkad
                </button>
                <button onClick={goToMandi} className="cta-button">
                    IIT Mandi
                </button>
                <button onClick={goToBhubaneswar} className="cta-button">
                    IIT Bhubaneswar
                </button>
                <button onClick={goToJammu} className="cta-button">
                    IIT Jammu
                </button>
            </div>
        </div>
    )
}