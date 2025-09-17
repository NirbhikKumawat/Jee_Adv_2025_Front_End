import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './App.css';
export default function Category() {
    const navigate = useNavigate();
    const openGeneral=()=>{
        navigate('/general');
    }
    const openEWS=()=>{
        navigate('/ews');
    }
    const openOBC=()=>{
        navigate('/obc');
    }
    const openSC=()=>{
        navigate('/sc');
    }
    const openST=()=>{
        navigate('/st');
    }
    return(
        <div className="category-page">
            <header>
                <h1>Seat Allotment</h1>
                <p>Choose the category you want find</p>
            </header>
            <div className="category-select">
                <button onClick={openGeneral} className="category-button">
                    General/Open
                </button>
                <button onClick={openEWS} className="category-button">
                    EWS
                </button>
                <button onClick={openOBC} className="category-button">
                    OBC-NCL
                </button>
                <button onClick={openSC} className="category-button">
                    SC
                </button>
                <button onClick={openST} className="category-button">
                    ST
                </button>
            </div>
        </div>
    )
}