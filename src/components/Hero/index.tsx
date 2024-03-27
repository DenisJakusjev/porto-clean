import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import IntroSection from "@/components/Hero/AboutSection";
import HeroImageSection from "@/components/Hero/HeroImageSection";

const Hero = () => {
    return (
        <SectionBlock style={{marginTop: "32px"}}>
            <Box paddingLeft={"48px"} paddingRight={"48px"} display={"flex"} justifyContent={"space-between"}
                 height={"100%"}>
                <IntroSection/>
                <HeroImageSection/>
            </Box>
        </SectionBlock>
    );
};

export default Hero;