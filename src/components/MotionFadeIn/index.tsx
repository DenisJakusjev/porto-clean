import {ReactNode, useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

type Direction = "top" | "bottom" | "left" | "right";

const MotionFadeIn = ({direction, children, delay = 0}: {
    direction: Direction,
    children: ReactNode,
    delay?: number
}) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, delay * 1000); // Convert seconds to milliseconds

        return () => clearTimeout(timer);
    }, [delay]);

    let initialAnimation: { opacity: number; x?: number; y?: number } = {opacity: 0};
    let animateAnimation: { opacity: number; x?: number; y?: number } = {opacity: 1};

    switch (direction) {
        case "top":
            initialAnimation.y = -50;
            animateAnimation.y = 0;
            break;
        case "bottom":
            initialAnimation.y = 50;
            animateAnimation.y = 0;
            break;
        case "left":
            initialAnimation.x = -50;
            animateAnimation.x = 0;
            break;
        case "right":
            initialAnimation.x = 50;
            animateAnimation.x = 0;
            break;
        default:
            break;
    }

    return (
        <motion.div
            style={{maxWidth: "unset", width: "100%", display: "flex", justifyContent: "center", minHeight:"inherit"}}
            ref={ref}
            initial={initialAnimation}
            animate={startAnimation && inView ? animateAnimation : initialAnimation}
            transition={{duration: 1}}
        >
            {children}
        </motion.div>
    );
}

export default MotionFadeIn;