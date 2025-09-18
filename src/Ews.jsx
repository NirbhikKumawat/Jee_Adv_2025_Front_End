import {useCallback, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
export default function Ews() {
    const iitList = [
        "Bombay", "Delhi", "Madras", "Kanpur", "Kharagpur",
        "Roorkee", "Guwahati", "Hyderabad", "Varanasi",
        "Indore", "Gandhinagar", "Ropar", "Patna", "Jodhpur",
        "Bhubaneswar", "Mandi", "Tirupati", "Palakkad", "Goa",
        "Jammu", "Dharwad", "Bhilai", "Dhanbad"
    ];
    const branchList = [
        "Computer Science and Engineering", "Electrical Engineering", "Mechanical Engineering",
        "Civil Engineering", "Chemical Engineering", "Aerospace Engineering",
        "Engineering Physics", "Mathematics and Computing", "Metallurgical Engineering",
        "Biotechnology and Biochemical Engineering", "Economics"
    ];
    const [selectedIit, setSelectedIit] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const API_URL = 'http://localhost:3000';

    const ewsFetch = useCallback(async () => {
        setLoading(true);
        setError('');
        setResults([]);

        const params = new URLSearchParams();
        if(selectedIit){
            params.append('iit', selectedIit);
        }
        if(selectedBranch){
            params.append('branch', selectedBranch);
        }
        const queryString = params.toString();
        const requestUrl = `${API_URL}/category/ews?${queryString}`;
        try{
            const response = await fetch(requestUrl);
            const data = await response.json();
            if(!response.ok||!data.success){
                throw new Error(data.error || 'Failed to fetch data');
            }
            setResults(data.data);
        }catch(err){
            setError(err.message);
            console.error("Failed to fetch EWS  data");
        }finally{
            setLoading(false);
        }
    },[selectedIit, selectedBranch]);
    useEffect(() => {
        ewsFetch();
    },[ewsFetch]);
    return (
        <div className="Ews">
            <Link to="/" className="back-link">Back to Home</Link>
            <header>
                <h1>
                    EWS Category Seat Search
                </h1>
                <p>Filter seat allotment data by IIT and branch</p>
            </header>
            <div className="filter-controls">
                <div className="select-wrapper">
                    <label htmlFor="iit-select">IIT</label>
                    <select id="iit-select" value={selectedIit} onChange={(e)=>setSelectedIit(e.target.value)}>
                        <option value="">All IITs</option>
                        {iitList.map((iit) => <option key={iit} value={iit}>{iit}</option>)}
                    </select>
                </div>
                <div className="select-wrapper">
                    <label htmlFor="branch-select">Branch</label>
                    <select id="branch-select" value={selectedBranch} onChange={(e)=> setSelectedBranch(e.target.value)}>
                        <option value="">All Branches</option>
                        {branchList.map((branch) => <option key={branch} value={branch}>{branch}</option>)}
                    </select>
                </div>
                <button onClick={ewsFetch} disabled={loading} className="search-button filter-button">
                    {loading?'Searching...':'Search'}
                </button>
            </div>
            <div className="results-area">
                {error&&<div classsName="message error-message"><p>{error}</p></div>}
                {!loading &&!error && results.length ===0 && (
                    <div className="message info-message">
                        <p>No results found for selected criteria</p>
                    </div>
                )}
                {results.length > 0 &&(
                    <div className="results-table-container">
                        <h3>Found {results.length} result(s)</h3>
                        <table className="results-table">
                            <thead>
                            <tr>
                                <th>IIT</th>
                                <th>Branch</th>
                                <th>EWS Rank</th>
                                <th>General Rank</th>
                            </tr>
                            </thead>
                            <tbody>
                            {results.map((item)=>(
                                <tr key={`${item.iit}-${item.branch}-${item.rank}`}>
                                    <td>{item.iit}</td>
                                    <td>{item.branch}</td>
                                    <td>{item.ews_rank}</td>
                                    <td>{item.rank}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}