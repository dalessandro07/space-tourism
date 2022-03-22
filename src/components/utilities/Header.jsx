import { Link } from 'react-router-dom';
import { useState } from 'react';
import Menu from './Menu';
import MenuLG from './MenuLG';

const Header = () => {
    const [nav, setNav] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const reportWindowSize = () => setWidth(window.innerWidth);
    window.onresize = reportWindowSize;

    const handleNav = (state, e) => {
        e.target.parentElement.parentElement.classList.remove('animate-slide');
        e.target.parentElement.parentElement.classList.add('animate-slideOut');
        setTimeout(() => setNav(state), 1000);
    };

    return (
        <header className="flex justify-between items-center p-8 bg-transparent">
            <Link to="/">
                <img className="w-10 md:w-14" src="/assets/shared/logo.svg" alt="" />
            </Link>
            <img onClick={() => setNav(true)} className="h-5 cursor-pointer md:hidden" src="/assets/shared/icon-hamburger.svg" alt="" />
            {width >= 768 ? <MenuLG /> : <Menu state={nav} handleNav={handleNav} />}
        </header>
    );
};

export default Header;
