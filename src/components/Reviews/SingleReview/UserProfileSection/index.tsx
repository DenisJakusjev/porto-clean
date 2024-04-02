import {Profile} from "@/components/Reviews/data";
import Box from "@/components/Blocks/Box";
import Image from "next/image";
import {INText} from "@/Styles/textBlocks";
import Link from "next/link";

const ProfileSection = ({item}: { item: Profile }) => {
    return (

        <Box display={"flex"} width={"100%"} pb={"24px"} alignItems={"center"}>
            <Image src={item.avatar} alt={`${item.name} avatar`} width={64} height={64} className={"avatar"}
                   style={{borderRadius: "100px"}}/>
            <Box ml={"12px"}>
                <Link href={item.profileLink} target={"_blank"}>
                    <Box fontSize={["16px", "24px"]} pb={"5px"}>
                        <INText>{item.name}</INText>
                    </Box>
                </Link>

                <Box fontSize={["10px","12px"]} pb={"5px"}>
                    <INText>{item.position}</INText>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfileSection;
