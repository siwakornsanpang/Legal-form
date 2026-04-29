"use client";

import { usePathname } from "next/navigation";

import Navbar from "./Navbar";


export default function AppHeader() {
  const pathname = usePathname();


  // Hide navbar on login page (login page has its own layout)
  if (pathname === "/login") {
    return (
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50">
        <Navbar />
    </header>
  );
}
