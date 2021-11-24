import { motion } from "framer-motion";
import { NextPage } from "next";
import { transition, fadeIn } from "animations";
import styles from "./404.module.css";
const NotFound: NextPage = () => {
    return (
        <div id="404" className={styles.notFoundPage}>
            <motion.div
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={transition}
            >
                <span className={styles.special}>Page</span>
                &nbsp;Is Not Found
            </motion.div>
        </div>
    );
};

export default NotFound;
