import Box from "@/components/Blocks/Box";
import {Span} from "@/Styles/textBlocks";
import TagMarksTitle from "@/components/Shared/TagMarksTitle";

const Logo = () => {
    return (
        <Box my={["24px", "24px", "0px"]}>
            <TagMarksTitle fontSize={["16px", "24px","32px"]} lineHeight={["20px", "28px"]} noMarginBottom>
                Denis<Span
                color={"mainGreen"}>Jakusjev</Span>
            </TagMarksTitle>
        </Box>
    );
};

export default Logo;
