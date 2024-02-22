"use client";

import { usePathname } from "next/navigation";
import style from "../style.module.css";
import Link from "next/link";
import { MouseEventHandler } from "react";

export default function Navigation({
    isOpen,
    onClick,
}: {
    isOpen?: boolean;
    onClick?: MouseEventHandler;
}) {
    let user
    if (typeof window !== 'undefined') {
        user = localStorage.getItem("username") ? JSON.stringify(localStorage.getItem("username")) : null;
    }
    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }
    const pathname = usePathname();
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            isActive: pathname === "/",
        },
        {
            title: "Browse",
            href: "/browse",
            isActive: pathname === "/browse",
        },
        {
            title: "Contact Us",
            href: "/contact",
            isActive: pathname === "/contact"
        },
    ];

    return (
        <div
            className={style.navigationItems}
            data-pathname={pathname}
            data-is-open={isOpen}
        >
            {navigationItems.map((item, i) => (
                <Link
                    key={i}
                    href={item.href}
                    title={item.title}
                    data-is-active={item.isActive}
                    onClick={onClick}
                >
                    {item.title}
                </Link>
            ))}
            {!user && (
                <>
                    <Link href="/sign-in" data-is-active={pathname === "/sign-in"}> Sign In </Link>
                    <Link href="/register" data-is-active={pathname === "/register"}> Register</Link>
                </>
            )}
            {user && <Link href="/" onClick={handleLogout} className={style.buttonLogout}>Log Out</Link>}
        </div>
    );
}
