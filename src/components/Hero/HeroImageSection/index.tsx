import Box from "@/components/Blocks/Box";
import Image from "next/image"
import HeroImage from "./Images/EmojiFace.png"
import {IconData} from "@/components/Hero/HeroImageSection/Data";
import useAngleAnimation from "@/helpers/customHooks/circleAnimation";
import {diffMQValues} from "@/helpers";
import {AnimatePresence, motion} from "framer-motion";

const HeroImageSection = () => {
    const angle = useAngleAnimation();
    const customIconXY = (index: number) => {
        const iconX = Math.cos(angle + (index * (2 * Math.PI / IconData.length))) * diffMQValues([80, 100, 155]);
        const iconY = Math.sin(angle + (index * (2 * Math.PI / IconData.length))) * diffMQValues([80, 100, 155]);
        return {iconX, iconY}
    }

    return (
        <Box width={"50%"}>
            <Box width={"100%"} position={"relative"} display={"flex"} alignItems={"center"}
                 justifyContent={"center"}>
                <Image
                    src={HeroImage.src}
                    width={360}
                    height={360}
                    style={{
                        width: "70%",
                        height: "auto",
                    }}
                    sizes="100vw"
                    alt="Emoji of Denis Jakusjev"
                />
                {IconData.map((item, index) => {
                    const {iconX, iconY} = customIconXY(index);
                    return (
                        <Image
                            key={index}
                            width={diffMQValues([32, 48, 64])}
                            height={diffMQValues([32, 48, 64])}
                            src={item.icon}
                            alt={`Icon ${index + 1}`}
                            style={{
                                position: 'absolute',
                                top: `calc(${diffMQValues([35, 40, 40])}% - ${iconY}px)`,
                                left: `calc(${diffMQValues([50, 50, 50])}% + ${iconX}px)`,
                            }}
                        />

                    );
                })}
            </Box>
        </Box>

    );
};

export default HeroImageSection;