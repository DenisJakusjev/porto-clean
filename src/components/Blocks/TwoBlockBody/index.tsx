import Box from "@/components/Blocks/Box";
import {ReactNode} from "react";

const TwoBlockBody = ({children, gridGap}:{children:ReactNode, gridGap?:string | string[]}) => {
    return (
        <Box
            width={"100%"}
            mt={"32px"}
            display={"flex"}
            flexDirection={["column","column","row"]}
            justifyContent={"space-between"}
        gridGap={gridGap}>
            {children}
        </Box>
    );
};

export default TwoBlockBody;
