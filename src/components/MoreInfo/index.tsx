import Education from "@/components/MoreInfo/Education";
import Service from "@/components/MoreInfo/Service";
import TwoBlockBody from "@/components/Blocks/TwoBlockBody";

const MoreInfoBlock = () => {
    return (
        <TwoBlockBody>
            <Education/>
            <Service/>
        </TwoBlockBody>
    );
};

export default MoreInfoBlock;
