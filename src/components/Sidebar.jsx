import React, { useState } from "react";
import { List, AlertCircle, CheckCircle, ChevronDown } from "lucide-react";

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [orgOpen, setOrgOpen] = useState(false);
    const [venueOpen, setVenueOpen] = useState(false);

    const tabs = [
        { id: "all", label: "All", icon: List },
        { id: "normal", label: "Normal", icon: CheckCircle },
        { id: "detected", label: "Detected", icon: AlertCircle },
    ];

    const organizations = ["Org 1", "Org 2", "Org 3"];
    const venues = ["Venue A", "Venue B", "Venue C"];

    return (
        <aside className="md:w-96 w-full bg-white shadow-md flex flex-col order-2 md:order-1">
            {/* Top Dropdown Buttons */}
            <div className="flex justify-between items-center p-4 border-b">
                {/* Organization Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setOrgOpen(!orgOpen)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium shadow "
                    >
                        Organization
                        <ChevronDown className="h-4 w-4" />
                    </button>
                    {orgOpen && (
                        <div className="absolute mt-2 w-40 bg-white border rounded-lg shadow-md z-10">
                            {organizations.map((org) => (
                                <div
                                    key={org}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {org}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Venue Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setVenueOpen(!venueOpen)}
                        className="flex items-center gap-2 px-4 py-2  text-blue-700 rounded-full font-medium shadow "
                    >
                        Venue
                        <ChevronDown className="h-4 w-4" />
                    </button>
                    {venueOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md z-10">
                            {venues.map((venue) => (
                                <div
                                    key={venue}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {venue}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:flex border-b">
                {tabs.map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className={`flex-1 py-3 flex items-center justify-center gap-2 text-sm font-medium 
                            ${activeTab === id ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
                    >
                        <Icon className="h-4 w-4" /> {label}
                    </button>
                ))}
            </div>

            {/* Desktop Device List */}
            <div className="p-4 overflow-y-auto space-y-3 hidden md:block">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="p-3 border rounded-xl flex justify-between items-center hover:bg-gray-50 cursor-pointer"
                    >
                        <div>
                            <p className="font-medium">DEVICE-{i + 1}</p>
                            <p className="text-gray-500 text-xs">Issue Detected</p>
                        </div>
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                    </div>
                ))}
            </div>

            {/* 🔄 MOBILE HORIZONTAL Cards */}
            <div className="px-3 mt-4 flex gap-4 overflow-x-auto pb-24 md:hidden">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="min-w-[180px] bg-white border rounded-2xl shadow-sm p-4"
                    >
                        <p className="font-semibold">DEVICE-{i + 1}</p>
                        <p className="text-xs text-gray-500 mt-1">Voltage: 140v</p>
                        <span className="mt-2 inline-block text-xs bg-red-500 text-white px-3 py-1 rounded-lg">
                            Detected
                        </span>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
