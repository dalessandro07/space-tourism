import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const variants = {
    enter: (direction) => {
        return {
            y: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            y: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Carousel = ({ data, tecItem }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, tecItem.length, page);

    const paginate = (newDirection) => {
        setPage([newDirection, newDirection]);
    };

    const [[width, height], setSize] = useState([window.innerWidth, window.innerHeight]);

    const reportWindowSize = () => setSize([window.innerWidth, window.innerHeight]);

    window.onresize = reportWindowSize;

    return (
        <div className="lg:flex lg:flex-row-reverse lg:grow lg:mb-8 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <div className="flex justify-center w-full mt-8 lg:w-full">
                    <motion.img
                        className="cursor-move lg:object-cover"
                        key={page}
                        src={width < 1024 ? tecItem[imageIndex].images.landscape : tecItem[imageIndex].images.portrait}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            y: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.5 },
                        }}
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.y, velocity.y);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(imageIndex + 1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(imageIndex - 1);
                            }
                        }}
                    />
                </div>
            </AnimatePresence>
            <div className="lg:flex">
                <section className="w-full flex justify-center mt-8 lg:flex-col lg:items-center">
                    {tecItem.map((item, indice) => {
                        return (
                            <button
                                onClick={() => {
                                    paginate(indice);
                                }}
                                key={item.name}
                                className={
                                    imageIndex === indice
                                        ? 'mx-2 bg-white rounded-full w-8 h-8 md:w-16 md:h-16 md:text-2xl md:my-4'
                                        : 'mx-2 bg-transparent border-white/25 text-white border-[1px] rounded-full w-8 h-8 md:w-16 md:h-16 md:text-2xl md:my-4'
                                }>
                                {indice + 1}
                            </button>
                        );
                    })}
                </section>
                <section className="flex flex-col items-center my-8 lg:items-start lg:justify-evenly">
                    <div>
                        <h2 className="text-sm text-white/50 uppercase md:text-lg">{data.textPage.terminology}</h2>
                        <h1 className="text-xl my-1 text-white uppercase md:text-4xl">{tecItem[imageIndex].name}</h1>
                    </div>
                    <p className="lg:text-lg text-center my-2 mx-12 text-[#D0D6F9] md:text-xl md:mx-20 md:my-8 lg:mr-20 lg:m-0 lg:text-left">{tecItem[imageIndex].description}</p>
                </section>
            </div>
        </div>
    );
};

export default Carousel;
