import React from 'react';
import Box from "@/components/Blocks/Box";
import Link from "next/link";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";
import {ReviewsData} from "@/components/Reviews/data";
import SingleReview from "@/components/Reviews/SingleReview";
import {SectionBlock} from "@/Styles/SimpleBlocks";

const Reviews = () => {
    return (
        <SectionBlock mt={"32px"}>
            <Box p={"32px"} width={"100%"} id={"reviews"}>
                <Box width={"100%"} >
                    <Link href={"https://www.linkedin.com/in/denis-jakusjev"} target={"_blank"}>
                        <TagTitleSimple>Reviews</TagTitleSimple>
                    </Link>
                </Box>
                <Box display="grid" gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
                     gridGap="32px">
                    {ReviewsData.map((item, index) => (
                        <Box width={"100%"} key={index}>
                            <SingleReview item={item}/>
                        </Box>
                    ))}
                </Box>
            </Box>
        </SectionBlock>
    );
};

export default Reviews;
