import styles from "./Work.module.css";
import Image from "next/image";
import Link from "next/link";
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
      tags: Array<string>;
   };
   delay?: number;
};

const Work = (props: workProps) => {
   // Constants
   const { work, delay = 0, ...rest } = props;
   const { cover, title, tags = ["development"] } = work;

   // States
   const [onView, setOnView] = useState<boolean>(false);
   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) setOnView(true);
   }, [inView]);
   // Maps
   const Tags = tags.map((tag, index) => {
      return (
         <span
            className="tag-item"
            style={{ backgroundColor: "var(--primary)" }}
            key={index}
         >
            {tag}
         </span>
      );
   });
   return (
      <motion.div
         className={styles.work}
         ref={ref}
         initial={toTop.initial}
         animate={onView ? toTop.animate : ""}
         transition={{ delay: delay * 0.2, duration: 0.8 }}
         {...rest}
      >
         {/* Cover */}
         <div className={styles.cover}>
            <div className={styles.coverContainer}>
               <Image src={cover} alt={title} layout="fill" />
            </div>
         </div>

         {/* Tags */}
         <div className={styles.tags}>{Tags}</div>

         {/* Title */}
         <h4 className={styles.title}>{title}</h4>

         {/* Descreption */}
         <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
         </p>

         {/* Links */}
         <div className={styles.links}>
            <div className="d-inline-block me-5">
               <Link href="/">
                  <a>Show Work</a>
               </Link>
            </div>
            <div className="d-inline-block">
               <Link href="/">
                  <a>See Code</a>
               </Link>
            </div>
         </div>
      </motion.div>
   );
};

export default Work;
