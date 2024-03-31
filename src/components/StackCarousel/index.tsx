import React from 'react';
import Carousel from "@/components/Carousel";
import Box from "@/components/Blocks/Box";
import {SectionBlock} from "@/Styles/SimpleBlocks";
import {JTText, Span} from "@/Styles/textBlocks";
import {StackIcons} from "@/components/StackCarousel/data";
import Image from "next/image"

export const RenderNode = ({item}: { item: any }) => (
    <Box minWidth={"150px"} height={"100px"} >
        <Image
            src={item.src.src}
            alt={item.alt}
            width={50}
            height={50}
            objectFit={"cover"}
            style={{width:"100%", height:"100%"}}
        />
    </Box>
);


const StackCarousel = () => {
    return (
        <SectionBlock width={"100%"} display={"flex"} mt={"32px"}>
            <Box p={["24px", "48px"]} alignItems={"center"} overflow={"hidden"}>
                <JTText fontSize={"24px"}><Span color={"mainGray"}>const</Span> <Span color={"mainGreen"}>stack</Span> =
                </JTText>
                <Box display={"flex"} width={"100%"}>
                    <JTText fontSize={"120px"} color={"mainGray"}>[</JTText>
                    <Box display={"flex"} alignItems={"center"} overflow={"hidden"}>
                        <Carousel items={StackIcons} RenderNode={RenderNode}/>
                    </Box>
                    <JTText fontSize={"120px"} color={"mainGray"}>]</JTText>
                </Box>
            </Box>
        </SectionBlock>
    );
};

export default StackCarousel;
