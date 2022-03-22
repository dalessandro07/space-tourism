import Header from './utilities/Header';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DestinationItem from './DestinationItem';

const Destination = ({ data }) => {
    const navigateItems = data.destinations;

    const { destino } = useParams();

    const itemToNavigate = navigateItems.find((item) => item.name === destino) || navigateItems[0];

    return (
        <section className="flex flex-col bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover min-h-screen">
            <Header />
            <main className="flex flex-col grow justify-around">
                {/* Page title*/}

                <section className="flex justify-start m-8">
                    <h2 className="uppercase text-white font-barlow tracking-[2.7px]">
                        <b className="text-[#383b4b] mr-4">01</b>pick your destination
                    </h2>
                </section>

                {/* Item Description */}

                <DestinationItem navigateItems={navigateItems} destItem={itemToNavigate} />
            </main>
        </section>
    );
};

export default Destination;
