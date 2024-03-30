import {SingleExperience as SEType} from "@/components/ExperienceSection/SingleExperience/data";
import Box from "@/components/Blocks/Box";
import Image from "next/image";
import {getColor} from "@/helpers";
import {INText, JTText, Span} from "@/Styles/textBlocks";
import Link from "next/link";
import SingleSkill from "@/components/ExperienceSection/SingleExperience/SingleSkill";

const SingleExperience = ({item, last}: { item: SEType, last?:boolean }) => {
    return (
        <Box as={"section"} display={"flex"} mb={"20px"} width={"100%"}>
            <Box width={"64px"} display={["none","flex"]} flexDirection={"column"} alignItems={"center"}>
                <Image src={item.icon.src} alt={`${item.companyName} logo image`} width={64} height={64}
                       style={{borderRadius: "8px"}}/>
                {!last ? <Box mt={"5px"} width={"2px"} backgroundColor={getColor("lightGray")} height={"100%"}/> : null}
            </Box>
            <Box ml={["0px","20px"]}>
                    <Link href={item.link} target={"_blank"}>
                        <JTText fontSize={"18px"} lineHeight={"27px"}><Span
                            color={"mainGreen"}>{item.position}</Span> • {item.companyName}</JTText>
                    </Link>
                <Box>
                    <INText fontSize={"14px"} lineHeight={"21px"} color={"lightGray"}>{`${item.startDate} - ${item.endDate}`}</INText>
                </Box>
                <Box as={"article"} mb={"20px"} fontSize={["12px","16px"]} lineHeight={"1.6"} fontWeight={["200","100"]}>
                    <INText  >{item.description}</INText>
                </Box>
                <Box display={"flex"} gridGap={"10px"} flexWrap={"wrap"}>
                    {item.techStack.map((skill, index) => (
                        <SingleSkill skillName={skill} key={index}/>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default SingleExperience;
