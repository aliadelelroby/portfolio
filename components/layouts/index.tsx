import Navbar from "components/global/Navbar";
import Head from "next/head";
// Types
type LayoutProps = {
    router: {};
    children: any;
};

export const Main = ({ router, children }: LayoutProps) => {
    return (
        <main>
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar router={router} />
            {children}
        </main>
    );
};
