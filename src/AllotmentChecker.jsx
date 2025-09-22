import {useEffect, useRef, useState} from 'react'
import {Link} from 'react-router-dom';
import './App.css'
import { createScope, createTimeline, stagger, text as textUtil } from 'animejs';

export default function AllotmentChecker() {
    const [rankInput,setRankInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [allotmentData, setAllotmentData] = useState(null);
    const API_URl = 'http://localhost:3000';
    const headingRef = useRef(null);

    const handleSearch = async ()=> {
        if(!rankInput.trim()){
            setError("Rank is invalid");
            return;
        }
        setLoading(true);
        setError('');
        setAllotmentData(null);
        try{
            const response = await fetch(`${API_URl}/users/${rankInput}`);
            const result = await response.json();
            if(!response.ok||!result.success){
                throw new Error(result.error || `Error: ${response.status}`);
            }
            setAllotmentData(result.data);
        }catch(error){
            setError(error.message);
            console.error("Failed to fetch allotment data:", error);
        }finally{
            setLoading(false);
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter'){
            handleSearch();
        }
    }

    // --- Anime.js v4 animation just for the h1 ---
    useEffect(() => {
        if (!headingRef.current) return;

        const scope = createScope({ root: headingRef.current });

        scope.add(() => {
            const { words, chars } = textUtil.split(headingRef.current, {
                words: { wrap: 'span', class: 'word' },
                chars: true,
            });

            createTimeline({
                defaults: { easing: 'easeInOut(3)', duration: 600 },
            })
                .add(words, {
                    translateY: el => (el.dataset.line % 2 ? '100%' : '-100%'),
                    opacity: [0, 1],
                    delay: stagger(100),
                })
                .add(chars, {
                    translateY: el => (el.dataset.line % 2 ? '100%' : '-100%'),
                    opacity: [0, 1],
                    delay: stagger(50, { from: 'random' }),
                })
                .init();
        });

        return () => scope.revert();
    }, []);

    return (
        <div className="container">
            <header>
                <h1 ref={headingRef}>JEE Advanced 2025 Seat Allotment Checker</h1>
                <p>Enter a rank to find the seat allotment details</p>
            </header>
            <div className="search-box">
                <input type="number" value={rankInput} onChange={(e)=> setRankInput(e.target.value)} onKeyPress={handleKeyPress} placeholder="Enter Rank (e.g., 1417)" className="rank-input" disabled={loading}/>

                <button onClick={handleSearch} disabled={loading} className="search-button">
                    {loading? 'Searching...':'Search'}
                </button>
            </div>
            <div className="results-area">
                {error && (
                    <div className="message-error-message">
                        <p>{error}</p>
                    </div>)}
            </div>
            {allotmentData && (
                <div className="allotment-data">
                    <h2>Allotment Details for Rank: {allotmentData.rank}</h2>
                    <ul>
                        {Object.entries(allotmentData).filter(([key,value])=> value!==null && value !=='').map(([key, value]) => (
                            <li key={key}>
                                <strong>{key.replace(/_/g, ' ').toUpperCase()}:</strong>
                                <span>{value || 'N/A'}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
