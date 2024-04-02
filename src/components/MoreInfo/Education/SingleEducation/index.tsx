import Box from "@/components/Blocks/Box";
import {getColor} from "@/helpers";
import GLLink from "@/components/Blocks/GreenWhiteLink";
import StartEndDate from "@/components/Blocks/StartEndDate";
import {SingleEducation} from "@/components/MoreInfo/Education/data";
import TextSimple from "@/components/Blocks/TextSimple";
import {Span} from "@/Styles/textBlocks";

const SingelEducation = ({item, last}: { item: SingleEducation, last: boolean }) => {
    return (
        <Box as={"section"} display={"flex"}  width={"100%"}>
            <Box display={["none", "flex"]} flexDirection={"column"} alignItems={"center"}>
                <Box minWidth={"32px"} minHeight={"32px"} backgroundColor={getColor("mainGreen")} borderRadius={"100px"}/>
                {!last ? <Box width={"2px"} backgroundColor={getColor("lightGray")} height={"100%"}/> : null}
            </Box>
            <Box ml={["0px", "20px"]} mb={"20px"}>
                <GLLink gText={item.title} wText={item.school} link={item.link}/>
                <StartEndDate startDate={item.startDate} endDate={item.endDate}/>
                <TextSimple><Span color={"mainGreen"}>Degree: </Span>{item.degree}</TextSimple>
            </Box>
        </Box>
    );
};

export default SingelEducation;
