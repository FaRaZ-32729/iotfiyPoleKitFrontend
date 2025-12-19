// import React, { useEffect, useState } from "react";
// import { Box } from "lucide-react";
// import MapPicker from "./MapPicker";
// import { toast } from "react-toastify";
// import axios from "../../axiosConfig";
// import CustomSelect from "../CustomSelect";
// import { useVenues } from "../../contextApi/VenueContext";
// import { useOrganizations } from "../../contextApi/OrganizationContext";
// import { useDevices } from "../../contextApi/DeviceContext";

// const AddDevice = () => {
//     const [deviceId, setDeviceId] = useState("");
//     const [venue, setVenue] = useState("");
//     const [organization, setOrganization] = useState("");
//     const { fetchDevices } = useDevices();

//     const [latitude, setLatitude] = useState(null);
//     const [longitude, setLongitude] = useState(null);
//     const [showMap, setShowMap] = useState(false);

//     const { venues, loadingVenues, fetchVenues } = useVenues();
//     const { organizations, loading } = useOrganizations();

//     useEffect(() => {
//         fetchVenues();
//     }, []);

//     const handleSave = async () => {
//         if (!deviceId || !venue || !organization) {
//             console.log("all firelds are required")
//             return toast.error("All fields are required");
//         }

//         if (latitude === null || longitude === null) {
//             console.log("please select device location")
//             return toast.error("Please select device location from map");
//         }

//         try {
//             const res = await axios.post("/device/add", {
//                 deviceId,
//                 venueId: venue,
//                 orgId: organization,
//                 latitude,
//                 longitude,
//             });

//             console.log(res)

//             toast.success("Device added successfully");
//             fetchDevices();

//             setDeviceId("");
//             setVenue("");
//             setOrganization("");
//             setLatitude(null);
//             setLongitude(null);

//         } catch (err) {
//             console.error(err);
//             toast.error(err.response?.data?.message || "Failed to add device");
//         }
//     };

//     return (
//         <div className="bg-[#EEF3F9] border border-gray-300 rounded-xl shadow-md w-full max-w-md p-6 flex flex-col justify-center">
//             <h2 className="text-center text-xl font-semibold mb-1">Add Device</h2>
//             <p className="text-center text-gray-500 mb-6">Enter device details</p>

//             <div className="space-y-4 w-full">
//                 <div className="relative">
//                     <Box className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                     <input
//                         type="text"
//                         placeholder="Device ID"
//                         value={deviceId}
//                         onChange={(e) => setDeviceId(e.target.value)}
//                         className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
//                     />
//                 </div>

//                 <CustomSelect
//                     value={venue}
//                     onChange={(val) => setVenue(val)}
//                     placeholder={loadingVenues ? "Loading venues..." : "Select Venue"}
//                     options={venues.map((v) => ({
//                         label: v.name,
//                         value: v._id,
//                     }))}
//                 />

//                 <CustomSelect
//                     value={organization}
//                     onChange={(val) => setOrganization(val)}
//                     placeholder={loading ? "Loading organizations..." : "Select Organization"}
//                     options={organizations.map((org) => ({
//                         label: org.name,
//                         value: org._id,
//                     }))}
//                 />

//                 <button
//                     onClick={() => setShowMap(true)}
//                     className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-md"
//                 >
//                     Select Location on Map
//                 </button>

//                 <button
//                     onClick={handleSave}
//                     className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-md"
//                 >
//                     Save
//                 </button>



//                 {showMap && (
//                     <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
//                         <div className="bg-white rounded-lg w-11/12 max-w-2xl p-4">
//                             <MapPicker
//                                 onSelect={(latlng) => {
//                                     setLatitude(latlng.lat);
//                                     setLongitude(latlng.lng);
//                                 }}
//                             />
//                             <div className="flex justify-end gap-3 mt-4">
//                                 <button onClick={() => setShowMap(false)} className="px-4 py-2 border rounded-md">
//                                     Cancel
//                                 </button>
//                                 <button onClick={() => setShowMap(false)} className="px-4 py-2 bg-blue-700 text-white rounded-md">
//                                     Confirm Location
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AddDevice;


