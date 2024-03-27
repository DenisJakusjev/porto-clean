import Box from "@/components/Blocks/Box";
import {JTText, Span} from "@/Styles/textBlocks";
import {HandWaving} from "@phosphor-icons/react";
import {getColor} from "@/helpers";

const IntroSection = () => {
    return (
        <Box  width={"30%"} paddingTop={"48px"}>
            <Box display={"flex"} alignItems={"center"}  marginBottom={"12px"}>
                <JTText color={"mainGray"} lineHeight={"24px"}>Hello there</JTText>
                <HandWaving size={24} color={getColor("mainGray")}/>
            </Box>
            <Box marginBottom={"12px"}>
                <JTText fontSize={"40px"} lineHeight={"53px"}>I&apos;m Denis</JTText>
            </Box>
            <Box>
                <JTText fontSize={"18px"} lineHeight={"27px"}>
                    a seasoned <Span color={"mainGreen"}>front-end engineer</Span> with <Span
                    color={"mainGreen"}>4+ years </Span>of crafting immersive web solutions that captivate users
                    and elevate online presence.
                </JTText>
            </Box>
        </Box>
    );
};

export default IntroSection;