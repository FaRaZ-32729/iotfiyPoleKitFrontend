// import React, { useState } from "react";
// import { List, AlertCircle, CheckCircle, ChevronDown } from "lucide-react";

// const Sidebar = () => {
//     const [activeTab, setActiveTab] = useState("all");
//     const [orgOpen, setOrgOpen] = useState(false);
//     const [venueOpen, setVenueOpen] = useState(false);

//     const tabs = [
//         { id: "all", label: "All", icon: List },
//         { id: "normal", label: "Normal", icon: CheckCircle },
//         { id: "detected", label: "Detected", icon: AlertCircle },
//     ];

//     const organizations = ["Org 1", "Org 2", "Org 3", "Org 3", "Org 3", "Org 3", "Org 3"];
//     const venues = ["Venue A", "Venue B", "Venue C"];

//     return (
//         <aside className="md:w-96 w-full bg-white shadow-md flex flex-col order-1 md:order-1">
//             {/* Top Dropdown Buttons  border-b*/}
//             <div className="flex justify-between items-center p-4 ">
//                 {/* Organization Dropdown */}
//                 <div className="relative">
//                     <button
//                         onClick={() => setOrgOpen(!orgOpen)}
//                         className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium shadow "
//                     >
//                         Organization
//                         <ChevronDown className="h-4 w-4" />
//                     </button>
//                     {orgOpen && (
//                         <div className="absolute mt-2 w-40 bg-white border rounded-lg shadow-md z-10">
//                             {organizations.map((org) => (
//                                 <div
//                                     key={org}
//                                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                                 >
//                                     {org}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {/* Venue Dropdown */}
//                 <div className="relative">
//                     <button
//                         onClick={() => setVenueOpen(!venueOpen)}
//                         className="flex items-center gap-2 px-4 py-2  text-blue-700 rounded-full font-medium shadow "
//                     >
//                         Venue
//                         <ChevronDown className="h-4 w-4" />
//                     </button>
//                     {venueOpen && (
//                         <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md z-10">
//                             {venues.map((venue) => (
//                                 <div
//                                     key={venue}
//                                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                                 >
//                                     {venue}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Desktop Tabs */}
//             <div className="hidden md:flex border-b">
//                 {tabs.map(({ id, label, icon: Icon }) => (
//                     <button
//                         key={id}
//                         onClick={() => setActiveTab(id)}
//                         className={`flex-1 py-3 flex items-center justify-center gap-2 text-sm font-medium 
//                             ${activeTab === id ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
//                     >
//                         <Icon className="h-4 w-4" /> {label}
//                     </button>
//                 ))}
//             </div>

//             {/* Desktop Device List */}
//             <div className="p-4 overflow-y-auto space-y-3 hidden md:block">
//                 {[...Array(12)].map((_, i) => (
//                     <div
//                         key={i}
//                         className="p-3 border rounded-xl flex justify-between items-center hover:bg-gray-50 cursor-pointer"
//                     >
//                         <div>
//                             <p className="font-medium">DEVICE-{i + 1}</p>
//                             <p className="text-gray-500 text-xs">Issue Detected</p>
//                         </div>
//                         <AlertCircle className="h-5 w-5 text-yellow-500" />
//                     </div>
//                 ))}
//             </div>

//             {/* 🔄 MOBILE HORIZONTAL Cards */}
//             <div className="px-3 flex gap-4 overflow-x-auto pb-5 md:hidden">
//                 {[...Array(6)].map((_, i) => (
//                     <div
//                         key={i}
//                         className="min-w-[150px] bg-white border rounded-2xl shadow-sm p-4"
//                     >
//                         <p className="font-semibold">DEVICE-{i + 1}</p>

//                         {/* Volt + Status */}
//                         <div className="mt-2">
//                             <p className="text-xs font-semibold text-gray-600">Volt :<span className="inline-block text-xs text-red-500 px-1">
//                                 Detected
//                             </span></p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </aside>
//     );
// };

// export default Sidebar;


