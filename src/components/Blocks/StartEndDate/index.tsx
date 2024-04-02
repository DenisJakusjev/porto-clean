import {INText} from "@/Styles/textBlocks";
import Box from "@/components/Blocks/Box";

const StartEndDate = ({startDate, endDate}: { startDate: string, endDate: string }) => {
    return (
        <Box fontSize={["12px","14px"]}>
            <INText  lineHeight={"21px"} color={"lightGray"}>{`${startDate} - ${endDate}`}</INText>
        </Box>
    );
};

export default StartEndDate;
