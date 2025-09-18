import {Link} from 'react-router-dom';
import './App.css';
import {useCallback, useEffect, useState} from "react";
export default function Bombay() {
    const branchList = [
        "Aerospace Engineering",
        "Applied Geophysics",
        "BS in Mathematics",
        "Chemical Engineering",
        "Chemistry 4201 Chemistry",
        "Civil Engineering",
        "Computer Science and Engineering",
        "Economics 4202 Economics",
        "Electrical Engineering",
        "Energy Engineering",
        "Engineering Physics",
        "Environmental Science and Engineering",
        "Industrial Engineering and Operations Research",
        "Mechanical Engineering",
        "Metallurgical Engineering and Materials Science"
    ];
    const category = [
        "EWS","OBC","OPEN/General","SC","ST"
    ];
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('OPEN/General');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [results, setResults] = useState([]);
    const API_URL = 'http://localhost:3000/iit/Bombay';

    const bombayFetch = useCallback(async () => {
        setLoading(true);
        setError('');
        setResults([]);

        const params = new URLSearchParams();
        if(selectedBranch) {
            params.append("branch", selectedBranch);
        }
        if(selectedCategory) {
            params.append("category", selectedCategory);
        }
        const queryString = params.toString();
        const requestURL = `${API_URL}?${queryString}`;
        try{
            const response = await fetch(requestURL);
            const data = await response.json();
            if(!response.ok||!data.success){
                throw new Error(data.error||'Failed to fetch data');
            }
            setResults(data);
        }catch(error){
            setError(error.message);
            console.error("Failed to fetch Bombay Data")
        }finally{
            setLoading(false);
        }
    },[selectedCategory,selectedBranch]);
    useEffect(() => {
        bombayFetch();
    },[bombayFetch]);
    return(
        <div className="bombay-container">
            <Link to="/" className="back-link">Back to Home</Link>
            <header className="iit">
                <h1> IIT Bombay</h1>
                <p>Welcome to IIT Bombay</p>
            </header>
            <div className="filter-controls">
                <div className="selectwrapper">
                    <label htmlFor="category-select">
                        <select id="iit-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="Open/General">Select Your Category</option>
                                {category.map((cat)=><option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </label>
                </div>
            </div>
        </div>
    )
}