import {SectionBlock} from "@/Styles/SimpleBlocks";
import {Review} from "@/components/Reviews/data";
import ProfileSection from "@/components/Reviews/SingleReview/UserProfileSection";
import {INText} from "@/Styles/textBlocks";
import Box from "@/components/Blocks/Box";
import {useState} from "react";
import styled from "styled-components";
import Button from "@/components/Blocks/Button";

const TextBlock = styled(Box)`
    overflow: hidden;
    transition: all 0.7s ease;
`
const SingleReview = ({item}: { item: Review }) => {
    const [showMore, setShowMore] = useState<boolean>(false)
    const showMorePresent = showMore ? "1000px" : "0px";
    const showMoreFirstBlock = (index: number) => index == 0 ? "block" : showMore ? "block" : "none"
    return (
        <SectionBlock width={"100%"} p={"24px"} minHeight={"100%"} style={{transition: "all 0.3s ease"}}>
            <ProfileSection item={item.profile}/>
            <Box mb={"10px"}>
                <INText>{item.review[0]}</INText>
            </Box>
            <TextBlock maxHeight={[showMorePresent, showMorePresent, "100%"]}>
                {item.review.slice(1).map((text, index) => (
                    <Box mb={"10px"} key={index}
                         display={[showMoreFirstBlock(0), showMoreFirstBlock(0), "block"]}>
                        <INText>
                            {text}
                        </INText>
                    </Box>
                ))}
            </TextBlock>
            <Box display={["block","block","none"]} width={"100%"}>
                <Button text={showMore ? "Show less" : "Show more" } onClick={()=>setShowMore(!showMore)}/>
            </Box>
        </SectionBlock>
    );
};

export default SingleReview;
