import NextHead from "@/components/Head";
import AppBody from "@/components/Body";
import NavBar from "@/components/Nav";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import MoreInfoBlock from "@/components/MoreInfo";
import MotionFadeIn from "@/components/MotionFadeIn";
import StackCarousel from "@/components/StackCarousel";
import Reviews from "@/components/Reviews";
import FAQs from "@/components/FAQ";


const Home = () => {
    return (
        <AppBody>
            <MotionFadeIn direction={"top"} delay={0.5}>
                <NavBar/>
            </MotionFadeIn>
            <NextHead title="Denis Jakusjev Portfolio"/>
            <MotionFadeIn direction={"left"} delay={0.3}>
                <Hero/>
            </MotionFadeIn>
            <MotionFadeIn direction={"right"} delay={0.5}>
                <ExperienceSection/>
            </MotionFadeIn>
                <MoreInfoBlock/>
            <MotionFadeIn direction={"bottom"} delay={0.5}>
                <StackCarousel/>
            </MotionFadeIn>
            <MotionFadeIn direction={"left"} delay={0.5}>
                <Reviews/>
            </MotionFadeIn>
                <FAQs/>
        </AppBody>
    )
};


export default Home;