// import React, { useEffect, useState } from "react";
// import { Box } from "lucide-react";
// import MapPicker from "./MapPicker";
// import { toast } from "react-toastify";
// import axios from "../../axiosConfig";
// import { useVenues } from "../../contextApi/VenueContext";
// import { useOrganizations } from "../../contextApi/OrganizationContext";
// import { useDevices } from "../../contextApi/DeviceContext";
// import OrgDropdown from "../customDropdowns/OrgDropdown";
// import VenueDropdown from "../customDropdowns/VenueDropdown";

// const AddDevice = () => {
//     const { fetchDevices } = useDevices();
//     const { venues, fetchVenues } = useVenues();
//     const { organizations } = useOrganizations();

//     const [formData, setFormData] = useState({
//         deviceId: "",
//         orgId: "",
//         venueId: "",
//     });

//     const [latitude, setLatitude] = useState(null);
//     const [longitude, setLongitude] = useState(null);
//     const [showMap, setShowMap] = useState(false);
//     const [filteredVenues, setFilteredVenues] = useState([]);

//     // Fetch all venues initially
//     useEffect(() => {
//         fetchVenues();
//     }, []);

//     // Update filtered venues whenever orgId changes
//     useEffect(() => {
//         if (!formData.orgId) {
//             setFilteredVenues([]);
//         } else {
//             const orgVenues = venues.filter((v) => v.orgId === formData.orgId);
//             setFilteredVenues(orgVenues);
//             // Reset venue selection when org changes
//             setFormData((prev) => ({ ...prev, venueId: "" }));
//         }
//     }, [formData.orgId, venues]);

//     const handleSave = async () => {
//         const { deviceId, orgId, venueId } = formData;
//         if (!deviceId || !venueId || !orgId) {
//             return toast.error("All fields are required");
//         }
//         if (latitude === null || longitude === null) {
//             return toast.error("Please select device location from map");
//         }

//         try {
//             await axios.post("/device/add", {
//                 deviceId,
//                 orgId,
//                 venueId,
//                 latitude,
//                 longitude,
//             });
//             toast.success("Device added successfully");
//             fetchDevices();

//             // Reset form
//             setFormData({ deviceId: "", orgId: "", venueId: "" });
//             setLatitude(null);
//             setLongitude(null);
//         } catch (err) {
//             console.error(err);
//             toast.error(err.response?.data?.message || "Failed to add device");
//         }
//     };

//     return (
//         <div className="bg-[#EEF3F9] border border-gray-300 rounded-xl shadow-md w-full max-w-md p-6 flex flex-col justify-center">
//             <h2 className="text-center text-xl font-semibold mb-1">Add Device</h2>
//             <p className="text-center text-gray-500 mb-6">Enter device details</p>

//             <div className="space-y-4 w-full">
//                 {/* Device ID input */}
//                 <div className="relative">
//                     <Box className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                     <input
//                         type="text"
//                         placeholder="Device ID"
//                         value={formData.deviceId}
//                         onChange={(e) => setFormData((prev) => ({ ...prev, deviceId: e.target.value }))}
//                         className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
//                     />
//                 </div>

//                 {/* Organization Dropdown */}
//                 <OrgDropdown
//                     organizations={organizations}
//                     formData={formData}
//                     handleOrgChange={(e) =>
//                         setFormData((prev) => ({ ...prev, orgId: e.target.value }))
//                     }
//                 />

//                 {/* Venue Dropdown */}
//                 <VenueDropdown
//                     filteredVenues={filteredVenues}
//                     formData={formData}
//                     setFormData={setFormData}
//                 />

//                 {/* Map picker */}
//                 <button
//                     onClick={() => setShowMap(true)}
//                     className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-md"
//                 >
//                     Select Location on Map
//                 </button>

//                 {/* Save button */}
//                 <button
//                     onClick={handleSave}
//                     className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-md"
//                 >
//                     Save
//                 </button>

