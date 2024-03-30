import type {AppProps} from "next/app";
import {StyleSheetManager} from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import {GlobalStyle} from "@/Styles/SimpleBlocks";
export default function App({Component, pageProps,}: AppProps) {
    return(
    <StyleSheetManager
        enableVendorPrefixes
        shouldForwardProp={(propName, elementToBeRendered) => {
            return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true;
        }}
        {...pageProps}
    >
        <GlobalStyle/>
        <Component {...pageProps}  />
    </StyleSheetManager>);
}

