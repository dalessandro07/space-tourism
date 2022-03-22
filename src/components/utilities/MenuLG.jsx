import { NavLink, useLocation } from 'react-router-dom';

const MenuLG = () => {
    const { pathname } = useLocation();

    return (
        <div className="bg-white/5 absolute right-0 top-0 p-6">
            <ul className="flex">
                <li className={pathname === '/' ? 'border-b-2 border-white w-min mx-4 my-3.5 hover:border-[#979797]' : 'mx-4 my-3.5 border-b-2 border-transparent w-min transition-all duration-300 hover:border-[#979797]'}>
                    <NavLink to="/" className="uppercase text-white text-lg font-light font-barlow tracking-[2.7px]">
                        Home
                    </NavLink>
                </li>
                <li className={pathname === '/destination' ? 'border-b-2 border-white w-min mx-4 my-3.5 hover:border-[#979797]' : 'mx-4 my-3.5 border-b-2 border-transparent w-min transition-all duration-300 hover:border-[#979797]'}>
                    <NavLink to="/destination" className="uppercase text-white text-lg font-light font-barlow tracking-[2.7px]">
                        Destination
                    </NavLink>
                </li>
                <li className={pathname === '/crew' ? 'border-b-2 border-white w-min mx-4 my-3.5 hover:border-[#979797]' : 'mx-4 my-3.5 border-b-2 border-transparent w-min transition-all duration-300 hover:border-[#979797]'}>
                    <NavLink to="/crew" className="uppercase text-white text-lg font-light font-barlow tracking-[2.7px]">
                        Crew
                    </NavLink>
                </li>
                <li className={pathname === '/technology' ? 'border-b-2 border-white w-min mx-4 my-3.5 hover:border-[#979797]' : 'mx-4 my-3.5 border-b-2 border-transparent w-min transition-all duration-300 hover:border-[#979797]'}>
                    <NavLink to="/technology" className="uppercase text-white text-lg font-light font-barlow tracking-[2.7px]">
                        Technology
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MenuLG;
