import React from "react";
import { useLocation } from "react-router-dom";

const NavigationBar = () => {
    const location = useLocation();

    // Define icon items with route paths
    const navItems = [
        { src: "/sidebar-images-blue/1.svg", alt: "Home", path: "/" },
        { src: "/sidebar-images-blue/2.png", alt: "Menu", path: "/menu" },
        { src: "/sidebar-images-blue/3.png", alt: "Map", path: "/map" },
        { src: "/sidebar-images-blue/4.png", alt: "List", path: "/list" },
    ];

    return (
        <>
            {/* 🔵 MOBILE TOP BAR */}
            <header className="w-full bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden relative z-50">
                <img src="/logo-half.png" alt="logo" className="h-7" />
                <img src="/sidebar-images/8.png" alt="profile" className="h-7 w-7" />
            </header>

            {/* 🔵 DESKTOP LEFT NAV */}
            <aside className="hidden md:flex flex-col w-20 bg-blue-600 text-white items-center py-6 space-y-8">
                {/* Logo on Desktop */}
                <div className="mb-6">
                    <img src="/logo-half.png" alt="logo" className="h-10 w-auto" />
                </div>

                {/* Nav Icons */}
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button
                            key={item.alt}
                            className={`p-2 rounded-lg hover:bg-blue-500 transition-all ${isActive ? "bg-blue-700" : ""
                                }`}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className={`h-6 w-6 ${isActive ? "filter brightness-0 invert" : ""
                                    }`}
                            />
                        </button>
                    );
                })}

                {/* User/Profile Icon at bottom */}
                <div className="mt-auto">
                    <img src="/sidebar-images/8.png" alt="Profile" className="h-6 w-6 hover:brightness-90 cursor-pointer" />
                </div>
            </aside>

            {/* 🔵 MOBILE BOTTOM NAV */}
            <nav className="fixed bottom-0 left-0 w-full bg-white shadow-xl py-3 flex justify-around md:hidden z-50">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button key={item.alt} className="p-1">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className={`h-6 w-6 transition-all ${isActive ? "filter brightness-0 invert" : "hover:brightness-90"
                                    }`}
                            />
                        </button>
                    );
                })}
            </nav>
        </>
    );
};

export default NavigationBar;
