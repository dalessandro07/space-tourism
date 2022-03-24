import Header from './utilities/Header';
import { useParams } from 'react-router-dom';
import DestinationItem from './DestinationItem';

const Destination = ({ data }) => {
    const navigateItems = data.destinations;

    const { destino } = useParams();

    const itemToNavigate = navigateItems.find((item) => item.name === destino) || navigateItems[0];

    return (
        <section className="flex flex-col bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-no-repeat bg-cover min-h-screen">
            <Header />
            <main className="flex flex-col grow justify-around">
                {/* Page title*/}

                <section className="flex justify-center md:justify-start md:m-8 lg:m-8 lg:mx-20">
                    <h2 className="uppercase text-white font-barlow tracking-[2.7px] lg:text-xl">
                        <b className="text-[#383b4b] mr-4 lg:text-xl">01</b>
                        {data.textPage.titles.dest}
                    </h2>
                </section>

                {/* Item Description */}

                <DestinationItem navigateItems={navigateItems} destItem={itemToNavigate} />
            </main>
        </section>
    );
};

export default Destination;
