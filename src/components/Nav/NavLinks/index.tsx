import {NavData} from "@/components/Nav/NavLinks/Data";
import SingleNavLink from "@/components/Nav/NavLinks/SingleLink";
import Box from "@/components/Blocks/Box";

const NavLinks = () => {
    return (
        <Box display={["none","none","flex"]} alignItems={"center"}>
            {NavData.map((item, index) => (
                <SingleNavLink title={item.title} link={item.link} key={index}/>
            ))}
        </Box>
    );
};

export default NavLinks;
