import { useContext } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { contexto } from '../context/TravelContext';

import { motion } from 'framer-motion';

const DestinationItem = ({ navigateItems, destItem }) => {
    const { addDestination } = useContext(contexto);

    const { destino } = useParams();

    const handleSubmitDestination = () => {
        addDestination(destino);
    };

    return (
        <div className="lg:flex lg:grow">
            {/* Image */}

            <motion.header
                animate={{
                    translateY: [0, -20, 0],
                    transition: {
                        duration: 4,
                        ease: 'linear',
                        repeat: Infinity,
                    },
                }}
                className="flex justify-center lg:w-2/4 items-center">
                <img className="w-36 my-6 md:w-1/3 lg:w-2/4 object-cover" src={destItem.images.png} alt="" />
            </motion.header>

            <main className="lg:flex lg:flex-col lg:w-2/4">
                {/* Navigation */}
                <main>
                    <ul className="flex justify-center mt-4 mb-12 md:justify-evenly md:w-2/4 md:m-auto md:my-6 lg:w-full lg:justify-start">
                        {navigateItems.map((navItem) => (
                            <li key={navItem.name} className="mx-2 md:mx-0 lg:mx-4">
                                <NavLink className={({ isActive }) => `${isActive ? 'pb-3 text-white border-b-4 border-white' : 'text-[#D0D6F9]'} uppercase lg:mx-4 lg:text-sm tracking-[2.36px] text-xs md:text-base`} to={navItem.href}>
                                    {navItem.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </main>

                {/* Item Description */}

                <section className="lg:mb-12">
                    {/* Info */}
                    <main className="text-white text-center border-b-[1px] border-[#979797] px-8 my-6 lg:px-3">
                        <h1 className="text-5xl uppercase md:text-6xl lg:text-left">{destItem.name}</h1>
                        <p className="text-[#D0D6F9] font-barlow text-sm tracking-wider leading-6 pt-2 pb-6 md:mx-8 md:my-6 md:text-base lg:text-left lg:mx-0 lg:w-3/5">{destItem.description}</p>
                    </main>
                    {/* Statistics */}
                    <footer className="flex flex-col md:flex-row md:justify-evenly md:w-3/4 md:m-auto justify-center text-[#D0D6F9] items-center text-center mb-8 lg:justify-start lg:m-0">
                        <section className="flex flex-col my-3 lg:px-4 lg:mr-6">
                            <h4 className="text-xs py-2 md:text-base lg:text-left lg:text-xs">AVG. DISTANCE</h4>
                            <p className="text-2xl text-white md:text-2xl uppercase lg:text-left lg:text-xl">{destItem.distance}</p>
                        </section>
                        <section className="flex flex-col my-3 lg:px-4 lg:ml-6">
                            <h4 className="text-xs py-2 md:text-base lg:text-left lg:text-xs">EST. TRAVEL TIME</h4>
                            <p className="text-2xl text-white md:text-2xl uppercase lg:text-left lg:text-xl">{destItem.travel}</p>
                        </section>
                    </footer>
                </section>

                {/* Button */}
                <footer className="flex justify-center mb-8 md:my-8 lg:hidden">
                    {destino ? (
                        <Link onClick={handleSubmitDestination} to="/crew">
                            <section className="flex justify-center items-center rounded-full bg-white w-24 h-24 md:w-36 md:h-36 hover:outline hover:outline-[28px] hover:outline-[#2d2f3a]/90 transition-all duration-300">
                                <button className="text-[#0B0D17] md:text-2xl">SELECT!</button>
                            </section>
                        </Link>
                    ) : (
                        ''
                    )}
                </footer>
            </main>
        </div>
    );
};

export default DestinationItem;
