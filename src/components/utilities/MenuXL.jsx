import { NavLink, useLocation } from 'react-router-dom';

const MenuXL = ({ lang }) => {
    const { pathname } = useLocation();

    return (
        <div className="bg-white/[4%] backdrop-blur-[81.55px] w-7/12 py-2 pl-12">
            <ul className="flex justify-around">
                <li className={pathname === '/' ? 'border-b-2 border-white  w-max my-3.5 hover:border-[#979797]' : 'w-max my-3.5 border-b-2 border-transparent   transition-all duration-300 hover:border-[#979797]'}>
                    <NavLink to="/" className="uppercase w-full text-white text-sm font-light font-barlow tracking-[2.7px]">
                        00 {lang.textPage.nav['00']}
                    </NavLink>
                </li>
                <li className={pathname.includes('/destination') ? 'border-b-2 border-white   w-max my-3.5 hover:border-[#979797]' : 'w-max my-3.5 border-b-2 border-transparent   transition-all duration-300 hover:border-[#979797]'}>
                    <NavLink to="/destination/moon" className="uppercase w-full text-white text-sm font-light font-barlow tracking-[2.7px]">
                        01 {lang.textPage.nav['01']}
                    </NavLink>
                </li>
                <li className={pathname.includes('/crew') ? 'border-b-2 border-white   w-max my-3.5 hover:border-[#979797]' : 'w-max my-3.5 border-b-2 border-transparent   transition-all duration-300 hover:border-[#979797]'}>
                    <NavLink to="/crew" className="uppercase w-full text-white text-sm font-light font-barlow tracking-[2.7px]">
                        02 {lang.textPage.nav['02']}
                    </NavLink>
                </li>
                <li className={pathname.includes('/technology') ? 'border-b-2 border-white   w-max my-3.5 hover:border-[#979797]' : 'w-max my-3.5 border-b-2 border-transparent   transition-all duration-300 hover:border-[#979797]'}>
                    <NavLink to="/technology" className="uppercase w-full text-white text-sm font-light font-barlow tracking-[2.7px]">
                        03 {lang.textPage.nav['03']}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MenuXL;
