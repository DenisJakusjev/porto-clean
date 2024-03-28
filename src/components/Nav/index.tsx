import Logo from "@/components/nav/Logo";
import NavLinks from "@/components/nav/NavLinks";
import {SectionBlock} from "../../styles/simpleBlocks";
import Box from "@/components/blocks/Box";


const NavBar = () => {
    return (
        <SectionBlock >
            <Box p={"24px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} width={"100%"}
                 flexWrap={"wrap"}>
                <Logo/>
                <NavLinks/>
            </Box>
        </SectionBlock>
    );
};

export default NavBar;
