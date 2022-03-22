import { useContext } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { contexto } from '../context/TravelContext';

const DestinationItem = ({ navigateItems, destItem }) => {
    const { addDestination } = useContext(contexto);

    const { destino } = useParams();

    const handleSubmitDestination = () => {
        addDestination(destino);
    };

    return (
        <>
            {/* Image */}

            <header className="flex justify-center">
                <img className="w-36 my-6 md:w-1/3" src={destItem.images.png} alt="" />
            </header>

            {/* Navigation */}
            <main>
                <ul className="flex justify-evenly w-2/4 m-auto mb-5">
                    {navigateItems.map((navItem) => {
                        return (
                            <li key={navItem.name}>
                                <NavLink className={({ isActive }) => `${isActive ? 'pb-3 text-white border-b-4 border-white' : 'text-[#D0D6F9]'} uppercase  tracking-[2.36px] text-xs md:text-lg`} to={navItem.href}>
                                    {navItem.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </main>

            {/* Item Description */}

            <section>
                {/* Info */}
                <main className="text-white text-center border-b-[1px] border-[#979797] px-8 my-6">
                    <h1 className="text-5xl uppercase md:text-6xl">{destItem.name}</h1>
                    <p className="text-[#D0D6F9] font-barlow text-sm tracking-wider leading-6 pt-2 pb-6 md:mx-8 md:text-lg">{destItem.description}</p>
                </main>
                {/* Statistics */}
                <footer className="flex flex-col md:flex-row md:justify-evenly md:w-3/4 md:m-auto justify-center text-[#D0D6F9] items-center text-center mb-8">
                    <section className="flex flex-col my-3">
                        <h4 className="text-xs py-2 md:text-lg">AVG. DISTANCE</h4>
                        <p className="text-2xl text-white md:text-3xl uppercase">{destItem.distance}</p>
                    </section>
                    <section className="flex flex-col my-3">
                        <h4 className="text-xs py-2 md:text-lg">EST. TRAVEL TIME</h4>
                        <p className="text-2xl text-white md:text-3xl uppercase">{destItem.travel}</p>
                    </section>
                </footer>
            </section>

            {/* Button */}
            <footer className="flex justify-center mb-8">
                {destino ? (
                    <Link onClick={handleSubmitDestination} to="/crew">
                        <section className="flex justify-center items-center rounded-full bg-white w-24 h-24 hover:outline hover:outline-[28px] hover:outline-[#2d2f3a]/90 transition-all duration-300">
                            <button className="text-[#0B0D17]">SELECT!</button>
                        </section>
                    </Link>
                ) : (
                    ''
                )}
            </footer>
        </>
    );
};

export default DestinationItem;
