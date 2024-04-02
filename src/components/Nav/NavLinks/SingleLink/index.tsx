import {SingleNavItem} from "@/components/Nav/NavLinks/Data";
import {ScrollToLink} from "@/components/Nav/styles/navStyles";
import Box from "@/components/Blocks/Box";
import {JTText, Span} from "../../../../Styles/textBlocks";
import {shallowRoute} from "@/helpers/Router";
import {useRouter} from "next/router";

const SingleNavLink = ({title, link}: SingleNavItem) => {
    const router = useRouter()
    const handleClick = async () => {
        const Element = document.getElementById(link);

        if (Element) {
            Element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            setTimeout(() => {
                router.push(`#${link}`);
            },1000);
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
