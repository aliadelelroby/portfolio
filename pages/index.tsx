import type { NextPage } from "next";
import Head from "next/head";
import { Header, Skills, Works, Features } from "layouts/Home";
import skills from "data/skills";
import works from "data/works";
const Home: NextPage = () => {
   return (
      <div id="home-page">
         <Head>
            <title>Ali Adel Elroby | Creative Front End Developer</title>
            <link
               rel="stylesheet"
               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
               integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
               crossOrigin="anonymous"
               referrerPolicy="no-referrer"
            />
         </Head>
         <div className="container">
            <Header />
            <Skills skills={skills} />
            <Works works={works} />
            <Features />
         </div>
      </div>
   );
};

export default Home;
