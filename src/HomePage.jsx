import React, {useEffect, useRef} from 'react'
import {useNavigate } from 'react-router-dom';
import './App.css';
import { createScope, createTimeline, stagger, text as textUtil } from 'animejs';
function HomePage(){
    const navigate = useNavigate();
    const headingRef = useRef(null);
    const goToChecker = () =>{
        navigate('/checker');
    };
    const goToCategory = () =>{
        navigate('/category');
    };
    const goToIit = () =>{
        navigate('/iit');
    };
    useEffect(()=>{
        if(!headingRef.current){
            return;
        }
        const scope =createScope(headingRef.current);
        scope.add(()=>{
            const {words,chars} = textUtil.split(headingRef.current,{
                words:{wrap:'span',class:'word'},
                chars:true,
            });
            createTimeline({
                defaults:{easing:'easeInOut(3)',duration:600},
            }).add(chars,{
                translateY:el=>(el.dataset.line%2?'100%':'-100%'),
                opacity:[0,1],
                delay:stagger(50,{from:'random'}),
            }).init()
        });

        return ()=>scope.revert()
    },[])
    return(
        <div className="container home-container">
            <header>
                <h1 ref={headingRef}>JEE Advanced 2025</h1>
                <p>Confused what to take.Look at previous year records</p>
            </header>
            <div className="home-action">
                <button onClick={goToChecker} className="cta-button">
                    Open Rank Checker
                </button>
                <button onClick={goToCategory} className="cta-button">
                    Open Category Analyzer
                </button>
                <button onClick={goToIit} className="cta-button">
                    IIT
                </button>
            </div>
        </div>
    )
}
export default HomePage;