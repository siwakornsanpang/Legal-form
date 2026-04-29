"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";


// --- Navigation Configuration ---
const navLinks = [
    { name: "งานบริการ", href: "/service" },
];  

export default function Navbar() {
    // --- State & Hooks ---
    const pathname = usePathname();
    const router = useRouter();
    const [lang, setLang] = useState("TH");
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [webSettings, setWebSettings] = useState<any>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLangDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className={`${styles.navbar} ThaiFont`}>
            {/* 1. TOP BANNER (Green Section) - Logo, Titles, and Actions */}
            <div className={styles.topBanner}>
                <div className={styles.brandArea}>
                    <Image
                        src={webSettings?.logoPath || "/images/public/icon.jpg"}
                        alt="Pharmacy Council Logo"
                        width={40}
                        height={40}
                        className={styles.logo}
                    />
                    <div>
                        <h1 className={`${styles.brandTitle} ThaiFont`}>
                            {webSettings?.siteNameTh || "สภาเภสัชกรรม"}
                        </h1>
                        <p className={`${styles.brandSubtitle} ThaiFont`}>
                            {webSettings?.siteNameEn || "THE PHARMACY COUNCIL OF THAILAND"}
                        </p>
                    </div>
                    {pathname === "/login" && (
                        <>
                            <div className={styles.navDivider}></div>
                            <h2 className={`${styles.systemName} ThaiFont`}>
                                ระบบบริการผู้ประกอบวิชาชีพเภสัชกรรม
                            </h2>
                        </>
                    )}
                </div>


            </div>


            <div className={styles.lowerNav}>
                <div className={styles.navContainer}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href === "/" && pathname === "/home");
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${isActive ? styles.navItemActive : styles.navItem} ThaiFont`}
                            >
                                {link.name}
                               
                                {/* Underline for Active */}
                                {isActive && (
                                    <div className={styles.activeIndicator} />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
