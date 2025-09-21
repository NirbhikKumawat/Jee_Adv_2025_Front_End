import {useCallback, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
export default function Open() {
    const iitList = [
        "Bombay", "Delhi", "Madras", "Kanpur", "Kharagpur",
        "Roorkee", "Guwahati", "Hyderabad", "Varanasi",
        "Indore", "Gandhinagar", "Ropar", "Patna", "Jodhpur",
        "Bhubaneswar", "Mandi", "Tirupati", "Palakkad", "Goa",
        "Jammu", "Dharwad", "Bhilai", "Dhanbad"
    ];
    const branchList = [
        "Geophysical Technology",
        "Electronics Engineering",
        "B.Tech in Materials Science and Engineering",
        "Metallurgical Engineering",
        "Biological Engineering",
        "Biosciences and Bioengineering",
        "B.Tech (Artificial Intelligence and Data Science) - MBA in Digital Business Management (IIM Bodh Gaya)",
        "Mining Engineering",
        "B. Tech. (CSE) and M.Tech in CSE",
        "Electronics and Electrical Engineering",
        "Bio Engineering",
        "B.Tech (Mathematics and Computing) - MBA in Digital Business Management (IIM Bodh Gaya)",
        "Bioengineering 412N Bioengineering",
        "Electrical Engineering (IC Design and Technology)",
        "Computer Science and Engineering",
        "Instrumentation and Biomedical Engineering",
        "Integrated Circuit Design & Technology",
        "Chemical Engineering",
        "Metallurgical and Materials Engineering",
        "B.Tech (Computer Science and Engineering) - MBA in Digital Business Management (IIM Bodh Gaya)",
        "Electrical Engineering (Power and Automation)",
        "B.Tech (Chemical Science and Technology) - MBA in Hospital and Health Care Management (IIM Bodh Gaya)",
        "Physics 5602 Physics",
        "Environmental Science and Engineering",
        "Interdisciplinary Sciences",
        "Textile Technology",
        "B.Tech in Microelectronics & VLSI",
        "Manufacturing Science and Engineering",
        "Geological Technology",
        "B.Tech in General Engineering",
        "Biotechnology and Biochemical Engineering",
        "Mechatronics Engineering",
        "BS in Economics with MBA (IIM Bodh Gaya)",
        "Materials Science and Technology",
        "Environmental Engineering",
        "B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya)",
        "Biological Science",
        "Engineering Science",
        "Mechanical Engineering",
        "Artificial Intelligence and Data Engineering",
        "Metallurgical Engineering and Materials Science",
        "Materials Science and Engineering",
        "Applied Geology",
        "Civil and Infrastructure Engineering",
        "Electronics and Communication Engineering",
        "Design 412T Design",
        "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems",
        "Chemical Science and Technology",
        "Economics 4202 Economics",
        "Pharmaceutical Engineering & Technology",
        "Naval Architecture and Ocean Engineering",
        "Electronics and Electrical Communication Engineering",
        "Mineral and Metallurgical Engineering",
        "B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing)",
        "Data Science and Engineering",
        "Chemistry with Specialization",
        "Electrical and Electronics Engineering",
        "B.Tech in Mathematics and Computing",
        "Instrumentation Engineering",
        "Mathematics & Computing",
        "Electrical Engineering",
        "Digital Agriculture",
        "Industrial Chemistry",
        "B.Tech Mining Engineering and MBA in Logistic and Supply Chain Management (IIM Mumbai)",
        "Biomedical Engineering",
        "BS in Mathematics",
        "Artificial Intelligence",
        "Artificial Intelligence and Data Science",
        "Physics 4204 Physics",
        "B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya)",
        "Mining Machinery Engineering",
        "Architecture 5101 Architecture",
        "Space Science and Engineering",
        "Computational Engineering",
        "Petroleum Engineering",
        "Applied Geophysics",
        "Data Science and Artificial Intelligence",
        "B.Tech (Electronics and Communication Engineering) - MBA in Hospital and Healthcare Management (IIM Bodh Gaya)",
        "Civil Engineering",
        "Biological Sciences and Bioengineering",
        "B. Tech. (ECE) -M. Tech. in VLSI",
        "Economics 5608 Economics",
        "Engineering Design",
        "Biochemical Engineering",
        "Biotechnology and Bioinformatics",
        "Agricultural and Food Engineering",
        "Statistics and Data Science",
        "Mathematics and Scientific Computing",
        "Engineering and Computational Mechanics",
        "ChemicalScience 5H2B ChemicalScience",
        "Physics with Specialization",
        "Exploration Geophysics",
        "B. Tech. (EEE)-M. Tech. in (Power &. Control)",
        "Abu Dhabi Campus - Chemical Engineering",
        "Chemical Sciences",
        "Materials Science and Metallurgical Engineering",
        "Ceramic Engineering",
        "B. Tech in CE. - M. Tech.in Structural Engineering",
        "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai)",
        "Electrical Engineering (Integrated Circuit Design and Technology)",
        "Industrial and Systems Engineering",
        "Aerospace Engineering",
        "B.Tech (Electrical and Electronics Engineering) - MBA (IIM Bodh Gaya)",
        "B. Tech. (ME) - M. Tech. in Mechatronics",
        "Materials Engineering",
        "Chemistry 4201 Chemistry",
        "Energy Engineering",
        "Chemical and Biochemical Engineering",
        "Engineering Physics",
        "BS in Chemical Sciences",
        "B.Tech (Chemical Engineering) - MBA in Hospital and Health Care Management (IIM Bodh Gaya)",
        "B. Tech in CE. - M. Tech.in Geotechnical Engineering",
        "Production and Industrial Engineering",
        "B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya)",
        "Earth Sciences",
        "Ocean Engineering and Naval Architecture",
        "Abu Dhabi Campus - Energy Engineering",
        "Computational Engineering and Mechanics",
        "Physical Science",
        "Mathematics and Computing",
        "Artificial Intelligence and Data Analytics",
        "Abu Dhabi Campus - Computer Science and Engineering",
        "Industrial Engineering and Operations Research"
    ];
    const [selectedIit, setSelectedIit] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const API_URL = 'http://localhost:3000';

    const openFetch = useCallback(async () => {
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
        const requestUrl = `${API_URL}/category/open?${queryString}`;
        try{
            const response = await fetch(requestUrl);
            const data = await response.json();
            if(!response.ok||!data.success){
                throw new Error(data.error || 'Failed to fetch data');
            }
            setResults(data.data);
        }catch(err){
            setError(err.message);
            console.error("Failed to fetch OPEN  data");
        }finally{
            setLoading(false);
        }
    },[selectedIit, selectedBranch]);
    return (
        <div className="Open">
            <Link to="/" className="back-link">Back to Home</Link>
            <header>
                <h1>
                    OPEN Category Seat Search
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
                <button onClick={openFetch} disabled={loading} className="search-button filter-button">
                    {loading?'Searching...':'Search'}
                </button>
            </div>
            <div className="results-area">
                {error&&<div className="message error-message"><p>{error}</p></div>}
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
                                <th>General Rank</th>
                            </tr>
                            </thead>
                            <tbody>
                            {results.map((item)=>(
                                <tr key={`${item.iit}-${item.branch}-${item.rank}`}>
                                    <td>{item.iit}</td>
                                    <td>{item.branch}</td>
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