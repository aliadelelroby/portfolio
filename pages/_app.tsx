import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Main } from "layouts/index";

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <Main router={router}>
            {/* Ion Icons */}
            <Script
                type="module"
                src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
            />
            <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
            <Component {...pageProps} />
        </Main>
    );
}

export default MyApp;
