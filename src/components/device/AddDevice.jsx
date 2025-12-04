import React, { useState } from "react";
import { Box } from "lucide-react";

const AddDevice = () => {
    const [deviceId, setDeviceId] = useState("");
    const [venue, setVenue] = useState("");
    const [organization, setOrganization] = useState("");

    // Example static data; replace with Redux/API data if needed
    const venues = ["Main Hall", "Conference Room", "Auditorium"];
    const organizations = ["Organization A", "Organization B", "Organization C"];

    const handleSave = () => {
        console.log({ deviceId, venue, organization });
        // Dispatch save action or API call here
        setDeviceId("");
        setVenue("");
        setOrganization("");
    };

    return (
        <div className="bg-[#EEF3F9] border border-gray-300 rounded-xl shadow-md w-full max-w-md p-6 flex flex-col justify-center">
            <h2 className="text-center text-xl font-semibold mb-1">Add Device</h2>
            <p className="text-center text-gray-500 mb-6">Enter device details</p>

            <div className="space-y-4 w-full">
                {/* Device ID */}
                <div className="relative">
                    <Box className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Device ID"
                        value={deviceId}
                        onChange={(e) => setDeviceId(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Venue Dropdown */}
                <div className="relative">
                    <select
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                        className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Venue</option>
                        {venues.map((v, idx) => (
                            <option key={idx} value={v}>
                                {v}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Organization Dropdown */}
                <div className="relative">
                    <select
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
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
                    onClick={handleSave}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-md transition duration-300 shadow-md"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddDevice;
