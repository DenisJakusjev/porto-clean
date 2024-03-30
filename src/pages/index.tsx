import NextHead from "@/components/Head";
import AppBody from "@/components/Body";
import NavBar from "@/components/Nav";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import MoreInfoBlock from "@/components/MoreInfo";
import MotionFadeIn from "@/components/MotionFadeIn";
const Home = () => {
    return (
        <AppBody>
            <NextHead title="Denis Jakusjev Portfolio"/>
            <MotionFadeIn direction={"top"} delay={0.5}>
                <NavBar/>
            </MotionFadeIn>
            <MotionFadeIn direction={"left"} delay={0.3}>
                <Hero/>
            </MotionFadeIn>
            <MotionFadeIn direction={"right"} delay={0.5}>
                <ExperienceSection/>
            </MotionFadeIn>
            <MotionFadeIn direction={"left"} delay={0.5}>
            <MoreInfoBlock/>
            </MotionFadeIn>
        </AppBody>
    )
};


export default Home;