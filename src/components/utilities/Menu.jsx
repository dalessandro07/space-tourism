import { NavLink, useLocation } from 'react-router-dom';

import close from '/assets/shared/icon-close.svg';

const Menu = ({ lang, state, handleNav }) => {
    const { pathname } = useLocation();

    return (
        <section className={state ? 'z-50 animate-slide flex flex-col bg-white/0 backdrop-blur-[81.55px] w-3/5 fixed right-0 bottom-0 h-screen' : 'hidden'}>
            <div className="flex w-full justify-end">
                <img className="p-6 cursor-pointer" onClick={(e) => handleNav(false, e)} src={close} alt="" />
            </div>
            <div className="mt-8 grow">
                <ul className="flex flex-col">
                    <li className={pathname === '/' ? 'border-b-2 border-white w-min mx-8 my-3.5 hover:border-[#979797]' : 'mx-8 my-3.5 border-b-2 border-transparent w-min transition-all duration-300 hover:border-[#979797]'}>
                        <b className="text-white font-bold text-lg mr-4 tracking-[2px]">00</b>
                        <NavLink to="/" className="uppercase text-white text-lg font-light font-barlow tracking-[2.7px]">
                            {lang.textPage.nav['00']}
                        </NavLink>
                    </li>
                    <li className={pathname.includes('/destination') ? 'border-b-2 border-white w-min mx-8 my-3.5 hover:border-[#979797]' : 'mx-8 my-3.5 border-b-2 border-transparent w-min transition-all duration-300 hover:border-[#979797]'}>
                        <b className="text-white font-bold text-lg mr-4 tracking-[2px]">01</b>
                        <NavLink to="/destination/moon" className="uppercase text-white text-lg font-light font-barlow tracking-[2.7px]">
                            {lang.textPage.nav['01']}
                        </NavLink>
                    </li>
                    <li className={pathname.includes('/crew') ? 'border-b-2 border-white w-min mx-8 my-3.5 hover:border-[#979797]' : 'mx-8 my-3.5 border-b-2 border-transparent w-min transition-all duration-300 hover:border-[#979797]'}>
                        <b className="text-white font-bold text-lg mr-4 tracking-[2px]">02</b>
                        <NavLink to="/crew" className="uppercase text-white text-lg font-light font-barlow tracking-[2.7px]">
                            {lang.textPage.nav['02']}
                        </NavLink>
                    </li>
                    <li className={pathname.includes('/technology') ? 'border-b-2 border-white w-min mx-8 my-3.5 hover:border-[#979797]' : 'mx-8 my-3.5 border-b-2 border-transparent w-min transition-all duration-300 hover:border-[#979797]'}>
                        <b className="text-white font-bold text-lg mr-4 tracking-[2px]">03</b>
                        <NavLink to="/technology" className="uppercase text-white text-lg font-light font-barlow tracking-[2.7px]">
                            {lang.textPage.nav['02']}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Menu;
