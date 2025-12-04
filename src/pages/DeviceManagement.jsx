import React from "react";
import ListDevice from "../components/device/ListDevice";
import AddDevice from "../components/device/AddDevice";

const DeviceManagement = () => {
    return (
        <div className="bg-white rounded-2xl w-full h-full p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-2 h-full w-full shadow-md rounded-2xl">
                {/* Device List */}
                <div className="flex-1 min-h-[400px] md:min-h-0">
                    <ListDevice />
                </div>

                {/* Divider for tablet+ */}
                <div className="hidden md:block w-px bg-gray-200"></div>

                {/* Add Device Form */}
                <div className="flex-1 min-h-[400px] md:min-h-0 flex justify-center">
                    <AddDevice />
                </div>
            </div>
        </div>
    );
};

export default DeviceManagement;
