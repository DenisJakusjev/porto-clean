import styled, {createGlobalStyle} from "styled-components";
import Box from "@/components/Blocks/Box";
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color:white;
    }
    body {
        background: rgba(4, 15, 32, 1);
    }
    @font-face {
        font-family: "Inter";
        src:local("Inter"), url("/fonts/inter-font.ttf") format("truetype");
    }
    @font-face {
        font-family: "JTMono";
        src: local("JTMono"), url("/fonts/JetBrainsMono.ttf") format("truetype");
    }
`;


export const MainWrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
`;

export const MainBody = styled(Box)`
    margin-top:32px;
    margin-bottom: 32px;
    max-width: 1440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
 
`
export const SectionBlock = styled(Box)`
    margin-right: 2.5%;
    margin-left: 2.5%;
    width: 95%; 
    border-radius: 24px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%);
    border: 1px solid;
    border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%);
    height: max-content;

`





