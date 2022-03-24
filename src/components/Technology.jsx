import Header from './utilities/Header';
import Carousel from './CarouselTec';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Technology = ({ data }) => {
    const [next, setNext] = useState('READY?');

    return (
        <section className="flex flex-col bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-no-repeat bg-cover min-h-screen">
            <Header />
            <main className="flex flex-col grow justify-around">
                {/* Page title*/}

                <section className="flex justify-center md:justify-start md:m-8 lg:m-8 lg:mx-20">
                    <h2 className="uppercase text-white font-barlow tracking-[2.7px] lg:text-xl">
                        <b className="text-[#383b4b] mr-4 lg:text-xl">03</b>
                        {data.textPage.titles.tec}
                    </h2>
                </section>

                {/* Page description */}

                <Carousel data={data} tecItem={data.technology} />
            </main>
            <Link className="flex justify-center lg:hidden" to="/">
                <section
                    onMouseEnter={() => setNext('YES!')}
                    onMouseLeave={() => setNext('READY?')}
                    onTouchStart={() => setNext('YES!')}
                    onTouchEnd={() => setNext('READY?')}
                    className="flex justify-center items-center rounded-full bg-white w-24 h-24 hover:outline hover:outline-[28px] hover:outline-[#2d2f3a]/90 transition-all duration-300 my-8">
                    <button className="text-[#0B0D17]">{next}</button>
                </section>
            </Link>
        </section>
    );
};

export default Technology;
