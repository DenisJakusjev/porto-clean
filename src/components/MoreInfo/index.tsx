import Education from "@/components/MoreInfo/Education";
import Service from "@/components/MoreInfo/Service";
import TwoBlockBody from "@/components/Blocks/TwoBlockBody";
import MotionFadeIn from "@/components/MotionFadeIn";
import Box from "@/components/Blocks/Box";

const MoreInfoBlock = () => {
    return (
        <TwoBlockBody gridGap={"32px"} >
            <MotionFadeIn direction={"left"} delay={0.2}>
                <Education/>
            </MotionFadeIn>
            <MotionFadeIn direction={"right"} delay={0.2}>
                <Service/>
            </MotionFadeIn>
        </TwoBlockBody>
    );
};

export default MoreInfoBlock;
