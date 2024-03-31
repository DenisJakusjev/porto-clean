import React from 'react';
import useEmblaCarousel from "embla-carousel-react";
import {EmblaOptionsType} from "embla-carousel";
import Box from '../Blocks/Box';
import Autoplay from "embla-carousel-autoplay";

export type EmblaCarouselType = {
    items: any[],
    RenderNode?: Element | any,
    options?: EmblaOptionsType

}

const Carousel = ({items, RenderNode, options = {align: 'start', dragFree: true, loop: true}}: EmblaCarouselType) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    return (
        <Box as={"section"} maxWidth={"100%"} width={"100%"}>
            <Box overflow={"hidden"} ref={emblaRef}>
                <Box style={{backfaceVisibility: "hidden"}} display={"flex"}>
                    {items.map((item, index: number) => (
                        <RenderNode item={item} key={index}/>
                    ))}
                </Box>
            </Box>
        </Box>
    )
};

export default Carousel;
