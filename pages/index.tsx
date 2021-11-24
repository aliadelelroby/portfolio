import type { NextPage } from "next";
import Head from "next/head";
import { Header, Skills } from "layouts/Home";
import skills from "data/skills";
const Home: NextPage = () => {
    return (
        <div id="home-page">
            <Head>
                <title>Ali Adel Elroby | Creative Front End Developer</title>
            </Head>
            <div className="container">
                <Header />
                <Skills skills={skills} />
            </div>
        </div>
    );
};

export default Home;
