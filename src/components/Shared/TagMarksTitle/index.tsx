import {ReactNode} from "react";
import {JTText, Span} from "@/Styles/textBlocks";
import Box from "@/components/Blocks/Box";

const TagMarksTitle = ({children, fontSize, lineHeight,noMarginBottom}: {
    children: ReactNode,
    fontSize: string | string [],
    lineHeight: string | string []
    noMarginBottom?: boolean;
}) => {
    return (
        <Box fontSize={fontSize} lineHeight={lineHeight} mb={noMarginBottom ? "0px" : ["20px","40px"]}>
            <JTText>
                <Span letterSpacing={"5px"} color={"lightGray"}>{`<`}</Span>
                {children}
                <Span letterSpacing={"5px"} color={"lightGray"}>{`/>`}</Span>
            </JTText>
        </Box>
    );
};

export default TagMarksTitle;
