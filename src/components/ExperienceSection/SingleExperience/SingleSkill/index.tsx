import Box from "@/components/Blocks/Box";
import {getColor} from "@/helpers";
import {JTText} from "@/Styles/textBlocks";

const SingleSkill = ({skillName}:{skillName:string}) => {
    return (
        <Box border={`1px solid ${getColor("mainGreen")}`} borderRadius={"8px"} width={"max-content"} p={"4px"}>
            <JTText color={"mainGreen"} fontSize={"12"}>{skillName}</JTText>
        </Box>
    );
};

export default SingleSkill;
