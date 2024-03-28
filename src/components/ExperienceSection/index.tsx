import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import TagMarksTitle from "@/components/Shared/TagMarksTitle";

const ExperienceSection = () => {
    return (
        <SectionBlock mt={"32px"} as={"section"}>
            <Box p={"48px"}>
               <TagMarksTitle fontSize={"32px"} lineHeight={"32px"}>Experience</TagMarksTitle>
            </Box>
        </SectionBlock>
    );
};

export default ExperienceSection;
