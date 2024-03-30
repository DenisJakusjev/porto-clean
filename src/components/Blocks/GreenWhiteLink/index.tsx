import React from 'react';
import Link from "next/link";
import {JTText, Span} from "@/Styles/textBlocks";

const GLLink = ({gText, wText, link}: { gText: string, wText: string, link: string }) => {
    return (
        <Link href={link} target={"_blank"}>
            <JTText fontSize={"18px"} lineHeight={"27px"}><Span
                color={"mainGreen"}>{gText}</Span> • {wText}</JTText>
        </Link>
    );
};

export default GLLink;
