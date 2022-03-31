import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import Menu from './Menu';
import MenuLG from './MenuLG';
import MenuXL from './MenuXL';
import { contexto } from '../../context/TravelContext';

import logo from '/assets/shared/logo.svg';

const Header = () => {
    const [nav, setNav] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const { lang } = useContext(contexto);

    const reportWindowSize = () => setWidth(window.innerWidth);
    window.onresize = reportWindowSize;

    const handleNav = (state, e) => {
        e.target.parentElement.parentElement.classList.remove('animate-slide');
        e.target.parentElement.parentElement.classList.add('animate-slideOut');
        setTimeout(() => setNav(state), 1000);
    };

    return (
        <header className="relative flex justify-between items-center p-8 lg:pr-0 bg-transparent">
            <Link to="/">
                <img className="w-8 md:w-10" src={logo} alt="" />
            </Link>
            <img onClick={() => setNav(true)} className="h-5 cursor-pointer md:hidden" src="/assets/shared/icon-hamburger.svg" alt="" />
            <div className="hidden absolute lg:flex grow ml-28 z-50 w-2/6 h-[1.5px] bg-white/[25%]"></div>
            {width >= 768 ? width < 1024 ? <MenuLG lang={lang} /> : <MenuXL lang={lang} /> : <Menu lang={lang} state={nav} handleNav={handleNav} />}
        </header>
    );
};

export default Header;
