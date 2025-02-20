import React, {ReactNode} from 'react';
import TagMarksTitle from "@/components/Shared/TagMarksTitle";

const TagTitle = ({children, nmb}:{children:ReactNode, nmb?:boolean}) => {
    return (
        <TagMarksTitle fontSize={["20px", "24px","32px"]} lineHeight={["20px", "28px"]} noMarginBottom={nmb}>{children}</TagMarksTitle>
    );
};

export default TagTitle;
