import Box from "@/components/Blocks/Box";
import Education from "@/components/MoreInfo/Education";
import Service from "@/components/MoreInfo/Service";

const MoreInfoBlock = () => {
    return (
       <Box width={"100%"} mt={"32px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Education/>
           <Service/>
       </Box>
    );
};

export default MoreInfoBlock;