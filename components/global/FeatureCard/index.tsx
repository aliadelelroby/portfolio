import styles from "./style.module.css";
import { FeatureCardProps } from "types/components";

const FeatureCard = ({ data: { icon, content } }: FeatureCardProps) => {
   return (
      <div className={styles.root}>
         <div className={styles.icon}>
            <i className={icon}></i>
         </div>
         <div className={styles.content}>{content}</div>
      </div>
   );
};

export default FeatureCard;
