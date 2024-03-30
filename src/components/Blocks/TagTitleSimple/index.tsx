import React, {ReactNode} from 'react';
import TagMarksTitle from "@/components/Shared/TagMarksTitle";

const TagTitle = ({children}:{children:ReactNode}) => {
    return (
        <TagMarksTitle fontSize={["16px", "24px"]} lineHeight={["20px", "28px"]}>{children}</TagMarksTitle>
    );
};

export default TagTitle;
