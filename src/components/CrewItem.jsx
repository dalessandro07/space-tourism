import { Link } from 'react-router-dom';
import Carousel from './CarouselCrew';

const CrewItem = ({ crewItem }) => {
    return (
        <section className="flex flex-col items-center">
            {/* Main Content */}
            <Carousel crewItem={crewItem} />
            <Link className="md:hidden" to="/technology">
                <section className="flex justify-center items-center rounded-full bg-white w-24 h-24 hover:outline hover:outline-[28px] hover:outline-[#2d2f3a]/90 transition-all duration-300 my-8">
                    <button className="text-[#0B0D17]">LET'S GO!</button>
                </section>
            </Link>
        </section>
    );
};

export default CrewItem;
