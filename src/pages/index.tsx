import NextHead from "@/components/Head";
import AppBody from "@/components/Body";
import NavBar from "@/components/Nav";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import MoreInfoBlock from "@/components/MoreInfo";
import MotionFadeIn from "@/components/MotionFadeIn";
import StackCarousel from "@/components/StackCarousel";
import Reviews from "@/components/Reviews";


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
            <MotionFadeIn direction={"right"} delay={0.5}>
                <StackCarousel/>
            </MotionFadeIn>
            <MotionFadeIn direction={"left"}>
                <Reviews/>
            </MotionFadeIn>
        </AppBody>
    )
};


export default Home;

