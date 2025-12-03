import React from "react";

const NavigationBar = () => {
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

                {/* Menu Icon */}
                <img src="/sidebar-images-blue/1.svg" alt="Menu" className="h-6 w-6" />

                {/* Home Icon */}
                <img src="/sidebar-images-blue/2.png" alt="Home" className="h-6 w-6" />

                {/* Map Icon */}
                <img src="/sidebar-images-blue/3.png" alt="Map" className="h-6 w-6" />

                {/* List Icon */}
                <img src="/sidebar-images-blue/4.png" alt="List" className="h-6 w-6" />

                {/* User/Profile Icon */}
                <img src="/sidebar-images/8.png" alt="Profile" className="h-6 w-6 mt-auto" />
            </aside>

            {/* 🔵 MOBILE BOTTOM NAV */}
            <nav className="fixed bottom-0 left-0 w-full bg-white shadow-xl py-3 flex justify-around md:hidden z-50">
                <img src="/sidebar-images-blue/2.png" alt="Home" className="h-6 w-6" />
                <img src="/sidebar-images-blue/3.png" alt="Map" className="h-6 w-6" />
                <img src="/sidebar-images-blue/4.png" alt="List" className="h-6 w-6" />
                <img src="/sidebar-images-blue/1.svg" alt="Menu" className="h-6 w-6" />
            </nav>
        </>
    );
};

export default NavigationBar;
