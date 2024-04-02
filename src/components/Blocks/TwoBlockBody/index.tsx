import Box from "@/components/Blocks/Box";
import {ReactNode} from "react";

const TwoBlockBody = ({children}:{children:ReactNode}) => {
    return (
        <Box
            width={"100%"}
            mt={"32px"}
            display={"flex"}
            flexDirection={["column","column","row"]}
            justifyContent={"space-between"}>
            {children}
        </Box>
    );
};

export default TwoBlockBody;
