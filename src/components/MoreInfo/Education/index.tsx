import React from 'react';
import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";

const Education = () => {
    return (
        <SectionBlock width={"48%"}>
            <Box p={["24px","48px"]}>
             <TagTitleSimple>Education</TagTitleSimple>
            </Box>
        </SectionBlock>
    );
};

export default Education;
