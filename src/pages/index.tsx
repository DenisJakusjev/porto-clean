import NextHead from "@/components/Head";
import AppBody from "@/components/Body";
import NavBar from "@/components/Nav";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import MoreInfoBlock from "@/components/MoreInfo";
import MotionFadeIn from "@/components/MotionFadeIn";
import Box from "@/components/Blocks/Box";
const Home = () => {
    return (
        <AppBody>
            <NextHead title="Denis Jakusjev Portfolio"/>
            <MotionFadeIn side={"top"} delay={0.5}>
                <NavBar/>
            </MotionFadeIn>
            <MotionFadeIn side={"left"} delay={0.3}>
                <Hero/>
            </MotionFadeIn>
            <MotionFadeIn side={"right"} delay={0.5}>
                <ExperienceSection/>
            </MotionFadeIn>
            <MoreInfoBlock/>
        </AppBody>
    )
};


export default Home;