import React from 'react';
import {INText} from "@/Styles/textBlocks";
import Box from "@/components/Blocks/Box";

const StartEndDate = ({startDate, endDate}: { startDate: string, endDate: string }) => {
    return (
        <Box>
            <INText fontSize={"14px"} lineHeight={"21px"} color={"lightGray"}>{`${startDate} - ${endDate}`}</INText>
        </Box>
    );
};

export default StartEndDate;
