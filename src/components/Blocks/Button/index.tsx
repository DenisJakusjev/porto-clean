import React from 'react';
import Box from "@/components/Blocks/Box";
import {INText} from "@/Styles/textBlocks";

const Button = ({text, onClick}: { text: string, onClick: () => void }) => {
    return (
        <Box as={"button"} style={{all: "unset", width:"100%"}} onClick={onClick}>
            <Box width={"100%"}
                 border={`1px solid rgba(68, 255, 170, 0.2)`}
                 p={"8px"}
                 borderRadius={"16px"}
                 background={"linear-gradient(180deg, rgba(68, 255, 170, 0.2) 0%, rgba(255, 255, 255, 0.02) 100%)"}
                 display={"flex"}
                 justifyContent={"center"}>
                <INText fontSize={"18px"}>
                    {text}
                </INText>
            </Box>

        </Box>
    );
};

export default Button;
