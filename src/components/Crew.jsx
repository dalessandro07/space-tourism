import Header from './utilities/Header';
import CrewItem from './CrewItem';

const Crew = ({ data, changeDefaultLang }) => {
    const handleChangeLang = (e) => {
        changeDefaultLang(e.target.value);
    };

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

export default Crew;
