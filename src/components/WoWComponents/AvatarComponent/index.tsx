import React from 'react';
import Box from "@/components/Blocks/Box";
import Image from "next/image";
const AvatarComponent = ({wh, image}:{wh:number, image:NextImage}) => {
    return (
            <Box width={`${wh}px`} height={`${wh}px`} borderRadius={"100px"} display={"flex"} alignItems={"center"} justifyContent={"center"} position={"relative"} overflow={"hidden"}>
                <Image
                    src={image.src}
                    alt="goblinbl logo"
                    fill
                    style={{ objectFit: "cover" }} // Ensures it fills the container
                />
            </Box>
    );
};

export default AvatarComponent;