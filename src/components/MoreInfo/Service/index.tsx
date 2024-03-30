import React from 'react';
import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";

const Services = () => {
    return (
        <SectionBlock width={"48%"}>
            <Box p={["24px","48px"]}>
                <TagTitleSimple>Services</TagTitleSimple>
            </Box>
        </SectionBlock>
    );
};

export default Services;
