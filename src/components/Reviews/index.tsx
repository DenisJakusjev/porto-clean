import React from 'react';
import Box from "@/components/Blocks/Box";
import Link from "next/link";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";
import {ReviewsData} from "@/components/Reviews/data";
import SingleReview from "@/components/Reviews/SingleReview";

const Reviews = () => {
    return (
        <Box mt={"32px"} width={"100%"} id={"reviews"}>
            <Box width={"100%"} textAlign={"center"}>
                <Link href={"https://www.linkedin.com/in/denis-jakusjev"} target={"_blank"}>
                    <TagTitleSimple>Reviews</TagTitleSimple>
                </Link>
            </Box>
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gridGap={"20px"}>
                {ReviewsData.map((item, index) => (
                    <Box width={["100%", "100%", "45%"]} key={index}>
                        <SingleReview item={item}/>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Reviews;
