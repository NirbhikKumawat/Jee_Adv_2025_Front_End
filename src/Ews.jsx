import {useState} from 'react';
import './App.css';
export default function Ews(){
    const [rankInput, setRankInput] = useState('');
    const [loading, setLoading] = useState(false);
    const handleKeyPress = (event)=>{
        if (event.key === 'Enter'){
            setLoading(true);
        }
    }
    return(
        <div className="Ews">
            <header>
                <h1>Economically Weaker Section (EWS)</h1>
                <p>Enter a rank to find the seat allotment details</p>
            </header>
            <div className="search-box">
                <input type="number" value={rankInput} onChange={(e)=>setRankInput(e.target.value)} onKeyPress={handleKeyPress} placeholder="Enter Rank (e.g., 246)" disabled={loading}/>
            </div>
        </div>
    )
}