import React from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from './HomePage';
import AllotmentChecker from './AllotmentChecker'
import Category from "./Category.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checker" element={<AllotmentChecker />} />
            <Route path="/category" element={<Category />} />
        </Routes>
    );
}

export default App;