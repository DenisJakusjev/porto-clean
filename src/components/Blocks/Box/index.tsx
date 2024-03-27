import {
    background,
    BackgroundProps, border,
    BorderProps, color,
    ColorProps, compose, flexbox,
    FlexboxProps, grid, GridProps, layout,
    LayoutProps, position, PositionProps, shadow,
    ShadowProps, space,
    SpaceProps, textAlign, TextAlignProps, typography,
    TypographyProps, zIndex, ZIndexProps
} from "styled-system";
import styled from "styled-components";
interface IProps {
    boxSizing?: string;
    css?: any;
    float?: any;
    children?: React.ReactNode;
    name?: string;
    cursor?: string;
    ref?: any;
}
export interface IBox
    extends SpaceProps,
        LayoutProps,
        ColorProps,
        ShadowProps,
        FlexboxProps,
        TypographyProps,
        BorderProps,
        GridProps,
        PositionProps,
        BackgroundProps,
        ZIndexProps,
        TextAlignProps,
        IProps {
    scrollY?: any;
}

const Box = styled.div<IBox>`
  box-sizing: border-box;
  ${compose(
    compose,
    space,
    layout,
    color,
    shadow,
    flexbox,
    typography,
    border,
    grid,
    position,
    background,
    zIndex,
    textAlign
)}
`;

export default Box;