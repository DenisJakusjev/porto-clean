import {NextPageContext} from "next";
import {AppProps} from "next/app";
import NextHead from "@/components/Head";
import AppBody from "@/components/Body";
import NavBar from "@/components/Nav";
import Hero from "@/components/Hero";
const Home = (props: { props: AppProps["pageProps"], name: string }) => {
    return (
        <AppBody>
            {/*<NextHead title="Denis Jakusjev Portfolio"/>*/}
            {/*<NavBar/>*/}
            {/*<Hero/>*/}
            123
        </AppBody>)
};

Home.getInitialProps = async (ctx: NextPageContext) => {
    return {name: ctx.query.name ?? "Adventurer"}
}

export default Home;