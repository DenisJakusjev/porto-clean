import Box from "@/components/Blocks/Box";
import {SocialsData} from "./data";
import SingleSocial from "./singleSocial";

const Socials = () => {
    return (
        <Box mt={"40px"} display={"flex"} gridGap={"15px"}>
            {SocialsData.map((item, index) => (
                <SingleSocial item={item} key={index}/>
            ))}

        </Box>
    );
};

export default Socials;
