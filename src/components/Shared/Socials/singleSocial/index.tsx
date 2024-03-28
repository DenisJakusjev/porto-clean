import Link from "next/link";
import {SocialsDataItem} from "@/components/Shared/Socials/data";

const SingleSocial = ({item}:{item:SocialsDataItem}) => {
    const {icon} = item
    return (
        <Link target={"_blank"} href={item.link}>
            {item.icon}
        </Link>
    );
};

export default SingleSocial;