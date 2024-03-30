import React from 'react';
import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";
import {educationData} from "@/components/MoreInfo/Education/data";
import SingleEducation from "@/components/MoreInfo/Education/SingleEducation";

const Education = () => {
    return (
        <SectionBlock width={"48%"} minHeight={"100%"}>
            <Box p={["24px", "48px"]}>
                <TagTitleSimple>Education</TagTitleSimple>
                <Box mt={["20px", "40px"]}>
                    {educationData.map((item, index) => (
                        <SingleEducation item={item} last={educationData.length - 1 === index}/>
                    ))}
                </Box>
            </Box>
        </SectionBlock>
    );
};

export default Education;
