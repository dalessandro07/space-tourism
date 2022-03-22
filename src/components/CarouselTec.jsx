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

const Carousel = ({ tecItem }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, tecItem.length, page);

    const paginate = (newDirection) => {
        setPage([newDirection, newDirection]);
    };

    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <div className="flex justify-center w-full mt-8">
                    <motion.img
                        className=""
                        key={page}
                        src={tecItem[imageIndex].images.landscape}
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
            <section className="w-full flex justify-center mt-8">
                {tecItem.map((item, indice) => {
                    return (
                        <button
                            onClick={() => {
                                paginate(indice);
                            }}
                            key={item.name}
                            className={imageIndex === indice ? 'mx-2 bg-white rounded-full w-8 h-8' : 'mx-2 bg-transparent border-white/25 text-white border-[1px] rounded-full w-8 h-8'}>
                            {indice + 1}
                        </button>
                    );
                })}
            </section>
            <section className="flex flex-col items-center my-8">
                <h2 className="text-sm text-white/50 uppercase">The terminology...</h2>
                <h1 className="text-xl my-1 text-white uppercase">{tecItem[imageIndex].name}</h1>
                <p className="text-lg text-center my-2 mx-12 text-[#D0D6F9]">{tecItem[imageIndex].description}</p>
            </section>
        </>
    );
};

export default Carousel;
