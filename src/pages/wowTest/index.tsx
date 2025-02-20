import React from 'react';
import NextHead from "@/components/Head";
import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";
import GoblinblLogo from "@/components/WoWComponents/GoblinblLogo";

const Index = () => {
    return (
        <>
            <NextHead title="Goblinbl"/>
            <SectionBlock>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} m={20}>
                    <GoblinblLogo/>
                    <TagTitleSimple nmb={true}>Goblinbl</TagTitleSimple>
                </Box>
            </SectionBlock>

        </>
    );
};

export default Index;