import Cursor from "components/global/Cursor";
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
            <Cursor />
            <Navbar router={router} />
            {children}
        </main>
    );
};
