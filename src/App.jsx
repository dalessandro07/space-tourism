import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Destination from './components/Destination';
import Crew from './components/Crew';

import data from './assets/data.json';
import Technology from './components/Technology';
import TravelContext from './context/TravelContext';

function App() {
    return (
        <TravelContext>
            <Router>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/destination" element={<Destination data={data} />} />
                    <Route path="/destination/:destino" element={<Destination data={data} />} />
                    <Route path="/crew" element={<Crew data={data} />} />
                    <Route path="/technology" element={<Technology data={data} />} />
                </Routes>
            </Router>
        </TravelContext>
    );
}

export default App;
