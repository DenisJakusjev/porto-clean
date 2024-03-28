import {SectionBlock} from "../../styles/simpleBlocks";
import Box from "@/components/blocks/Box";
import IntroSection from "@/components/hero/AboutSection";
import HeroImageSection from "@/components/hero/HeroImageSection";

const Hero = () => {
    return (
        <SectionBlock mt={"32px"}>
            <Box px={"48px"} display={"flex"} justifyContent={"space-between"}
                 height={"100%"}>
                <IntroSection/>
                <HeroImageSection/>
            </Box>
        </SectionBlock>
    );
};

export default Hero;
