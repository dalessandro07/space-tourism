import { Link } from 'react-router-dom';
import Header from './utilities/Header';

const Hero = () => {
    return (
        <section className={`flex flex-col bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] bg-no-repeat bg-cover w-screen h-screen`}>
            <Header />

            <main className="flex flex-col justify-evenly items-center grow">
                {/* Texto */}

                <section className="flex flex-col justify-center items-center">
                    <p className="uppercase text-[#D0D6F9] md:mb-4">So you want to travel to</p>
                    <h1 className="uppercase text-white text-7xl md:text-9xl">SPACE</h1>
                    <p className="text-[#D0D6F9] text-center mt-4 md:mt-6 lg:mt-8 w-3/4 lg:w-3/5 text-sm md:text-2xl lg:text-2xl">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </section>

                {/* Boton principal */}

                <Link to="/destination">
                    <section className="flex justify-center items-center rounded-full bg-white w-32 h-32 md:w-52 md:h-52 hover:outline hover:outline-[28px] hover:outline-[#2d2f3a]/90 transition-all duration-300">
                        <button className="text-[#0B0D17] md:text-3xl">EXPLORE!</button>
                    </section>
                </Link>
            </main>
        </section>
    );
};

export default Hero;
