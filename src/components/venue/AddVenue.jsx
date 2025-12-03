import React from "react";
import { Box } from "lucide-react";

const AddVenue = () => {
    const organizations = ["Organization A", "Organization B", "Organization C"];

    return (
        <div className="bg-[#EEF3F9] border border-gray-300 rounded-xl shadow-md w-full max-w-md mx-auto p-6 flex flex-col justify-center">
            <h2 className="text-center text-xl font-semibold mb-1">Add Venues</h2>
            <p className="text-center text-gray-500 mb-6">Welcome back! Select method to add venue</p>

            <form className="space-y-4 w-full">
                {/* Venue Name Input */}
                <div className="relative">
                    <Box className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter venue name"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Organization Select */}
                <div className="relative">
                    <img
                        src="/OrganizationChecklist.svg"
                        alt="org icon"
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 pointer-events-none"
                    />
                    <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Organization</option>
                        {organizations.map((org, idx) => (
                            <option key={idx} value={org}>
                                {org}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Save Button */}
                <button
                    type="button"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-md transition duration-300 shadow-md"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default AddVenue;
