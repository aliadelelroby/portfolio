import styles from "./Skill.module.css";
import Image from "next/image";
// Types
export type skillProps = {
    name: string;
    photo?: string;
};

const Skill = ({
    name,
    photo = `/assets/skills/${name}.svg`,
    ...rest
}: skillProps) => {
    return (
        <div className={styles.skill} {...rest} data-title={name}>
            <Image src={photo} alt={name} height={35} width={35} />
        </div>
    );
};

export default Skill;
