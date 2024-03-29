import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import TagMarksTitle from "@/components/Shared/TagMarksTitle";
import {experienceData} from "@/components/ExperienceSection/SingleExperience/data";
import SingleExperience from "@/components/ExperienceSection/SingleExperience";

const ExperienceSection = () => {
    return (
        <SectionBlock mt={"32px"} as={"section"} width={"100%"}>
            <Box p={"48px"} width={"100%"}>
               <TagMarksTitle fontSize={"32px"} lineHeight={"32px"}>Experience</TagMarksTitle>
                <Box mt={"32px"}>
                {experienceData.map((item, index) => (
                    <SingleExperience item={item} key={index} last={experienceData.length - 1 == index}/>
                ))}
                </Box>
            </Box>

        </SectionBlock>
    );
};

export default ExperienceSection;
