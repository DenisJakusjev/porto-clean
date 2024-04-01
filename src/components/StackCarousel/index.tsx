import Carousel from "@/components/Carousel";
import Box from "@/components/Blocks/Box";
import {SectionBlock} from "@/Styles/SimpleBlocks";
import {JTText, Span} from "@/Styles/textBlocks";
import {StackIcons} from "@/components/StackCarousel/data";
import {SingleStackIcon} from "@/components/StackCarousel/SingleStackIcon";

const StackCarousel = () => {
    return (
        <SectionBlock width={"100%"} display={"flex"} mt={"32px"}>
            <Box p={["24px", "48px"]} alignItems={"center"} overflow={"hidden"}>
                <JTText fontSize={"24px"}><Span color={"mainGray"}>const</Span> <Span color={"mainGreen"}>stack</Span> =
                </JTText>
                <Box display={"flex"} width={"100%"}>
                    <JTText fontSize={"120px"} color={"mainGray"}>[</JTText>
                    <Box display={"flex"} alignItems={"center"} overflow={"hidden"}>
                        <Carousel items={StackIcons} RenderNode={SingleStackIcon}/>
                    </Box>
                    <JTText fontSize={"120px"} color={"mainGray"}>]</JTText>
                </Box>
            </Box>
        </SectionBlock>
    );
};

export default StackCarousel;
