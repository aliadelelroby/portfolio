import { useEffect, useState } from "react";
import styles from "./Cursor.module.css";
const Cursor = () => {
    // Constants
    const pointerElements = ["a", "button"];
    // States
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [pointer, setPointer] = useState(false);
    const [hide, setHide] = useState(true);

    // Functions
    useEffect(() => {
        window.addEventListener("mousemove", mouseMoveHandler);
        window.addEventListener("mouseout", mouseHide);
        window.addEventListener("mouseup", mouseHide);
    }, []);

    function mouseMoveHandler(e: any) {
        setHide(false);
        setTop(e.clientY - 10);
        setLeft(e.clientX - 10);
        if (pointerElements.includes(e.target.tagName.toLowerCase())) {
            setPointer(true);
        } else {
            setPointer(false);
        }
    }
    function mouseHide(e: any) {
        setHide(true);
    }
    return (
        <span
            className={`${styles.cursor} ${pointer ? styles.pointer : ""}`}
            style={{
                top: `${top}px`,
                left: `${left}px`,
                opacity: hide ? 0 : 0.6,
            }}
        ></span>
    );
};

export default Cursor;
