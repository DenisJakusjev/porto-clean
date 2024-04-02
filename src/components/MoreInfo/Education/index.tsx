import React from 'react';
import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";
import {educationData} from "@/components/MoreInfo/Education/data";
import SingleEducation from "@/components/MoreInfo/Education/SingleEducation";

const Education = () => {
    return (
        <SectionBlock width={"100%"} minHeight={["unset","unset","100%"]}>
            <Box p={["24px", "48px"]}>
                <TagTitleSimple>Education</TagTitleSimple>
                    {educationData.map((item, index) => (
                        <SingleEducation item={item} last={educationData.length - 1 === index} key={index}/>
                    ))}
            </Box>
        </SectionBlock>
    );
};

export default Education;
