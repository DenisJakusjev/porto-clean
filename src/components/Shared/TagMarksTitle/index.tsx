import {ReactNode} from "react";
import {JTText, Span} from "@/Styles/textBlocks";
import Box from "@/components/Blocks/Box";

const TagMarksTitle = ({children, fontSize, lineHeight}: {
    children: ReactNode,
    fontSize: string | string [],
    lineHeight: string | string []
}) => {
    return (
        <Box fontSize={fontSize} lineHeight={lineHeight} mb={["20px","40px"]}>
            <JTText>
                <Span letterSpacing={"5px"} color={"lightGray"}>{`<`}</Span>
                {children}
                <Span letterSpacing={"5px"} color={"lightGray"}>{`/>`}</Span>
            </JTText>
        </Box>
    );
};

export default TagMarksTitle;
