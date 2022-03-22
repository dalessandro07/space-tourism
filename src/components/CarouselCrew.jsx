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
    const imageIndex = wrap(0, crewItem.length, page);

    const paginate = (newDirection) => {
        setPage([newDirection, newDirection]);
    };

    return (
        <div className="flex flex-col md:flex-col-reverse">
            <AnimatePresence initial={false} custom={direction}>
                <div className="flex justify-center w-full mt-8">
                    <motion.img
                        className="w-2/5 md:w-2/4 md:mt-12"
                        key={page}
                        src={crewItem[imageIndex].images.png}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
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
            <section className="w-full flex justify-center border-t-[1px] border-gray-500 md:border-none">
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
            <section className="flex flex-col items-center mt-8">
                <h2 className="text-sm text-white/50 uppercase md:text-xl">{crewItem[imageIndex].role}</h2>
                <h1 className="text-xl my-1 text-white uppercase md:text-3xl md:mb-4">{crewItem[imageIndex].name}</h1>
                <p className="text-sm text-center my-2 mx-12 text-[#D0D6F9] md:text-lg md:w-3/5 md:mb-8">{crewItem[imageIndex].bio}</p>
            </section>
        </div>
    );
};

export default Carousel;
