import Box from "@/components/Blocks/Box";
import Image from "next/image";

export const SingleStackIcon = ({item}: { item: any }) => (
    <Box minWidth={["100px","150px"]} height={["75px","100px"]} >
        <Image
            src={item.src.src}
            alt={item.alt}
            width={50}
            height={50}
            objectFit={"cover"}
            style={{width:"100%", height:"100%"}}
        />
    </Box>
);