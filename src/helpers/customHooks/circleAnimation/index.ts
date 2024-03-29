import { useState, useRef, useEffect } from 'react';

const useAngleAnimation = (): number => {
    const [angle, setAngle] = useState<number>(0);
    const lastFrameTime = useRef(0);

    useEffect(() => {
        const animate = (timestamp: number) => {
            if (!lastFrameTime.current) {
                lastFrameTime.current = timestamp;
            }
            const timeDelta = timestamp - lastFrameTime.current;
            lastFrameTime.current = timestamp;
            const angularVelocity = -0.0008;
            setAngle(prevAngle => (prevAngle + angularVelocity * timeDelta) % (2 * Math.PI));
            requestAnimationFrame(animate);
        };

        const animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return angle;
};

export default useAngleAnimation;
