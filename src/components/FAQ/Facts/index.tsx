import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";
import {JTText} from "@/Styles/textBlocks";
import {ReactNode} from "react";

const TW = ({children}: { children: ReactNode }) => (
    <Box mb={"10px"}>
        <JTText> {children}</JTText>
    </Box>
)

const Facts = () => {
    return (
        <SectionBlock width={"100%"} minHeight={["unset", "unset", "100%"]}
                      mb={["32px", "32px", "0px"]}>
            <Box p={["24px", "48px"]}>
                <TagTitleSimple>Get to Know Me Better</TagTitleSimple>
                <TW>Some simple things about me :)</TW>
                <TW>1. I am passionate about continuous learning and self-improvement.</TW>
                <TW>2. I have a little daughter that was born 2023</TW>
                <TW>3. I have easy time managing stress situations</TW>
                <TW>4. I love to learn new stuff through difficult tasks so I learn in real-situations</TW>
                <TW>5. New challenges is fun!</TW>
                <TW>6. This portfolio is open-source, feel free to check out my github!</TW>
            </Box>
        </SectionBlock>
    );
};

export default Facts;
