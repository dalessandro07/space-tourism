import { Link } from 'react-router-dom';
import Header from './utilities/Header';

const Hero = ({ data, changeDefaultLang }) => {
    const handleChangeLang = (e) => {
        changeDefaultLang(e.target.value);
    };

    return (
        <section className={`flex flex-col bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] bg-no-repeat bg-cover w-screen h-screen`}>
            <Header />

            <main className="flex flex-col lg:flex-row justify-evenly items-center grow">
                {/* Texto */}

                <section className="flex flex-col justify-center items-center lg:w-2/4">
                    <p className="lg:w-3/5 uppercase text-[#D0D6F9] md:mb-4 lg:text-sm">{data.textPage.hero.subtitulo}</p>
                    <h1 className="lg:w-[63%] uppercase text-white text-7xl md:text-5xl lg:text-8xl">{data.textPage.hero.titulo}</h1>
                    <p className="text-[#D0D6F9] text-center mt-4 md:mt-6 lg:mt-8 w-3/4 lg:w-3/5 text-sm md:text-base lg:text-lg lg:text-left">{data.textPage.hero.parrafo}</p>
                </section>

                {/* Boton principal */}

                <section className="lg:w-2/5 lg:flex lg:justify-center">
                    <Link className="" to="/destination/moon">
                        <section className="flex justify-center items-center rounded-full bg-white w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 hover:outline hover:outline-[28px] hover:outline-[#2d2f3a]/90 transition-all duration-300">
                            <button className="text-[#0B0D17] md:text-2xl">{data.textPage.hero.button}</button>
                        </section>
                    </Link>
                </section>
            </main>

            <footer className="absolute right-0 bottom-0 m-4">
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

export default Hero;
