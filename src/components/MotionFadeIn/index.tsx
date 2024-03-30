import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Side = "top" | "bottom" | "left" | "right";

const MotionFadeIn = ({ side, children, delay = 0 } : { side: Side, children: ReactNode, delay?: number }) => {
    const { ref, inView } = useInView({
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

    const animationProps: { [key in Side]: { opacity: number; x?: number; y?: number } } = {
        "top": { opacity: 0, y: -50 },
        "bottom": { opacity: 0, y: 50 },
        "left": { opacity: 0, x: -50 },
        "right": { opacity: 0, x: 50 }
    };

    let initialAnimation = animationProps[side];
    let animateAnimation: { opacity: number; x?: number; y?: number } = { opacity: 1 };

    return (
        <motion.div
            style={{ maxWidth: "1440px", width: "100%", display: "flex", justifyContent: "center" }}
            ref={ref}
            initial={initialAnimation}
            animate={startAnimation && inView ? animateAnimation : initialAnimation}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
}

export default MotionFadeIn;
