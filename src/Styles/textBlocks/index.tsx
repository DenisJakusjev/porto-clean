import styled from "styled-components";
import {ColorTypes, getColor} from "@/helpers";

const Text = styled.p<{
    letterSpacing?: string,
    color?: ColorTypes | string,
    fontSize?: string,
    fontWeight?: string,
    lineHeight?: string
}>`
    color: ${props => props.color ? getColor(props.color) : "inherit"};
    font-size: ${props => props.fontSize ?? "inherit"};
    font-weight: ${props => props.fontWeight ?? "normal"};
    line-height: ${props => props.lineHeight ?? "inherit"};
    letter-spacing: ${props => props.letterSpacing ?? "inherit"};
`

export const JTText = styled(Text)`
    display: inline;
    font-family: JTMono, serif;
`
export const INText = styled(Text)`
    font-family: Inter, serif;
`
export const Span = styled.span<{ color?: ColorTypes | string , letterSpacing?: string}>`
    color: ${props => props.color ? getColor(props.color) : "inherit"};
    letter-spacing: ${props => props.letterSpacing ?? "inherit"};
`