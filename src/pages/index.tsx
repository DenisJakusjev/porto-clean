import NextHead from "@/components/Head";
import AppBody from "@/components/Body";
import NavBar from "@/components/Nav";
import Hero from "@/components/Hero";
const Home = () => {
    return (
        <AppBody>
            <NextHead title="Denis Jakusjev Portfolio"/>
            <NavBar/>
            <Hero/>
        </AppBody>)
};


export default Home;