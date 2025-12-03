import React from "react";
import { Pencil, Trash } from "lucide-react";

const ListVenue = () => {
    // Dummy static venues
    const venues = [
        { id: 1, name: "Main Hall" },
        { id: 2, name: "Conference Room" },
        { id: 3, name: "Auditorium" },
        { id: 4, name: "Outdoor Stage" },
    ];

    return (
        <div className="bg-white border border-gray-300 rounded-xl shadow-md w-full h-full p-4">
            <h1 className="text-gray-800 font-semibold text-xl mb-4">
                Venue Management
            </h1>

            <div className="mb-4">
                <h2 className="text-center text-gray-800 font-semibold text-lg">
                    Venue List
                </h2>
                <div className="mx-auto mt-2 h-px w-4/5 bg-blue-600/40"></div>
            </div>

            <div className="overflow-x-auto overflow-y-auto h-[58vh]">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 font-bold text-gray-800">
                                Venue Name
                            </th>
                            <th className="py-2 px-4 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {venues.map((venue) => (
                            <tr
                                key={venue.id}
                                className="border-b border-gray-200 hover:bg-blue-50/60 cursor-pointer transition-colors"
                            >
                                <td className="py-2 sm:py-3 px-2 sm:px-4">{venue.name}</td>
                                <td className="py-2 sm:py-3 px-2 sm:px-4">
                                    <div className="flex justify-center gap-2 sm:gap-3">
                                        <button className="rounded-full border border-green-500/50 bg-white flex items-center justify-center hover:bg-green-50 p-[3px] transition">
                                            <Pencil className="text-green-600" size={16} />
                                        </button>
                                        <button className="rounded-full border border-red-500/50 bg-white flex items-center justify-center hover:bg-red-50 p-[3px] transition">
                                            <Trash className="text-red-600" size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListVenue;
