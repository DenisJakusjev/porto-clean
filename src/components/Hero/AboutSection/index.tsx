import Box from "@/components/Blocks/Box";
import {HandWaving} from "@phosphor-icons/react";
import {getColor} from "@/helpers";
import Socials from "@/components/Shared/Social";
import {JTText, Span} from "@/Styles/textBlocks";
import Link from "next/link";

const IntroSection = () => {
    return (
        <Box  width={["100%","100%","40%"]} my={["0px","0px","48px"]}>
            <Box display={"flex"} alignItems={"center"}  marginBottom={"12px"}>
                <JTText color={"mainGray"} lineHeight={"24px"}>Hello there</JTText>
                <Box mx={"5px"}/>
                <HandWaving size={24} color={getColor("mainGray")}/>
            </Box>
            <Box marginBottom={"12px"} fontSize={["24px", "40px"]} lineHeight={["37px","53px"]}>
                <JTText fontWeight={"700"}>I&apos;m Denis</JTText>
            </Box>
            <Box fontSize={["16px","16px","18px"]} >
                <JTText  lineHeight={"27px"} fontWeight={"150"}>
                    a seasoned <Span color={"mainGreen"}>front-end engineer</Span> with <Span
                    color={"mainGreen"}>4+ years </Span>of crafting immersive web solutions that captivate users
                    and elevate online presence.
                </JTText>
            </Box>
            <Box fontSize={["16px","16px","18px"]} mt={"20px"} >
                <JTText  lineHeight={"27px"} fontWeight={"150"}>
                 This portfolio is open-source on my github, feel free to check the <Link href={"https://github.com/DenisJakusjev/porto-clean"} target={"_blank"}>codebase</Link>
                </JTText>
            </Box>
            <Socials/>
        </Box>
    );
};

export default IntroSection;
