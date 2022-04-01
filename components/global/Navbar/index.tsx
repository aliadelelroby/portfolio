import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// Types
type NavbarProps = {
   router: {};
};

const Navbar = ({ router, ...rest }: NavbarProps) => {
   // States
   const [hide, setHide] = useState<boolean>(false);

   // Functions
   useEffect(() => {
      let prevPageTop = window.scrollY;
      window.addEventListener("scroll", () => {
         let curPageTop = window.scrollY;
         if (curPageTop > prevPageTop) {
            setHide(true);
         } else if (curPageTop < prevPageTop) {
            setHide(false);
         }
         prevPageTop = curPageTop;
      });
      return window.removeEventListener("scroll", () => {});
   });
   return (
      <div className={styles.navbarContainer}>
         <div className={styles.navbar} style={{ top: hide ? "-70px" : "0" }}>
            <div className={styles.logo}>
               <Link href="/">
                  <a className="d-flex">
                     <Image
                        src="/logo.svg"
                        alt="Ali Adel Elroby Logo"
                        height={40}
                        width={40}
                     />
                  </a>
               </Link>
            </div>
            <div className={styles.links}>
               <ul>
                  <li>
                     <Link href="/works">
                        <a className="active">Works</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/about">
                        <a>About</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/contact">
                        <a>Contact</a>
                     </Link>
                  </li>
               </ul>
            </div>
            <div className={styles.menu}>
               <div className={styles.menuIcon}>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
