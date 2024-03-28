import {ReactNode} from "react";
import {JTText, Span} from "@/Styles/textBlocks";

const TagMarksTitle = ({children, fontSize, lineHeight}: {
    children: ReactNode,
    fontSize: string,
    lineHeight: string
}) => {
    return (
        <JTText fontSize={fontSize} lineHeight={lineHeight}>
            <Span letterSpacing={"5px"} color={"lightGray"}>{`<`}</Span>
            {children}
            <Span letterSpacing={"5px"} color={"lightGray"}>{`/>`}</Span>
        </JTText>
    );
};

export default TagMarksTitle;
