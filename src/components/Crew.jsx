import Header from './utilities/Header';
import CrewItem from './CrewItem';

const Crew = ({ data }) => {
    return (
        <section className="flex flex-col bg-[url('/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-no-repeat bg-cover min-h-screen">
            <Header />
            <main className="flex flex-col grow justify-around lg:justify-start">
                {/* Page title*/}

                <section className="flex justify-center md:justify-start md:m-8 lg:m-8 lg:mx-20">
                    <h2 className="uppercase text-white font-barlow tracking-[2.7px] lg:text-xl">
                        <b className="text-[#383b4b] mr-4 lg:text-xl">02</b>
                        {data.textPage.titles.crew}
                    </h2>
                </section>

                {/* Item Description */}

                <CrewItem crewItem={data.crew} />
            </main>
        </section>
    );
};

export default Crew;
