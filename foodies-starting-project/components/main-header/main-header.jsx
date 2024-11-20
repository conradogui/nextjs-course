import Link from "next/link.js";
import Image from "next/image.js";

import MainHeaderBackground from "./main-header-background.jsx";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link.jsx";
export default function MainHeader() {
  
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
             <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
            <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
