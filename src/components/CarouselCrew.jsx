import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Carousel = ({ crewItem }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [height, setHeight] = useState(window.innerHeight);

    const imageIndex = wrap(0, crewItem.length, page);

    const paginate = (newDirection) => {
        setPage([newDirection, newDirection]);
    };

    const reportWindowSize = () => setHeight(window.innerHeight);
    window.onresize = reportWindowSize;

    return (
        <div className="flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:grow">
            <div className="flex flex-col md:flex-col-reverse lg:w-2/4 lg:flex-col lg:justify-around relative">
                <AnimatePresence initial={false} custom={direction}>
                    <div className="flex justify-center w-full mt-8">
                        <motion.img
                            className={`w-2/5 md:w-2/4 md:mt-12 lg:mt-0 lg:absolute lg:bottom-0 lg:m-0 cursor-move ${height < 625 ? 'lg:w-2/4' : 'lg:w-3/4'} max-h-[500px] object-contain`}
                            key={page}
                            src={crewItem[imageIndex].images.png}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            exit="exit"
                            animate="center"
                            transition={{
                                x: { type: 'spring', stiffness: 300, damping: 30 },
                                opacity: { duration: 0.5 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(imageIndex + 1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(imageIndex - 1);
                                }
                            }}
                        />
                    </div>
                </AnimatePresence>

                {/* Paginate */}
                <section className="w-full flex lg:absolute lg:bottom-0 lg:left-[-100%] justify-center border-t-[1px] border-gray-500 md:border-none lg:mb-12">
                    {crewItem.map((item, indice) => {
                        return (
                            <button
                                onClick={() => {
                                    paginate(indice);
                                }}
                                key={item.name}
                                className={imageIndex === indice ? 'mx-2 bg-white rounded-full w-2.5 h-2.5 mt-8' : 'mx-2 bg-gray-500 rounded-full w-2.5 h-2.5 mt-8'}></button>
                        );
                    })}
                </section>
            </div>

            <motion.section
                animate={{
                    x: [0, 5, 0],
                    opacity: [0, 1],
                }}
                className="flex flex-col items-center mt-8 lg:w-2/4 lg:justify-start lg:items-end">
                <h2 className="text-sm text-white/50 uppercase md:text-xl lg:text-left lg:w-[85%]">{crewItem[imageIndex].role}</h2>
                <h1 className="text-xl my-1 text-white uppercase md:text-3xl md:mb-4 lg:text-left lg:w-[85%]">{crewItem[imageIndex].name}</h1>
                <p className="text-sm text-center my-2 mx-12 text-[#D0D6F9] md:text-xl md:w-3/5 md:mb-8 lg:mx-8 lg:w-4/5 lg:text-left">{crewItem[imageIndex].bio}</p>
            </motion.section>
        </div>
    );
};

export default Carousel;
