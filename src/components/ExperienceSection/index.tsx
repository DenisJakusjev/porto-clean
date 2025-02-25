import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import {experienceData} from "@/components/ExperienceSection/SingleExperience/data";
import SingleExperience from "@/components/ExperienceSection/SingleExperience";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";

const ExperienceSection = () => {
    return (
        <SectionBlock mt={"32px"} as={"section"} width={"100%"} id={"experience"}>
            <Box p={["24px", "48px"]} width={"100%"}>
                <TagTitleSimple>Experience</TagTitleSimple>
                {experienceData.map((item, index) => (
                    <SingleExperience item={item} key={index} last={experienceData.length - 1 == index}/>
                ))}

            </Box>

        </SectionBlock>
    );
};

export default ExperienceSection;
