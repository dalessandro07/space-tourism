import Header from './utilities/Header';
import { useParams } from 'react-router-dom';
import DestinationItem from './DestinationItem';

import { motion } from 'framer-motion';

const Destination = ({ data, changeDefaultLang }) => {
    const navigateItems = data.destinations;

    const { destino } = useParams();

    const itemToNavigate = navigateItems.find((item) => item.name === destino) || navigateItems[0];

    const handleChangeLang = (e) => {
        changeDefaultLang(e.target.value);
    };

    return (
        <section className="flex flex-col bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-no-repeat bg-cover min-h-screen">
            <Header />

            <motion.main
                animate={{
                    translateX: [0, 5, 0, -5, 0],
                    transition: {
                        duration: 5,
                        ease: 'linear',
                        repeat: Infinity,
                    },
                }}
                className="flex flex-col grow justify-around">
                {/* Page title*/}

                <section className="flex justify-center md:justify-start md:m-8 lg:m-8 lg:mx-20">
                    <h2 className="uppercase text-white font-barlow tracking-[2.7px] lg:text-xl">
                        <b className="text-[#383b4b] mr-4 lg:text-xl">01</b>
                        {data.textPage.titles.dest}
                    </h2>
                </section>

                {/* Item Description */}

                <DestinationItem navigateItems={navigateItems} destItem={itemToNavigate} />
            </motion.main>

            <footer className="fixed left-0 lg:right-0 bottom-0 m-4">
                <select onChange={handleChangeLang} defaultValue="def" name="" id="">
                    <option disabled value="def">
                        Language
                    </option>
                    <option className="" value="EN">
                        English
                    </option>
                    <option className="" value="ES">
                        Español
                    </option>
                </select>
            </footer>
        </section>
    );
};

export default Destination;
