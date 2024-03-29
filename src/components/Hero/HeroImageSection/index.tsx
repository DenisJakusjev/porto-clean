import Box from "@/components/Blocks/Box";
import Image from "next/image"
import HeroImage from "./Images/EmojiFace.png"
import {IconData} from "@/components/Hero/HeroImageSection/Data";
import useAngleAnimation from "@/helpers/customHooks/circleAnimation";
const radius = 155;
const HeroImageSection = () => {
    const angle = useAngleAnimation();

    const customIconXY = (index: number) => {
        const iconX = Math.cos(angle + (index * (2 * Math.PI / IconData.length))) * radius;
        const iconY = Math.sin(angle + (index * (2 * Math.PI / IconData.length))) * radius;
        return {iconX, iconY}
    }

    return (
        <Box width={"50%"} >
            <Box width={"100%"} position={"relative"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Image
                    src={HeroImage.src}
                    width={420}
                    height={420}
                    style={{
                        width: "100%",
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


// <Box
// //     width={["100%", "100%", "45%", "45%"]}
// //     height="50%"
// //     borderRadius={1}
// //     overflow="hidden"
// //     alignItems="flex-end"
// // >
// //
// // </Box>