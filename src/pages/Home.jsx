// import React, { useState } from "react";
// import {
//     Menu,
//     Home as HomeIcon,
//     Map,
//     List,
//     AlertCircle,
//     CheckCircle,
//     User
// } from "lucide-react";

// const Home = () => {
//     const [activeTab, setActiveTab] = useState("all");

//     const tabs = [
//         { id: "all", label: "All", icon: List },
//         { id: "normal", label: "Normal", icon: CheckCircle },
//         { id: "detected", label: "Detected", icon: AlertCircle },
//     ];

//     return (
//         <div className="w-full h-screen flex flex-col md:flex-row bg-gray-100 relative">

//             {/* 🔵 MOBILE TOP BAR (hidden on desktop) */}
//             <header className="w-full bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden">
//                 <img src="/logo.png" alt="logo" className="h-7" />
//                 <User className="h-7 w-7 text-gray-700" />
//             </header>

//             {/* 🔵 DESKTOP LEFT NAV (hidden on mobile) */}
//             <aside className="hidden md:flex flex-col w-20 bg-blue-600 text-white items-center py-6 space-y-8">
//                 <Menu className="h-6 w-6" />
//                 <HomeIcon className="h-6 w-6" />
//                 <Map className="h-6 w-6" />
//                 <List className="h-6 w-6" />
//             </aside>

//             {/* 🟦 SIDEBAR (Full width on mobile, left side on desktop) */}
//             <aside className="md:w-96 w-full bg-white shadow-md flex flex-col order-2 md:order-1">

//                 {/* Desktop header only for sidebar */}
//                 <div className="p-4 border-b hidden md:flex justify-between items-center">
//                     <h2 className="text-lg font-semibold">Need Maintenance</h2>
//                     <input
//                         className="border px-3 py-1 rounded-lg text-sm"
//                         placeholder="Search..."
//                     />
//                 </div>

//                 {/* Desktop Tabs */}
//                 <div className="hidden md:flex border-b">
//                     {tabs.map(({ id, label, icon: Icon }) => (
//                         <button
//                             key={id}
//                             onClick={() => setActiveTab(id)}
//                             className={`flex-1 py-3 flex items-center justify-center gap-2 text-sm font-medium 
//                                 ${activeTab === id ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}
//                             `}
//                         >
//                             <Icon className="h-4 w-4" /> {label}
//                         </button>
//                     ))}
//                 </div>

//                 {/* DEVICE LIST (vertical on desktop, horizontal on mobile) */}
//                 <div className="p-4 overflow-y-auto space-y-3 hidden md:block">
//                     {[...Array(12)].map((_, i) => (
//                         <div
//                             key={i}
//                             className="p-3 border rounded-xl flex justify-between items-center hover:bg-gray-50 cursor-pointer"
//                         >
//                             <div>
//                                 <p className="font-medium">DEVICE-{i + 1}</p>
//                                 <p className="text-gray-500 text-xs">Issue Detected</p>
//                             </div>
//                             <AlertCircle className="h-5 w-5 text-yellow-500" />
//                         </div>
//                     ))}
//                 </div>

//                 {/* 🔄 MOBILE HORIZONTAL CARDS */}
//                 <div className="px-3 mt-4 flex gap-4 overflow-x-auto pb-24 md:hidden">
//                     {[...Array(6)].map((_, i) => (
//                         <div
//                             key={i}
//                             className="min-w-[180px] bg-white border rounded-2xl shadow-sm p-4"
//                         >
//                             <p className="font-semibold">DEVICE-{i + 1}</p>
//                             <p className="text-xs text-gray-500 mt-1">Voltage: 140v</p>

//                             <span className="mt-2 inline-block text-xs bg-red-500 text-white px-3 py-1 rounded-lg">
//                                 Detected
//                             </span>
//                         </div>
//                     ))}
//                 </div>

//             </aside>

//             {/* 🗺️ MAP AREA */}
//             <main className="flex-1 order-1 md:order-2 relative">

//                 {/* Desktop map */}
//                 <div className="hidden md:block w-full h-full">
//                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462597.7484483934!2d66.95248552026607!3d25.066466938861613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi!5e0!3m2!1sen!2s!4v1764771339798!5m2!1sen!2s" className="w-full h-full" ></iframe>
//                 </div>

//                 {/* Mobile map */}
//                 <div className="md:hidden w-full h-[330px] relative">

//                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462597.7484483934!2d66.95248552026607!3d25.066466938861613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi!5e0!3m2!1sen!2s!4v1764771339798!5m2!1sen!2s" className="w-full h-full rounded-b-3xl"></iframe>

//                     {/* Floating card on mobile */}
//                     <div className="absolute top-4 left-4 right-4 bg-white shadow-lg rounded-2xl p-4 flex justify-between items-center">
//                         <div>
//                             <p className="text-sm text-gray-500 font-medium">Pole ID:</p>
//                             <p className="text-lg font-bold">ERO12034</p>
//                         </div>
//                         <div className="text-right">
//                             <p className="font-bold text-yellow-500 flex items-center gap-1">⚡ 140v</p>
//                             <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-lg">
//                                 Pending
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </main>

//             {/* 🔵 MOBILE BOTTOM NAV (hidden on desktop) */}
//             <nav className="fixed bottom-0 left-0 w-full bg-white shadow-xl py-3 flex justify-around md:hidden">
//                 <HomeIcon className="h-6 w-6 text-blue-600" />
//                 <Map className="h-6 w-6 text-gray-500" />
//                 <List className="h-6 w-6 text-gray-500" />
//                 <Menu className="h-6 w-6 text-gray-500" />
//             </nav>

//         </div>
//     );
// };

// export default Home;



import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/home/MainContent";

const Home = () => {
    return (
        <div className="w-full h-screen flex flex-col md:flex-row bg-gray-100 relative">
            <Sidebar />
            <MainContent />
        </div>
    );
};

export default Home;
