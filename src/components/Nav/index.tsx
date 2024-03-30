import Logo from "@/components/Nav/Logo";
import NavLinks from "@/components/Nav/NavLinks";
import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import MobileNav from "@/components/Nav/Mobile";


const NavBar = () => {
    return (
        <SectionBlock as={"nav"} width={"100%"}>
            <Box p={["12px","24px"]} display={"flex"} alignItems={"center"} justifyContent={"space-between"} width={"100%"} flexWrap={"wrap"}>
                <Logo/>
                <NavLinks />
                <MobileNav/>
            </Box>
        </SectionBlock>
    );
};

export default NavBar;
