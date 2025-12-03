import React from "react";
import ListVenue from "../components/venue/ListVenue";
import AddVenue from "../components/venue/AddVenue";

const Venue = () => {
    return (
        <div className="bg-white rounded-2xl w-full h-full p-4 md:p-0">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 h-full w-full shadow-md rounded-2xl">
                {/* Venue List */}
                <div className="flex-1">
                    <ListVenue />
                </div>

                {/* Divider for desktop */}
                <div className="hidden lg:block w-px bg-gray-200"></div>

                {/* Add Venue Form */}
                <div className="flex-1">
                    <AddVenue />
                </div>
            </div>
        </div>
    );
};

export default Venue;
