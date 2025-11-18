"use client";

import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function HeaderMenuClientPage() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuItems = ["Home", "About", "Contact"];

    return (
        <header className="w-full bg-black fixed top-0 left-0 z-50">
            <div className="w-full px-10 sm:px-[150px] h-20 flex items-center justify-between">
                <div className="text-white text-xl">alumni</div>

                {/* Desktop Menu */}
                {!isMobile && (
                    <nav className="flex gap-8 text-[#ffffff] text-[18px]">
                        {menuItems.map((item) => (
                            <span key={item} className="cursor-pointer hover:underline transition-colors">
                                {item}
                            </span>
                        ))}
                    </nav>
                )}

                {/* Mobile Menu Button */}
                {isMobile && (
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white text-3xl focus:outline-none"
                    >
                        {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                    </button>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            {isMobile && menuOpen && (
                <div className="fixed top-20 left-0 w-full bg-black text-[#ffffff] flex flex-col items-center py-6 space-y-6 z-40 shadow-lg">
                    {menuItems.map((item) => (
                        <span
                            key={item}
                            className="cursor-pointer hover:underline text-lg transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            )}
        </header>
    );
}
