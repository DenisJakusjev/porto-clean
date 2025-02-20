import React from 'react';
import NextHead from "@/components/Head";
import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";
import AvatarComponent from "../../components/WoWComponents/AvatarComponent";
import goblinAv from "../../images/goblinS.jpg"
const Index = () => {
    return (
        <>
            <NextHead title="Goblinbl"/>
            <SectionBlock>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} m={20}>
                    <AvatarComponent image={goblinAv} wh={100} /><Box m={"5px"}/>
                    <TagTitleSimple nmb={true}>Goblinbl</TagTitleSimple>
                </Box>

            </SectionBlock>

        </>
    );
};

export default Index;