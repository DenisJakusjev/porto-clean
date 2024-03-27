import {NextPageContext} from "next";
import {AppProps} from "next/app";
import NextHead from "@/components/Head";
import AppBody from "@/components/Body";
import NavBar from "@/components/Nav";
import Hero from "@/components/Hero";

const Home = (props: { props: AppProps["pageProps"], name: string }) => {
    return (
        <div>hello</div>)
};

Home.getInitialProps = async (ctx: NextPageContext) => {
    return {name: ctx.query.name ?? "Adventurer"}
}

export default Home;