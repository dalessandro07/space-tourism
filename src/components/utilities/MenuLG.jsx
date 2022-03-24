import { NavLink, useLocation } from 'react-router-dom';

const MenuLG = ({ lang }) => {
    const { pathname } = useLocation();

    return (
        <div className="bg-white/5 absolute right-0 top-0 p-4">
            <ul className="flex">
                <li className={pathname === '/' ? 'border-b-2 border-white w-min mx-4 my-3.5 hover:border-[#979797]' : 'mx-4 my-3.5 border-b-2 border-transparent w-min transition-all duration-300 hover:border-[#979797]'}>
                    <NavLink to="/" className="uppercase text-white font-light font-barlow tracking-[2.7px]">
                        {lang.textPage.nav['00']}
                    </NavLink>
                </li>
                <li className={pathname.includes('/destination') ? 'border-b-2 border-white w-min mx-4 my-3.5 hover:border-[#979797]' : 'mx-4 my-3.5 border-b-2 border-transparent w-min transition-all duration-300 hover:border-[#979797]'}>
                    <NavLink to="/destination/moon" className="uppercase text-white  font-light font-barlow tracking-[2.7px]">
                        {lang.textPage.nav['01']}
                    </NavLink>
                </li>
                <li className={pathname.includes('/crew') ? 'border-b-2 border-white w-min mx-4 my-3.5 hover:border-[#979797]' : 'mx-4 my-3.5 border-b-2 border-transparent w-min transition-all duration-300 hover:border-[#979797]'}>
                    <NavLink to="/crew" className="uppercase text-white font-light font-barlow tracking-[2.7px]">
                        {lang.textPage.nav['02']}
                    </NavLink>
                </li>
                <li className={pathname.includes('/technology') ? 'border-b-2 border-white w-min mx-4 my-3.5 hover:border-[#979797]' : 'mx-4 my-3.5 border-b-2 border-transparent w-min transition-all duration-300 hover:border-[#979797]'}>
                    <NavLink to="/technology" className="uppercase text-white  font-light font-barlow tracking-[2.7px]">
                        {lang.textPage.nav['03']}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MenuLG;
