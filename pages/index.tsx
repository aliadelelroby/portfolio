import type { NextPage } from "next";
import Head from "next/head";
import { Header, Skills, Works } from "layouts/Home";
import skills from "data/skills";
import works from "data/works";
const Home: NextPage = () => {
    return (
        <div id="home-page">
            <Head>
                <title>Ali Adel Elroby | Creative Front End Developer</title>
            </Head>
            <div className="container">
                <Header />
                <Skills skills={skills} />
                <Works works={works} />
            </div>
        </div>
    );
};

export default Home;
