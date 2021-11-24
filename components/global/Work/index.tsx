import styles from "./Work.module.css";
import Image from "next/image";
// Types
type workProps = {
    work: {
        cover: string;
        title: string;
        desc: string;
        demo: string;
        github: string;
    };
};
const Work = ({
    work: { cover, title, desc, demo, github },
    ...rest
}: workProps) => {
    return (
        <div className={styles.work} {...rest}>
            <div className={styles.cover}></div>
            <div className={styles.widgets}>
                <a href="#"></a>
                <a href="#"></a>
            </div>
        </div>
    );
};

export default Work;
