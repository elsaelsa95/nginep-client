"use client"

import style from "./style.module.css";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

    return (
        <header className={style.header} data-is-open={isOpenMobileNav}>
            <nav className={style.container}>
                <FontAwesomeIcon
                    icon={faBars}
                    className={style.mobileBars}
                    data-pathname={pathname}
                    onClick={(_) => setIsOpenMobileNav((prev) => !prev)}
                />
                <Link href="/" className={style.logo}>
                    <h1>Nginep</h1>
                </Link>
                <div className={style.navigation}>
                    <Navigation
                        isOpen={isOpenMobileNav}
                        onClick={(_) => setIsOpenMobileNav(false)}
                    />
                </div>
            </nav>
        </header>
    )
}
