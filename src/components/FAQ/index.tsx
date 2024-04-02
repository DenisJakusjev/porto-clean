import TwoBlockBody from "@/components/Blocks/TwoBlockBody";
import Contact from "@/components/FAQ/Contact";
import Facts from "@/components/FAQ/Facts";
import MotionFadeIn from "@/components/MotionFadeIn";

const FAQs = () => {
    return (
        <TwoBlockBody gridGap={"32px"}>
            <MotionFadeIn direction={"left"} delay={0.2}>
                <Facts/>
            </MotionFadeIn>
            <MotionFadeIn direction={"right"} delay={0.2}>
                <Contact/>
            </MotionFadeIn>
        </TwoBlockBody>
    );
};

export default FAQs;
