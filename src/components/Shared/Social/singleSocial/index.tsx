import Link from "next/link";
import {SocialsDataItem} from "../data";

const SingleSocial = ({item}:{item:SocialsDataItem}) => {
    return (
        <Link target={"_blank"} href={item.link}>
            {item.icon}
        </Link>
    );
};

export default SingleSocial;
