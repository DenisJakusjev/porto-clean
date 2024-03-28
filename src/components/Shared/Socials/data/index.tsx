import {GithubLogo, LinkedinLogo, EnvelopeSimple} from "@phosphor-icons/react";
import {getColor} from "@/helpers";
import {JSX, ReactElement} from "react";


export type SocialsDataItem = {
    name: string;
    link: string;
    icon: JSX.Element | ReactElement;
}

const iconColor: string = getColor("mainGray");
const ds: number = 20;

const Icon = ({icon}: { icon: JSX.Element | ReactElement }) => ({icon})

export const SocialsData: SocialsDataItem[] = [{
    name: "Github",
    link: "https://github.com/DenisJakusjev",
    icon: <GithubLogo size={ds} color={iconColor}/>
}, {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/denis-jakusjev/",
    icon: <LinkedinLogo size={ds} color={iconColor}/>
}, {
    name: "Email",
    link: "mailto:denis.jakusjev@gmail.com",
    icon: <EnvelopeSimple size={ds} color={iconColor}/>
}

]