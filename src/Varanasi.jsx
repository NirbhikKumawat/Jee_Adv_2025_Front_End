import {Link} from 'react-router-dom';
import './App.css';
import {useCallback, useState} from "react";
export default function Varanasi() {
    const branchList = [
        "Bioengineering 412N Bioengineering",
        "Computer Science and Engineering",
        "Chemical Engineering",
        "Materials Science and Technology",
        "Mechanical Engineering",
        "Pharmaceutical Engineering & Technology",
        "Electrical Engineering",
        "Industrial Chemistry",
        "Architecture 5101 Architecture",
        "Civil Engineering",
        "Biochemical Engineering",
        "Ceramic Engineering",
        "Engineering Physics",
        "Mathematics and Computing",
        "Electronics Engineering",
        "Metallurgical Engineering",
        "Mining Engineering",
    ];
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [results, setResults] = useState([{
        "success": true,
        "data": [
            {
                "adv_roll_no": 256166748,
                "rank": 3927,
                "ews_rank": 397,
                "obc_rank": null,
                "sc_rank": null,
                "st_rank": null,
                "iit": "Varanasi",
                "branch": "Electrical Engineering"
            },{
                "adv_roll_no": 256166748,
                "rank": 404,
                "ews_rank": null,
                "obc_rank": null,
                "sc_rank": null,
                "st_rank": null,
                "iit": "Varanasi",
                "branch": "Electrical Engineering"
            }
        ],
        "count": 2
    }]);
    const API_URL = 'http://localhost:3000/iit/Varanasi';

    const varanasiFetch = useCallback(async () => {
        setLoading(true);
        setError('');
        setResults([]);

        const params = new URLSearchParams();
        if(selectedBranch) {
            params.append("branch", selectedBranch);
        }
        params.append("category", selectedCategory);

        const queryString = params.toString();
        const requestURL = `${API_URL}?${queryString}`;
        try{
            const response = await fetch(requestURL);
            const data = await response.json();
            if(!response.ok||!data.success){
                throw new Error(data.error||'Failed to fetch data');
            }
            setResults(data.data);
        }catch(error){
            setError(error.message);
            console.error("Failed to fetch Varanasi Data")
        }finally{
            setLoading(false);
        }
    },[selectedCategory,selectedBranch]);
    return(
        <div className="varanasi-container">
            <Link to="/" className="back-link">Back to Home</Link>
            <header className="iit">
                <h1>
                    IIT Varanasi
                </h1>
                <p>Welcome to IIT Varanasi</p>
            </header>
            <div className="filter-controls">
                <div className="select-wrapper">
                    <label htmlFor="category-select">
                        <select id="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option key="all" value="">All</option>
                            <option key="open-general" value="open">OPEN/General</option>
                            <option key="ews" value="ews">EWS</option>
                            <option key="obc" value="obc">OBC</option>
                            <option key="sc" value="sc">SC</option>
                            <option key="st" value="st">ST</option>
                        </select>
                    </label>
                </div>
                <div className="select-wrapper">
                    <label htmlFor="branch-select"></label>
                    <select id="branch-select" value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)}>
                        <option value="">All Branches</option>
                        {branchList.map((branch)=><option key={branch} value={branch}>{branch}</option>)}
                    </select>
                </div>
                <button onClick={varanasiFetch} disabled={loading} className="search-button filter-button">
                    {loading?'Searching...':'Search'}
                </button>
            </div>
            <div className="results-area">
                {error&&<div className="message error-message"><p>{error}</p></div>}
                {!loading &&!error &&results.length===0 && (
                    <div className="message info-message">
                        <p>No results found for selected criteria</p>
                    </div>
                )}
                {results.length>0&&(
                    <div className="results-table-container">
                        <h3>Found {results.length} result(s)</h3>
                        <table className="results-table">
                            <thead>
                            <tr>
                                <th>Branch</th>
                                <th>General Rank</th>
                                <th>EWS Rank</th>
                                <th>OBC Rank</th>
                                <th>SC Rank</th>
                                <th>ST Rank</th>
                            </tr>
                            </thead>
                            <tbody>
                            {results.map((item)=>(
                                <tr key={`${item.iit}-${item.branch}-${item.rank}`}>
                                    <td>{item.branch}</td>
                                    <td>{item.rank}</td>
                                    <td>{item.ews_rank}</td>
                                    <td>{item.obc_rank}</td>
                                    <td>{item.sc_rank}</td>
                                    <td>{item.st_rank}</td>
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