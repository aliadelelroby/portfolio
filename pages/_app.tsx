import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Main } from "layouts/index";

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <Main router={router}>
            <Component {...pageProps} />
        </Main>
    );
}

export default MyApp;
