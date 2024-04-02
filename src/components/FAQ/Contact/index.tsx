import {SectionBlock} from "@/Styles/SimpleBlocks";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";
import Box from "@/components/Blocks/Box";
import {JTText} from "@/Styles/textBlocks";
import {JSX, ReactElement} from "react";
import {Envelope, Phone, WhatsappLogo} from "@phosphor-icons/react";
import Link from "next/link";
import {getColor} from "@/helpers";
import Socials from "@/components/Shared/Social";

const SingleContact = ({text, icon}: { text: string, icon: JSX.Element | ReactElement }) => (
    <Box display={"flex"} alignItems={"center"} mb={"10px"} gridGap={"5px"}>
        {icon}
        <JTText>{text}</JTText>
    </Box>
)

const Contact = () => {
    return (
        <SectionBlock width={"100%"} minHeight={["unset","unset","100%"]} mb={["32px","32px","0px"]}>
            <Box p={["24px", "48px"]} id={"contact"}>
                <TagTitleSimple>Contact</TagTitleSimple>
                <Box>
                    <Box mb={"30px"}>
                        <JTText>
                            Feel free to get in touch, it will be a great pleasure
                            to be able to help you with your project, contact me now!
                        </JTText>
                    </Box>
                    <Box>
                        <SingleContact text={"+46 73 783 53 54"} icon={<Phone size={20} color={getColor("mainGreen")}/>}/>
                        <SingleContact text={"+46 73 783 53 54"} icon={<WhatsappLogo size={20} color={getColor("mainGreen")} />}/>
                        <Link href={"mailto:denis.jakusjev@gmail.com"}>
                            <SingleContact text={"denis.jakusjev@gmail.com"} icon={<Envelope size={20} color={getColor("mainGreen")}/>}/>
                        </Link>
                        <Socials/>

                    </Box>
                </Box>
            </Box>
        </SectionBlock>
    );
};

export default Contact;
