import NextHead from "@/components/Head";
import AppBody from "@/components/Body";
import NavBar from "@/components/Nav";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import {motion} from "framer-motion";
import {ReactNode} from "react";
import {useInView} from "react-intersection-observer";

const Home = () => {

    const MotionFadeIn = ({side, children}: { side: "left" | "right", children: ReactNode }) => {
        const {ref, inView} = useInView({
            triggerOnce: true,
            threshold: 0.15,
        });
        return (<motion.div
            ref={ref}
            style={{all: "unset"}}
            initial={{opacity: 0, x: side == "left" ? -50 : 50}}
            animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
            transition={{duration: 1}}
        >
            {children}
        </motion.div>)
    }


    return (
        <AppBody>
            <NextHead title="Denis Jakusjev Portfolio"/>
            <NavBar/>
            <MotionFadeIn side={"left"}>
                <Hero/>
            </MotionFadeIn>
            <MotionFadeIn side={"right"}>
                <ExperienceSection/>
            </MotionFadeIn>

        </AppBody>
    )
};


export default Home;