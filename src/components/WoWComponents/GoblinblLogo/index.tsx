import React from 'react';
import image from "../../../images/goblinS.jpg"
import Box from "@/components/Blocks/Box";
import Image from "next/image";
const GoblinblLogo = () => {
    return (
            <Box width={"100px"} height={"100px"} borderRadius={"100px"} display={"flex"} alignItems={"center"} justifyContent={"center"} position={"relative"} overflow={"hidden"}>
                <Image
                    src={image.src}
                    alt="goblinbl logo"
                    fill
                    style={{ objectFit: "cover" }} // Ensures it fills the container
                />
            </Box>
    );
};

export default GoblinblLogo;