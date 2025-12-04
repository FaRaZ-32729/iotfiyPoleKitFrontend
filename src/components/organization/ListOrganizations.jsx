import React, { useState } from "react";
import { Pencil, Trash } from "lucide-react";

const ListOrganization = () => {
    const [organizations, setOrganizations] = useState([
        { id: 1, name: "Organization A" },
        { id: 2, name: "Organization B" },
        { id: 3, name: "Organization C" },
        { id: 4, name: "Organization D" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrg, setSelectedOrg] = useState(null);
    const [editedName, setEditedName] = useState("");

    const openModal = (org) => {
        setSelectedOrg(org);
        setEditedName(org.name);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedOrg(null);
        setEditedName("");
    };

    const saveChanges = () => {
        setOrganizations((prev) =>
            prev.map((org) =>
                org.id === selectedOrg.id ? { ...org, name: editedName } : org
            )
        );
        closeModal();
    };

    return (
        <div className="bg-white border border-gray-300 rounded-xl shadow-md w-full h-full p-4 flex flex-col">
            <h1 className="text-gray-800 font-semibold text-xl mb-4 hidden md:block">Organization Management</h1>

            <div className="mb-4">
                <h2 className="text-center text-gray-800 font-semibold text-lg">Organization List</h2>
                <div className="mx-auto mt-2 h-px w-4/5 bg-blue-600/40"></div>
            </div>

            <div className="overflow-x-auto overflow-y-auto flex-1">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 font-bold text-gray-800">Organization Name</th>
                            <th className="py-2 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {organizations.map((org) => (
                            <tr
                                key={org.id}
                                className="border-b border-gray-200 hover:bg-blue-50/60 cursor-pointer transition-colors"
                            >
                                <td className="py-2 sm:py-3 px-2 sm:px-4">{org.name}</td>
                                <td className="py-2 sm:py-3 px-2 sm:px-4">
                                    <div className="flex justify-center gap-2 sm:gap-3">
                                        <button
                                            onClick={() => openModal(org)}
                                            className="rounded-full border border-green-500/50 bg-white flex items-center justify-center hover:bg-green-50 p-[3px] transition"
                                        >
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

            {/* Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
                        <h2 className="text-lg font-semibold mb-4">Edit Organization</h2>
                        <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={saveChanges}
                                className="px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListOrganization;