//                 {/* Map modal */}
//                 {showMap && (
//                     <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
//                         <div className="bg-white rounded-lg w-11/12 max-w-2xl p-4">
//                             <MapPicker
//                                 onSelect={(latlng) => {
//                                     setLatitude(latlng.lat);
//                                     setLongitude(latlng.lng);
//                                 }}
//                             />
//                             <div className="flex justify-end gap-3 mt-4">
//                                 <button onClick={() => setShowMap(false)} className="px-4 py-2 border rounded-md">
//                                     Cancel
//                                 </button>
//                                 <button onClick={() => setShowMap(false)} className="px-4 py-2 bg-blue-700 text-white rounded-md">
//                                     Confirm Location
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AddDevice;


import React, { useState, useEffect } from "react";
import { Box } from "lucide-react";
import MapPicker from "./MapPicker";
import { toast } from "react-toastify";
import axios from "../../axiosConfig";
import { useVenues } from "../../contextApi/VenueContext";
import { useOrganizations } from "../../contextApi/OrganizationContext";
import { useDevices } from "../../contextApi/DeviceContext";
import OrgDropdown from "../customDropdowns/OrgDropdown";
import VenueDropdown from "../customDropdowns/VenueDropdown";

const AddDevice = () => {
    const { fetchDevices, setDevices } = useDevices();
    const { venues, fetchVenuesByOrg } = useVenues(); // Use fetchVenuesByOrg
    const { organizations } = useOrganizations();

    const [formData, setFormData] = useState({
        deviceId: "",
        orgId: "",
        venueId: "",
    });

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [showMap, setShowMap] = useState(false);

    // Fetch venues for the selected org whenever orgId changes
    useEffect(() => {
        const fetchOrgVenues = async () => {
            if (formData.orgId) {
                await fetchVenuesByOrg(formData.orgId);
                // Reset venueId when org changes
                setFormData((prev) => ({ ...prev, venueId: "" }));
            }
        };
        fetchOrgVenues();
    }, [formData.orgId]);

    const handleSave = async () => {
        const { deviceId, orgId, venueId } = formData;
        if (!deviceId || !venueId || !orgId) {
            return toast.error("All fields are required");
        }
        if (latitude === null || longitude === null) {
            return toast.error("Please select device location from map");
        }

        try {
            await axios.post("/device/add", {
                deviceId,
                orgId,
                venueId,
                latitude,
                longitude,
            });
            toast.success("Device added successfully");
            fetchDevices();

            // Reset form
            setFormData({ deviceId: "", orgId: "", venueId: "" });
            setLatitude(null);
            setLongitude(null);
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Failed to add device");
        }
    };

    return (
        <div className="bg-[#EEF3F9] border border-gray-300 rounded-xl shadow-md w-full max-w-md p-6 flex flex-col justify-center">
            <h2 className="text-center text-xl font-semibold mb-1">Add Device</h2>
            <p className="text-center text-gray-500 mb-6">Enter device details</p>

            <div className="space-y-4 w-full">
                <div className="relative">
                    <Box className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Device ID"
                        value={formData.deviceId}
                        onChange={(e) => setFormData((prev) => ({ ...prev, deviceId: e.target.value }))}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Organization Dropdown */}
                <OrgDropdown
                    organizations={organizations}
                    formData={formData}
                    handleOrgChange={(e) =>
                        setFormData((prev) => ({ ...prev, orgId: e.target.value }))
                    }
                />

                {/* Venue Dropdown */}
                <VenueDropdown
                    filteredVenues={venues} // venues are already filtered by org
                    formData={formData}
                    setFormData={setFormData}
                />

                <button
                    onClick={() => setShowMap(true)}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-md"
                >
                    Select Location on Map
                </button>

                <button
                    onClick={handleSave}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-md"
                >
                    Save
                </button>

                {showMap && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg w-11/12 max-w-2xl p-4">
                            <MapPicker
                                onSelect={(latlng) => {
                                    setLatitude(latlng.lat);
                                    setLongitude(latlng.lng);
                                }}
                            />
                            <div className="flex justify-end gap-3 mt-4">
                                <button onClick={() => setShowMap(false)} className="px-4 py-2 border rounded-md">
                                    Cancel
                                </button>
                                <button onClick={() => setShowMap(false)} className="px-4 py-2 bg-blue-700 text-white rounded-md">
                                    Confirm Location
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddDevice;
