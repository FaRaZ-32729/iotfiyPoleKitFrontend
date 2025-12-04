import { Box } from "lucide-react";
import { useState } from "react";

const AddOrganization = () => {
    return (
        <div className="bg-[#EEF3F9] border border-gray-300 rounded-xl shadow-md w-full max-w-md p-6 flex flex-col justify-center">
            <h2 className="text-center text-xl font-semibold mb-1">Add Organization</h2>
            <p className="text-center text-gray-500 mb-6">
                Welcome back! Enter organization details
            </p>

            <form className="space-y-4 w-full">
                {/* Organization Name Input */}
                <div className="relative">
                    <Box className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        name="organization_name"
                        placeholder="Organization Name"
                        className="w-full pl-9 pr-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
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

export default AddOrganization;
