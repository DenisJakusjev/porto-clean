import Box from "@/components/Blocks/Box";
import {Span} from "@/Styles/textBlocks";
import TagMarksTitle from "@/components/Shared/TagMarksTitle";

const Logo = () => {
    return (
        <Box my={["24px", "24px", "0px"]}>
            <TagMarksTitle fontSize={"28px"} lineHeight={"28px"}>
                Denis<Span
                color={"mainGreen"}>Jakusjev</Span>
            </TagMarksTitle>
        </Box>
    );
};

export default Logo;
