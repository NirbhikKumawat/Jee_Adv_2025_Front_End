import { useState } from 'react'
import './App.css'

export default function App() {
    const [rankInput,setRankInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [allotmentData, setAllotmentData] = useState(null);
    const API_URl = 'http://localhost:3000';
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
     return (
         <div className="container">
             <header>
                 <h1>JEE Advanced 2025 Seat Allotment Checker</h1>
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
