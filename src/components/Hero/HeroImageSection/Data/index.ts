import Html from "../Images/Html.svg";
import Css from "../Images/Css.svg";
import Js from "../Images/JS.svg";
import Ts from "../Images/TypeScript.svg";
import React from "../Images/React.svg";
import Next from "../Images/Next.svg";


export type SingleIcon = {
    icon: any,
    alt: string,
}

export const IconData: SingleIcon[] = [
    {
        icon: Html.src,
        alt: "Html",
    },
    {
        icon: Css.src,
        alt: "Css",
    },
    {
        icon: Js.src,
        alt: "Js",
    },
    {
        icon: Ts.src,
        alt: "Ts",
    },
    {
        icon: React.src,
        alt: "React",
    },
    {
        icon: Next.src,
        alt: "Next",
    },
]