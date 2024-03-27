import Box from "@/components/Blocks/Box";
import Image from "next/image"
import HeroImage from "./Images/EmojiFace.png"
import {IconData} from "@/components/Hero/HeroImageSection/Data";
import {useEffect, useRef, useState} from "react";
const radius = 155;
const HeroImageSection = () => {
    const [angle, setAngle] = useState<number>(0);
    const lastFrameTime = useRef(0);

    useEffect(() => {
        const animate = (timestamp:number) => {
            if (!lastFrameTime.current) {
                lastFrameTime.current = timestamp;
            }
            const timeDelta = timestamp - lastFrameTime.current;
            lastFrameTime.current = timestamp;

            const angularVelocity = 0.001; // Adjust rotation speed as needed
            setAngle(prevAngle => (prevAngle + angularVelocity * timeDelta) % (2 * Math.PI));

            requestAnimationFrame(animate);
        };

        const animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);
    return (
        <Box width={"50%"} >
            <Box width={"100%"} position={"relative"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Image
                    src={HeroImage.src}
                    alt={"Denis Jakusjev Emoji"}
                    width={420}
                    height={420}
                    sizes="100vw"
                />
                {IconData.map((item, index) => {
                    const iconX = Math.cos(angle + (index * (2 * Math.PI / IconData.length))) * radius;
                    const iconY = Math.sin(angle + (index * (2 * Math.PI / IconData.length))) * radius;

                    return (
                        <Image
                            key={index}
                            width={64}
                            height={64}
                            src={item.icon}
                            alt={`Icon ${index + 1}`}
                            style={{
                                position: 'absolute',
                                top: `calc(40% - ${iconY}px)`,
                                left: `calc(50% + ${iconX}px)`,
                            }}
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

export default HeroImageSection;
