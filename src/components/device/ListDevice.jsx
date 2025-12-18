// import React, { useState } from "react";
// import { Pencil, Trash } from "lucide-react";

// const ListDevice = () => {
//     const [devices, setDevices] = useState([
//         { id: 1, deviceId: "Device001" },
//         { id: 2, deviceId: "Device002" },
//         { id: 3, deviceId: "Device003" },
//     ]);

//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedDevice, setSelectedDevice] = useState(null);
//     const [editedName, setEditedName] = useState("");

//     const openModal = (device) => {
//         setSelectedDevice(device);
//         setEditedName(device.deviceId);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedDevice(null);
//         setEditedName("");
//     };

//     const saveChanges = () => {
//         setDevices((prev) =>
//             prev.map((d) => (d.id === selectedDevice.id ? { ...d, deviceId: editedName } : d))
//         );
//         closeModal();
//     };

//     return (
//         <div className="bg-white border border-gray-300 rounded-xl shadow-md w-full h-full p-4 flex flex-col">
//             <h1 className="text-gray-800 font-semibold text-xl mb-4 hidden md:block">Device Management</h1>

//             <div className="mb-4">
//                 <h2 className="text-center text-gray-800 font-semibold text-lg">Device List</h2>
//                 <div className="mx-auto mt-2 h-px w-4/5 bg-blue-600/40"></div>
//             </div>

//             <div className="overflow-x-auto overflow-y-auto flex-1">
//                 <table className="w-full table-auto text-left">
//                     <thead>
//                         <tr className="bg-gray-100">
//                             <th className="py-2 px-4 font-bold text-gray-800">Device ID</th>
//                             <th className="py-2 px-4 text-center">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {devices.map((device) => (
//                             <tr
//                                 key={device.id}
//                                 className="border-b border-gray-200 hover:bg-blue-50/60 cursor-pointer transition-colors"
//                             >
//                                 <td className="py-2 sm:py-3 px-2 sm:px-4">{device.deviceId}</td>
//                                 <td className="py-2 sm:py-3 px-2 sm:px-4">
//                                     <div className="flex justify-center gap-2 sm:gap-3">
//                                         <button
//                                             onClick={() => openModal(device)}
//                                             className="rounded-full border border-green-500/50 bg-white flex items-center justify-center hover:bg-green-50 p-[3px] transition"
//                                         >
//                                             <Pencil className="text-green-600" size={16} />
//                                         </button>
//                                         <button className="rounded-full border border-red-500/50 bg-white flex items-center justify-center hover:bg-red-50 p-[3px] transition">
//                                             <Trash className="text-red-600" size={16} />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Edit Modal */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//                     <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
//                         <h2 className="text-lg font-semibold mb-4">Edit Device</h2>
//                         <input
//                             type="text"
//                             value={editedName}
//                             onChange={(e) => setEditedName(e.target.value)}
//                             className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <div className="flex justify-end gap-3">
//                             <button
//                                 onClick={closeModal}
//                                 className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={saveChanges}
//                                 className="px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800"
//                             >
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ListDevice;


import React, { useEffect, useState } from "react";
import { Pencil, Trash } from "lucide-react";
import { toast } from "react-toastify";
import axios from "../../axiosConfig";
import { useDevices } from "../../contextApi/DeviceContext";
import DeleteConfirmationModal from "../DeleteConfirmationModal";

const ListDevice = () => {
    const { devices, setDevices, fetchDevices, loading } = useDevices();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [editedDeviceId, setEditedDeviceId] = useState("");
    const [saving, setSaving] = useState(false);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deviceToDelete, setDeviceToDelete] = useState(null);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        fetchDevices();
    }, []);

    /* ================= EDIT ================= */

    const openModal = (device) => {
        setSelectedDevice(device);
        setEditedDeviceId(device.deviceId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDevice(null);
        setEditedDeviceId("");
    };

    const saveChanges = async () => {
        if (!editedDeviceId.trim()) {
            toast.error("Device ID cannot be empty");
            return;
        }

        try {
            setSaving(true);
            const res = await axios.put(
                `/device/update/${selectedDevice._id}`,
                { deviceId: editedDeviceId.trim() }
            );

            setDevices((prev) =>
                prev.map((d) =>
                    d._id === selectedDevice._id ? res.data.device : d
                )
            );

            toast.success(res.data.message);
            closeModal();
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Failed to update device");
        } finally {
            setSaving(false);
        }
    };

    /* ================= DELETE ================= */

    const confirmDelete = (device) => {
        setDeviceToDelete(device);
        setIsDeleteModalOpen(true);
    };

    const cancelDelete = () => {
        setDeviceToDelete(null);
        setIsDeleteModalOpen(false);
    };

    const handleDelete = async () => {
        try {
            setDeleting(true);
            const res = await axios.delete(
                `/device/delete/${deviceToDelete._id}`
            );

            setDevices((prev) =>
                prev.filter((d) => d._id !== deviceToDelete._id)
            );

            toast.success(res.data.message);
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Failed to delete device");
        } finally {
            setDeleting(false);
            cancelDelete();
        }
    };

    return (
        <div className="bg-white border border-gray-300 rounded-xl shadow-md w-full h-full p-4 flex flex-col">
            <h1 className="text-gray-800 font-semibold text-xl mb-4 hidden md:block">
                Device Management
            </h1>

            <div className="mb-4">
                <h2 className="text-center text-gray-800 font-semibold text-lg">
                    Device List
                </h2>
                <div className="mx-auto mt-2 h-px w-4/5 bg-blue-600/40"></div>
            </div>

            <div className="overflow-x-auto overflow-y-auto flex-1">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 font-bold text-gray-800">
                                Device ID
                            </th>
                            <th className="py-2 px-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading
                            ? [...Array(6)].map((_, i) => (
                                <tr
                                    key={i}
                                    className="animate-pulse border-b border-gray-200"
                                >
                                    <td className="py-2 px-4">
                                        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                                    </td>
                                    <td className="py-2 px-4">
                                        <div className="flex justify-center gap-2">
                                            <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                                            <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                            : devices.map((device) => (
                                <tr
                                    key={device._id}
                                    className="border-b border-gray-200 hover:bg-blue-50/60 cursor-pointer transition-colors"
                                >
                                    <td className="py-2 px-4">
                                        {device.deviceId}
                                    </td>
                                    <td className="py-2 px-4">
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() =>
                                                    openModal(device)
                                                }
                                                className="rounded-full border border-green-500/50 bg-white hover:bg-green-50 p-[3px]"
                                            >
                                                <Pencil
                                                    className="text-green-600"
                                                    size={16}
                                                />
                                            </button>

                                            <button
                                                onClick={() =>
                                                    confirmDelete(device)
                                                }
                                                className="rounded-full border border-red-500/50 bg-white hover:bg-red-50 p-[3px]"
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
            </div>

            {/* ================= EDIT MODAL ================= */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
                        <h2 className="text-lg font-semibold mb-4">
                            Edit Device
                        </h2>

                        <input
                            type="text"
                            value={editedDeviceId}
                            onChange={(e) =>
                                setEditedDeviceId(e.target.value)
                            }
                            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring-2 focus:ring-blue-500"
                        />

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 rounded-md border hover:bg-gray-100"
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

            {/* ================= DELETE MODAL ================= */}
            <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onCancel={cancelDelete}
                onConfirm={handleDelete}
                loading={deleting}
            />
        </div>
    );
};

export default ListDevice;
