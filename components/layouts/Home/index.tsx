import styles from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { transition, toTop, fadeIn } from "animations/index";
import Skill from "components/global/Skill";
import type { skillProps } from "components/global/Skill";
import { useEffect, useState } from "react";

// Types
type skillsProps = {
    skills: Array<{ name: string; photo?: string }>;
};

// Header
export const Header = () => {
    return (
        <section className={styles.header}>
            <div className="row">
                <motion.div
                    initial={toTop.initial}
                    animate={toTop.animate}
                    transition={transition}
                    className="col-12 col-sm-12 col-md-6 col-lg-6"
                >
                    <h3>Hi! My Name Is</h3> <h1>Ali Adel Elroby</h1>
                    <h3>I&apos;m a Front End Developer.</h3>
                    <p className="mt-2 mt-md-4">
                        A passionate web developer, always following best
                        practices.
                        <br /> I care that the customer is satisfied with my
                        work.
                    </p>
                    <div className={styles.buttons}>
                        <Link href="#">
                            <a className="button primary">View Works</a>
                        </Link>
                        <Link href="#">
                            <a className="button stroke">More about me</a>
                        </Link>
                    </div>
                </motion.div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className={styles.photoContainer}>
                        <motion.div
                            initial={fadeIn.initial}
                            animate={fadeIn.animate}
                            transition={{ ...transition, delay: 0.8 }}
                            className={styles.photo}
                        >
                            <Image
                                src="/assets/me.jpg"
                                alt="Ali Adel Elroby"
                                height={250}
                                width={250}
                                layout="responsive"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Skills Section

export const Skills = ({ skills: skillsFromProps }: skillsProps) => {
    // States
    const [onView, setOnView] = useState<boolean>(false);
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            setOnView(true);
        }
    }, [inView]);
    // Maps
    const skills = skillsFromProps.map(({ name, photo }: skillProps, index) => {
        return (
            <motion.div
                key={index}
                ref={ref}
                initial={toTop.initial}
                animate={onView ? toTop.animate : ""}
                transition={{ delay: index * 0.2, duration: 0.5 }}
            >
                <Skill name={name} photo={photo} />
            </motion.div>
        );
    });
    return (
        <section className={styles.skills}>
            <div className="row">
                <h2 className="main-title">My Skills</h2>
            </div>
            <div className="row">
                <div className={styles.skillsContainer}>{skills}</div>
            </div>
        </section>
    );
};
