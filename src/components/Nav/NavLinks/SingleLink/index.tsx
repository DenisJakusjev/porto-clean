import {SingleNavItem} from "@/components/Nav/NavLinks/Data";
import {ScrollToLink} from "@/components/Nav/styles/navStyles";
import Box from "@/components/Blocks/Box";
import {JTText, Span} from "@/styles/textBlocks";

const SingleNavLink = ({title, link}: SingleNavItem) => {
    const handleClick = () => {
        const Element = document.getElementById(link);
        if (Element) {
            Element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
    }

    return (
        <ScrollToLink onClick={handleClick}>
            <Box mr={"15px"}>
                <JTText fontSize={"18px"} fontWeight={"250"}>
                    <Span color={"lightGray"}>./</Span>{title}</JTText>
            </Box>
        </ScrollToLink>
    );
};

export default SingleNavLink;
