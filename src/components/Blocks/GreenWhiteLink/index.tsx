import Link from "next/link";
import {JTText, Span} from "@/Styles/textBlocks";
import Box from "@/components/Blocks/Box";
import styled from "styled-components";

const StyledNextLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;

    }
`;

const GLLink = ({gText, wText, link}: { gText: string, wText: string, link: string }) => {
    return (
        <StyledNextLink href={link} target={"_blank"}>
            <Box fontSize={["16px", "18px"]} display={"flex"} alignItems={"center"} flex={"wrap"}>
                <JTText lineHeight={"27px"}><Span
                    color={"mainGreen"}>{gText} </Span> • {wText} </JTText>
            </Box>
        </StyledNextLink>
    );
};

export default GLLink;
