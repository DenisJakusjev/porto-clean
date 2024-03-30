import React, {ReactNode} from 'react';
import {GlobalStyle, MainBody, MainWrapper} from "@/Styles/SimpleBlocks";

const AppBody = ({children}: { children: ReactNode }) => {
    return (
        <MainWrapper>

            <MainBody>
                {children}
            </MainBody>
        </MainWrapper>
    );
};

export default AppBody;
