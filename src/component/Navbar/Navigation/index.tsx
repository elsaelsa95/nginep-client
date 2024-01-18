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
        {
            title: "Sign In",
            href: "/sign-in",
            isActive: pathname === "/sign-in"
        },
        {
            title: "Register",
            href: "/register",
            isActive: pathname === "/register"
        }
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
        </div>
    );
}
