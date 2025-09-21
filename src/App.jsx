import React from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from './HomePage';
import AllotmentChecker from './AllotmentChecker'
import Category from "./Category.jsx";
import Ews from "./Ews.jsx";
import Bombay from "./IIT/Bombay.jsx";
import Delhi from "./IIT/Delhi.jsx";
import IIT from "./IIT.jsx";
import Madras from "./IIT/Madras.jsx";
import Kanpur from "./IIT/Kanpur.jsx";
import Kharagpur from "./IIT/Kharagpur.jsx";
import Guwahati from "./IIT/Guwhati.jsx";
import Varanasi from "./IIT/Varanasi.jsx";
import Roorkee from "./IIT/Roorkee.jsx";
import Hyderabad from "./IIT/Hyderabad.jsx";
import Indore from "./IIT/Indore.jsx";
import Gandhinagar from "./IIT/Gandhinagar.jsx";
import Dhanbad from "./IIT/Dhanbad.jsx";
import Dharwad from "./IIT/Dharward.jsx";
import Tirupati from "./IIT/Tirupati.jsx";
import Ropar from "./IIT/Ropar.jsx";
import Patna from "./IIT/Patna.jsx";
import Bhilai from "./IIT/Bhilai.jsx";
import Goa from "./IIT/Goa.jsx";
import Jodhpur from "./IIT/Jodhpur.jsx";
import Palakkad from "./IIT/Palakkad.jsx";
import Mandi from "./IIT/Mandi.jsx";
import Bhubaneshwar from "./IIT/Bhubaneshwar.jsx";
import Jammu from "./IIT/Jammu.jsx";

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
            <Route path="/iit/hyderabad" element={<Hyderabad />} />
            <Route path="/iit/indore" element={<Indore />} />
            <Route path="/iit/gandhinagar" element={<Gandhinagar />} />
            <Route path="/iit/dhanbad" element={<Dhanbad />} />
            <Route path="/iit/dharwad" element={<Dharwad />} />
            <Route path="/iit/tirupati" element={<Tirupati />} />
            <Route path="/iit/ropar" element={<Ropar />} />
            <Route path="/iit/patna" element={<Patna />} />
            <Route path="/iit/bhilai" element={<Bhilai />} />
            <Route path="/iit/goa" element={<Goa />} />
            <Route path="/iit/jodhpur" element={<Jodhpur />} />
            <Route path="/iit/palakkad" element={<Palakkad />} />
            <Route path="/iit/mandi" element={<Mandi />} />
            <Route path="/iit/bhubaneshwar" element={<Bhubaneshwar />} />
            <Route path="/iit/jammu" element={<Jammu />} />
        </Routes>
    );
}

export default App;