import Logo from "@/components/Nav/Logo";
import NavLinks from "@/components/Nav/NavLinks";
import {SectionBlock} from "@/Styles/simpleBlocks";
import Box from "@/components/Blocks/Box";


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
