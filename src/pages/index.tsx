import NextHead from "../components/head";
import AppBody from "../components/body";
import NavBar from "../components/nav";
import Hero from "../components/hero";
const Home = () => {
    return (
        <AppBody>
            <NextHead title="Denis Jakusjev Portfolio"/>
            <NavBar/>
            <Hero/>
        </AppBody>)
};


export default Home;