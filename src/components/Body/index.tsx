import React, {ReactNode} from 'react';
import {GlobalStyle, MainBody, MainWrapper} from "@/Styles/simpleBlocks";

const AppBody = ({children}: { children: ReactNode }) => {
    return (
        <MainWrapper>
            <GlobalStyle/>
            <MainBody>
                {children}
            </MainBody>
        </MainWrapper>
    );
};

export default AppBody;
