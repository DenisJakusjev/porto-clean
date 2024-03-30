import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import TagMarksTitle from "@/components/Shared/TagMarksTitle";
import {experienceData} from "@/components/ExperienceSection/SingleExperience/data";
import SingleExperience from "@/components/ExperienceSection/SingleExperience";

const ExperienceSection = () => {
    return (
        <SectionBlock mt={"32px"} as={"section"} width={"100%"} id={"#experience"}>
            <Box p={["24px","48px"]} width={"100%"}>
               <TagMarksTitle fontSize={["16px", "24px"]} lineHeight={["20px", "28px"]}>Experience</TagMarksTitle>
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
