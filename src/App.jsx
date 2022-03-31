import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Destination from './components/Destination';
import Crew from './components/Crew';

import data from './assets/data';
import Technology from './components/Technology';
import TravelContext from './context/TravelContext';

function App() {
    const { EN, ES } = data;
    const [lang, setLang] = useState(EN);

    const changeDefaultLang = (value) => (value === 'ES' ? setLang(ES) : setLang(EN));

    return (
        <TravelContext lang={lang}>
            <Router>
                <Routes>
                    <Route path="/" element={<Hero data={lang} changeDefaultLang={changeDefaultLang} />} />
                    <Route path="/destination" element={<Destination data={lang} changeDefaultLang={changeDefaultLang} />} />
                    <Route path="/destination/:destino" element={<Destination data={lang} changeDefaultLang={changeDefaultLang} />} />
                    <Route path="/crew" element={<Crew data={lang} changeDefaultLang={changeDefaultLang} />} />
                    <Route path="/technology" element={<Technology data={lang} changeDefaultLang={changeDefaultLang} />} />
                </Routes>
            </Router>
        </TravelContext>
    );
}

export default App;
