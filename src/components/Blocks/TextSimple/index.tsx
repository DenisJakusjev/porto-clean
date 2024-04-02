import React, {ReactNode} from 'react';
import Box from "@/components/Blocks/Box";
import {INText} from "@/Styles/textBlocks";

const TextSimple = ({children}: { children: ReactNode }) => {
    return (
        <Box as={"article"} fontSize={["12px", "16px"]} lineHeight={"1.6"} fontWeight={["150", "200"]}>
            <INText fontWeight={"inherit"}>{children}</INText>
        </Box>
    );
};

export default TextSimple;
