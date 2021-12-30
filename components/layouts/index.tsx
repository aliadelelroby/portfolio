import Cursor from "components/global/Cursor";
import Navbar from "components/global/Navbar";
import { NextRouter } from "next/dist/client/router";
import Head from "next/head";
import { ReactNode } from "react";
// Types
type LayoutProps = {
	router: NextRouter;
	children: ReactNode;
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
