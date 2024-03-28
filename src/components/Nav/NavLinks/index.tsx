import {NavData} from "@/components/nav/NavLinks/Data";
import SingleNavLink from "@/components/nav/NavLinks/SingleLink";
import Box from "@/components/Blocks/Box";

const NavLinks = () => {
    return (
        <Box display={"flex"} alignItems={"center"}>
            {NavData.map((item, index) => (
                <SingleNavLink title={item.title} link={item.link} key={index}/>
            ))}
        </Box>
    );
};

export default NavLinks;
