import Box from "@/components/Blocks/Box";
import {JTText, Span} from "../../../Styles/TextBlocks";

const Logo = () => {
    return (
        <Box  my={["24px", "24px", "0px"]}>
            <JTText fontSize={"28px"} lineHeight={"28px"}>
                <Span letterSpacing={"5px"} color={"lightGray"}>{`<`}</Span>Denis<Span
                color={"mainGreen"}>Jakusjev</Span><Span letterSpacing={"5px"}
                                                         color={"lightGray"}>{`/>`}</Span>
            </JTText>
        </Box>
    );
};

export default Logo;
