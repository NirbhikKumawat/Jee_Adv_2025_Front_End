import React from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from './HomePage';
import AllotmentChecker from './AllotmentChecker'
import Category from "./Category.jsx";
import Ews from "./Ews.jsx";
import Bombay from "./Bombay.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checker" element={<AllotmentChecker />} />
            <Route path="/category" element={<Category />} />
            <Route path="/ews" element={<Ews/>}/>
            <Route path="/bombay" element={<Bombay />} />
        </Routes>
    );
}

export default App;