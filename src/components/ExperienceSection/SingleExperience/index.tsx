import {SingleExperience as SEType} from "@/components/ExperienceSection/SingleExperience/data";
import Box from "@/components/Blocks/Box";
import Image from "next/image";
import {getColor} from "@/helpers";
import {INText, JTText, Span} from "@/Styles/textBlocks";
import Link from "next/link";
import SingleSkill from "@/components/ExperienceSection/SingleExperience/SingleSkill";
import TextSimple from "@/components/Blocks/TextSimple";
import StartEndDate from "@/components/Blocks/StartEndDate";
import GLLink from "@/components/Blocks/GreenWhiteLink";

const SingleExperience = ({item, last}: { item: SEType, last?: boolean }) => {
    return (
        <Box as={"section"} display={"flex"} mb={"20px"} width={"100%"}>
            <Box display={["none", "flex"]} flexDirection={"column"} alignItems={"center"}>
                <Image src={item.icon.src} alt={`${item.companyName} logo image`} width={64} height={64}
                       style={{borderRadius: "8px"}}/>
                {!last ? <Box mt={"5px"} width={"2px"} backgroundColor={getColor("lightGray")} height={"100%"}/> : null}
            </Box>
            <Box ml={["0px", "20px"]}>
                <GLLink gText={item.position} wText={item.companyName} link={item.link}/>
                <StartEndDate startDate={item.startDate} endDate={item.endDate}/>
                <TextSimple>{item.description}</TextSimple>
                <Box display={"flex"} gridGap={"10px"} flexWrap={"wrap"} mt={"20px"}>
                    {item.techStack.map((skill, index) => (
                        <SingleSkill skillName={skill} key={index}/>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default SingleExperience;
