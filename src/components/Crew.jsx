import Header from './utilities/Header';
import CrewItem from './CrewItem';

const Crew = ({ data }) => {
    return (
        <section className="flex flex-col bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-no-repeat bg-cover min-h-screen">
            <Header />
            <main className="flex flex-col grow justify-around">
                {/* Page title*/}

                <section className="flex justify-start m-8">
                    <h2 className="uppercase text-white font-barlow tracking-[2.7px]">
                        <b className="text-[#383b4b] mr-4">02</b>meet your crew
                    </h2>
                </section>

                {/* Item Description */}

                <CrewItem crewItem={data.crew} />
            </main>
        </section>
    );
};

export default Crew;
