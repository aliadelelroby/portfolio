import styles from "./Work.module.css";
import Image from "next/image";
import IonIcon from "@reacticons/ionicons";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { toTop } from "animations";

// Types
type workProps = {
	work: {
		cover: string;
		title: string;
		demo: string;
		github: string;
	};
	delay?: number;
};
const Work = ({
	work: { cover, title, demo, github },
	delay = 0,
	...rest
}: workProps) => {
	// States
	const [onView, setOnView] = useState<boolean>(false);
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			setOnView(true);
		}
	}, [inView]);
	return (
		<motion.div
			className={styles.work}
			ref={ref}
			initial={toTop.initial}
			animate={onView ? toTop.animate : ""}
			transition={{ delay: delay * 0.2, duration: 0.8 }}
			{...rest}
		>
			<h4 className={styles.title}>{title}</h4>
			<div className={styles.cover}>
				<Image
					src={cover}
					alt={title}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className={styles.widgets}>
				<a href="#">
					<IonIcon className={styles.icon} name="eye-outline" />
				</a>
				<a href="#">
					<IonIcon
						className={styles.icon}
						name="code-slash-outline"
					/>
				</a>
				<a href="#">
					<IonIcon className={styles.icon} name="logo-github" />
				</a>
			</div>
		</motion.div>
	);
};

export default Work;
