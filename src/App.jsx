import React from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from './HomePage';
import AllotmentChecker from './AllotmentChecker'
import Category from "./Category.jsx";
import Ews from "./Ews.jsx";
import Bombay from "./Bombay.jsx";
import Delhi from "./Delhi.jsx";
import IIT from "./IIT.jsx";
import Madras from "./Madras.jsx";
import Kanpur from "./Kanpur.jsx";
import Kharagpur from "./Kharagpur.jsx";
import Guwahati from "./Guwhati.jsx";
import Varanasi from "./Varanasi.jsx";
import Roorkee from "./Roorkee.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checker" element={<AllotmentChecker />} />
            <Route path="/category" element={<Category />} />
            <Route path="/ews" element={<Ews/>}/>
            <Route path="/iit/bombay" element={<Bombay />} />
            <Route path="/iit/delhi" element={<Delhi />} />
            <Route path="/iit" element={<IIT />} />
            <Route path="/iit/madras" element={<Madras />} />
            <Route path="/iit/kanpur" element={<Kanpur />} />
            <Route path="/iit/kharagpur" element={<Kharagpur />} />
            <Route path="/iit/guwahati" element={<Guwahati />} />
            <Route path="/iit/varanasi" element={<Varanasi />} />
            <Route path="/iit/roorkee" element={<Roorkee />} />
        </Routes>
    );
}

export default App;