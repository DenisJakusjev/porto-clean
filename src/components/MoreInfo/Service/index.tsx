import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";
import TextSimple from "@/components/Blocks/TextSimple";

const Services = () => {
    return (
        <SectionBlock width={["100%","100%","48%"]} minHeight={["unset","unset","100%"]}>
            <Box p={["24px", "48px"]}>
                <TagTitleSimple>Services</TagTitleSimple>
                <Box mt={["20px", "40px"]}>
                    <TextSimple>Experienced Front-end Engineer with over 4 years of hands-on experience specializing in
                        React and Next.js development.
                    </TextSimple>
                    <Box my={"5px"}/>
                    <TextSimple>
                        Passionate about creating efficient and user-friendly web applications, I have a proven track
                        record
                        of delivering high-quality code and collaborating effectively with cross-functional teams.
                    </TextSimple>
                    <Box my={"5px"}/>
                    <TextSimple>
                        Let&apos;s connect and discuss how I can contribute to your next project!
                    </TextSimple>
                </Box>
            </Box>
        </SectionBlock>
    );
};

export default Services;
