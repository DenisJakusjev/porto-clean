import Box from "@/components/blocks/Box";
import {SocialsData} from "@/components/shared/socials/data";
import SingleSocial from "@/components/shared/socials/singleSocial";

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
