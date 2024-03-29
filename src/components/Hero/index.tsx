import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import IntroSection from "@/components/Hero/AboutSection";
import HeroImageSection from "@/components/Hero/HeroImageSection";

const Hero = () => {
    return (
        <SectionBlock mt={"32px"} pt={["24px", "24px","0px"]} px={["24px", "48px"]}>
            <Box display={"flex"} flexDirection={["column","column","row"]} justifyContent={"space-between"}
                 alignItems={"center"}
                 height={"100%"}
                 overflow={"hidden"}>
                <IntroSection/>
                <HeroImageSection/>
            </Box>
        </SectionBlock>
    );
};

export default Hero;
