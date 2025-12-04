import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Admin management nav items
    const navItems = [
        { key: "home", label: "Home", path: "/", icon: "/sidebar-images/1.png", blueIcon: "/sidebar-images-blue/1.svg" },
        { key: "organization-management", label: "Organization Management", path: "/organization", icon: "/sidebar-images/2.png", blueIcon: "/sidebar-images-blue/2.png" },
        { key: "venue-management", label: "Venue Management", path: "/venue", icon: "/sidebar-images/4.png", blueIcon: "/sidebar-images-blue/4.png" },
        { key: "users-management", label: "Users Management", path: "/user", icon: "/sidebar-images/7.png", blueIcon: "/sidebar-images-blue/7.png" },
        { key: "device-management", label: "Device Management", path: "/device", icon: "/sidebar-images/3.png", blueIcon: "/sidebar-images-blue/3.png" },
    ];

    return (
        <>
            {/* 🔵 MOBILE TOP BAR */}
            <header className="w-full bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden relative z-50 rounded-tl-lg rounded-tr-lg">
                <img src="/logo-half.png" alt="logo" className="h-7" />
                <img src="/sidebar-images/8.png" alt="profile" className="h-7 w-7" />
            </header>

            {/* 🔵 DESKTOP LEFT NAV */}
            <aside className="hidden md:flex flex-col w-20 bg-blue-600 text-white items-center py-6 space-y-8 relative rounded-tr-xl rounded-br-xl">
                {/* Logo */}
                <div className="mb-6">
                    <img src="/logo-half.png" alt="logo" className="h-10 w-auto" />
                </div>

                {/* Nav Icons */}
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <div key={item.key} className="relative group w-full flex justify-center">
                            <button
                                onClick={() => navigate(item.path)}
                                className={`p-2 rounded-lg hover:bg-blue-500 transition-all ${isActive ? "bg-blue-700" : ""}`}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    className="h-6 w-6"
                                />
                            </button>
                            {/* Label on hover (desktop only) */}
                            <span className="absolute left-full ml-2 px-3 py-1 rounded-md bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap md:block hidden">
                                {item.label}
                            </span>
                        </div>
                    );
                })}

                {/* Profile Icon */}
                <div className="mt-auto">
                    <img src="/sidebar-images/8.png" alt="Profile" className="h-6 w-6 hover:brightness-90 cursor-pointer" />
                </div>
            </aside>

            {/* 🔵 MOBILE BOTTOM NAV */}
            <nav className="fixed bottom-0 left-0 w-full bg-blue-600 shadow-xl py-3 flex justify-around md:hidden z-50 rounded-tl-xl rounded-tr-xl">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button key={item.key} onClick={() => navigate(item.path)} className="p-1 flex flex-col items-center">
                            <img
                                src={isActive ? item.blueIcon : item.icon}
                                alt={item.label}
                                className={`h-6 w-6 transition-all ${isActive ? "filter brightness-0 invert" : "brightness-100 hover:brightness-90"}`}
                            />
                        </button>
                    );
                })}
            </nav>
        </>
    );
};

export default NavigationBar;
