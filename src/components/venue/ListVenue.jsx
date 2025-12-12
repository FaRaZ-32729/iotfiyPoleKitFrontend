import React, { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import axios from "../../axiosConfig";
import { toast } from "react-toastify";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import { useOrganizations } from "../../contextApi/OrganizationContext";
import { useVenues } from "../../contextApi/VenueContext";
import CustomSelect from "../CustomSelect";

const BASEURL = import.meta.env.VITE_BACKEND_URL;

const ListVenue = () => {
    const { venues, loadingVenues, setVenues } = useVenues();
    const { organizations } = useOrganizations();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVenue, setSelectedVenue] = useState(null);
    const [editedName, setEditedName] = useState("");
    const [editedOrg, setEditedOrg] = useState("");
    const [saving, setSaving] = useState(false);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [venueToDelete, setVenueToDelete] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const openModal = (venue) => {
        setSelectedVenue(venue);
        setEditedName(venue.name);
        setEditedOrg(venue.organization?._id || "");
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedVenue(null);
        setEditedName("");
        setEditedOrg("");
    };

    const saveChanges = async () => {
        if (!editedName.trim()) {
            toast.error("Venue name cannot be empty");
            return;
        }

        try {
            setSaving(true);
            const res = await axios.put(
                `${BASEURL}/venue/admin/update/${selectedVenue._id}`,
                {
                    name: editedName.trim(),
                    organizationId: editedOrg,
                }
            );

            setVenues((prev) =>
                prev.map((v) =>
                    v._id === selectedVenue._id ? res.data.venue : v
                )
            );

            toast.success(res.data.message);
            closeModal();
        } catch (err) {
            console.error(err);
            toast.error(
                err.response?.data?.message
            );
        } finally {
            setSaving(false);
        }
    };

    const confirmDelete = (venue) => {
        setVenueToDelete(venue);
        setIsDeleteModalOpen(true);
    };

    const cancelDelete = () => {
        setVenueToDelete(null);
        setIsDeleteModalOpen(false);
    };

    const handleDelete = async () => {
        try {
            setDeleting(true);
            const res = await axios.delete(
                `${BASEURL}/venue/delete/${venueToDelete._id}`
            );

            setVenues((prev) =>
                prev.filter((v) => v._id !== venueToDelete._id)
            );

            toast.success(res.data.message);
        } catch (err) {
            console.error(err);
            toast.error(
                err.response?.data?.message || "Failed to delete venue"
            );
        } finally {
            setDeleting(false);
            cancelDelete();
        }
    };

    return (
        <div className="bg-white border border-gray-300 rounded-xl shadow-md w-full h-full p-4 flex flex-col">

            <h1 className="text-gray-800 font-semibold text-xl mb-4 hidden md:block">
                Venue Management
            </h1>

            <div className="mb-4">
                <h2 className="text-center text-gray-800 font-semibold text-lg">
                    Venue List
                </h2>
                <div className="mx-auto mt-2 h-px w-4/5 bg-blue-600/40"></div>
            </div>

            {/* <div className="overflow-x-auto overflow-y-auto flex-1">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 font-bold text-gray-800">
                                Venue Name
                            </th>
                            <th className="py-2 px-4 font-bold text-gray-800">
                                Organization
                            </th>
                            <th className="py-2 px-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loadingVenues
                            ? [...Array(6)].map((_, i) => (
                                <tr key={i} className="animate-pulse">
                                    <td className="py-2 px-4">
                                        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                                    </td>
                                    <td className="py-2 px-4">
                                        <div className="h-5 bg-gray-300 rounded w-2/4"></div>
                                    </td>
                                    <td className="py-2 px-4">
                                        <div className="flex gap-2 justify-center">
                                            <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                                            <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                            : venues.map((venue) => (
                                <tr
                                    key={venue._id}
                                    className="border-b border-gray-200 hover:bg-blue-50/60 cursor-pointer transition-colors"
                                >
                                    <td className="py-2 px-4">{venue.name}</td>

                                    <td className="py-2 px-4">
                                        {venue.organization?.name || "—"}
                                    </td>

                                    <td className="py-2 px-4">
                                        <div className="flex justify-center gap-2 sm:gap-3">
                                            <button
                                                onClick={() => openModal(venue)}
                                                className="rounded-full border border-green-500/50 bg-white flex items-center justify-center hover:bg-green-50 p-[3px] transition"
                                            >
                                                <Pencil
                                                    className="text-green-600"
                                                    size={16}
                                                />
                                            </button>

                                            <button
                                                onClick={() => confirmDelete(venue)}
                                                className="rounded-full border border-red-500/50 bg-white flex items-center justify-center hover:bg-red-50 p-[3px] transition"
                                            >
                                                <Trash
                                                    className="text-red-600"
                                                    size={16}
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div> */}

            <div className="overflow-x-auto overflow-y-auto flex-1">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 font-bold text-gray-800">
                                Venue Name
                            </th>
                            <th className="py-2 px-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loadingVenues
                            ? [...Array(6)].map((_, i) => (
                                <tr key={i} className="animate-pulse">
                                    <td className="py-2 px-4">
                                        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                                    </td>
                                    <td className="py-2 px-4">
                                        <div className="flex gap-2 justify-center">
                                            <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                                            <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                            : venues.map((venue) => (
                                <tr
                                    key={venue._id}
                                    className="border-b border-gray-200 hover:bg-blue-50/60 cursor-pointer transition-colors"
                                >
                                    <td className="py-2 px-4">{venue.name}</td>

                                    <td className="py-2 px-4">
                                        <div className="flex justify-center gap-2 sm:gap-3">
                                            <button
                                                onClick={() => openModal(venue)}
                                                className="rounded-full border border-green-500/50 bg-white flex items-center justify-center hover:bg-green-50 p-[3px] transition"
                                            >
                                                <Pencil className="text-green-600" size={16} />
                                            </button>

                                            <button
                                                onClick={() => confirmDelete(venue)}
                                                className="rounded-full border border-red-500/50 bg-white flex items-center justify-center hover:bg-red-50 p-[3px] transition"
                                            >
                                                <Trash className="text-red-600" size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>


            {/* EDIT VENUE MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
                        <h2 className="text-lg font-semibold mb-4">Edit Venue</h2>

                        <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* <select
                            value={editedOrg}
                            onChange={(e) => setEditedOrg(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Organization</option>
                            {organizations?.map((org) => (
                                <option key={org._id} value={org._id}>
                                    {org.name}
                                </option>
                            ))}
                        </select> */}
                        <CustomSelect
                            value={editedOrg}
                            onChange={ (e) => setEditedOrg(e.target.value)}
                            placeholder="Select Organization"
                            options={organizations.map((org) => ({ label: org.name, value: org._id }))}
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
                                disabled={saving}
                                className="px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800 disabled:bg-blue-400"
                            >
                                {saving ? "Saving..." : "Save"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* DELETE CONFIRMATION */}
            <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onCancel={cancelDelete}
                onConfirm={handleDelete}
                loading={deleting}
            />
        </div>
    );
};

export default ListVenue;