import React, { useState } from "react";
import { List, AlertCircle, CheckCircle, ChevronDown } from "lucide-react";
import { useOrganizations } from "../contextApi/OrganizationContext";
import { useVenues } from "../contextApi/VenueContext";

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [orgOpen, setOrgOpen] = useState(false);
    const [venueOpen, setVenueOpen] = useState(false);
    const [orgSearch, setOrgSearch] = useState("");
    const [venueSearch, setVenueSearch] = useState("");


    // logic state
    const [selectedOrg, setSelectedOrg] = useState(null);
    const [selectedVenue, setSelectedVenue] = useState(null);
    const { organizations } = useOrganizations();
    const { venues, fetchVenuesByOrg } = useVenues();


    const tabs = [
        { id: "all", label: "All", icon: List },
        { id: "normal", label: "Normal", icon: CheckCircle },
        { id: "detected", label: "Detected", icon: AlertCircle },
    ];

    // const organizations = ["Org 1", "Org 2", "Org 3", "Org 3", "Org 3", "Org 3", "Org 3"];
    // const venues = ["Venue A", "Venue B", "Venue C"];

    return (
        <aside className="md:w-96 w-full bg-white shadow-md flex flex-col order-1 md:order-1">
            {/* Top Dropdown Buttons  border-b*/}
            <div className="flex justify-between items-center p-4 ">
                {/* Organization Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setOrgOpen(!orgOpen)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium shadow "
                    >
                        Organization
                        <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* {orgOpen && (
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
                    )} */}
                    {orgOpen && (
                        <div className="absolute mt-2 w-64 bg-white border rounded-lg shadow-md z-10">
                            {/* Search */}
                            <input
                                type="text"
                                placeholder="Search organization..."
                                value={orgSearch}
                                onChange={(e) => setOrgSearch(e.target.value)}
                                className="w-full px-3 py-2 border-b text-sm outline-none"
                            />

                            {/* List */}
                            <div className="max-h-56 overflow-y-auto">
                                {organizations
                                    .filter(org =>
                                        org.name.toLowerCase().includes(orgSearch.toLowerCase())
                                    )
                                    .map((org) => (
                                        <div
                                            key={org._id}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                            onClick={() => {
                                                setSelectedOrg(org);
                                                setSelectedVenue(null);
                                                setOrgOpen(false);
                                                setOrgSearch("");
                                            }}
                                        >
                                            {org.name}
                                        </div>
                                    ))}
                            </div>
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
                    {/* {venueOpen && (
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
                    )} */}
                    {venueOpen && (
                        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-md z-10">
                            {/* Search */}
                            <input
                                type="text"
                                placeholder="Search venue..."
                                value={venueSearch}
                                onChange={(e) => setVenueSearch(e.target.value)}
                                className="w-full px-3 py-2 border-b text-sm outline-none"
                                disabled={!selectedOrg}
                            />

                            <div className="max-h-23 md:max-h-30 overflow-y-auto">
                                {!selectedOrg ? (
                                    <div className="px-4 py-2 text-gray-400 text-sm">
                                        Select organization first
                                    </div>
                                ) : venues.length === 0 ? (
                                    <div className="px-4 py-2 text-gray-400 text-sm">
                                        No venues found
                                    </div>
                                ) : (
                                    venues
                                        .filter(venue =>
                                            venue.name.toLowerCase().includes(venueSearch.toLowerCase())
                                        )
                                        .map((venue) => (
                                            <div
                                                key={venue._id}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                                onClick={() => {
                                                    setSelectedVenue(venue);
                                                    setVenueOpen(false);
                                                    setVenueSearch("");
                                                }}
                                            >
                                                {venue.name}
                                            </div>
                                        ))
                                )}
                            </div>
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
            <div className="px-3 flex gap-4 overflow-x-auto pb-5 md:hidden">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="min-w-[150px] bg-white border rounded-2xl shadow-sm p-4"
                    >
                        <p className="font-semibold">DEVICE-{i + 1}</p>

                        {/* Volt + Status */}
                        <div className="mt-2">
                            <p className="text-xs font-semibold text-gray-600">Volt :<span className="inline-block text-xs text-red-500 px-1">
                                Detected
                            </span></p>
                        </div>
                    </div>
                ))}
            </div>

        </aside>
    );
};

export default Sidebar;
