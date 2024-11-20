"use client";

import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname(); //this hook gives me the currently active path (only works on client pages)
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
