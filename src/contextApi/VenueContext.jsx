// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "../axiosConfig";
// import { toast } from "react-toastify";
// import { useAuth } from "./AuthContext";

// const BASEURL = import.meta.env.VITE_BACKEND_URL;

// const VenueContext = createContext();

// export const VenueProvider = ({ children }) => {
//     const [venues, setVenues] = useState([]);
//     const [loadingVenues, setLoadingVenues] = useState(true);
//     const { user, token } = useAuth();

//     const fetchVenues = async () => {
//         try {
//             let res = [];
//             setLoadingVenues(true);
//             if (token && user.role === "admin") {
//                 res = await axios.get("/venue/all");
//                 setVenues(res?.data || []);
//             } else if (token && user.role === "manager") {
//                 res = await axios.get(`/venue/venue-by-org/${user.organization}`)
//                 setVenues(res?.data?.venues || []);
//             }
//         } catch (err) {
//             console.error(err);
//             toast.error("Failed to load venues");
//         } finally {
//             setLoadingVenues(false);
//         }
//     };

//     useEffect(() => {
//         fetchVenues();
//     }, []);

//     return (
//         <VenueContext.Provider
//             value={{
//                 venues,
//                 loadingVenues,
//                 fetchVenues,
//                 setVenues, // useful for update/delete without calling API again
//             }}
//         >
//             {children}
//         </VenueContext.Provider>
//     );
// };

// // Custom hook
// export const useVenues = () => useContext(VenueContext);


import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const VenueContext = createContext();

export const VenueProvider = ({ children }) => {
    const [venues, setVenues] = useState([]);
    const [loadingVenues, setLoadingVenues] = useState(true);
    const { user, token } = useAuth();

    // Fetch all venues (admin) or venues by org (manager)
    const fetchVenues = async () => {
        try {
            setLoadingVenues(true);
            let res;
            if (token) {
                if (user.role === "admin") {
                    res = await axios.get("/venue/all");
                    setVenues(res?.data || []);
                } else if (user.role === "manager") {
                    res = await axios.get(`/venue/venue-by-org/${user.organization._id}`);
                    setVenues(res?.data?.venues || []);
                }
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to load venues");
        } finally {
            setLoadingVenues(false);
        }
    };

    // Fetch venues by a specific organization (can be used in modal)
    const fetchVenuesByOrg = async (orgId) => {
        if (!orgId) {
            setVenues([]);
            return;
        }
        // console.log(`organization id in venue context ${orgId}`)
        try {
            setLoadingVenues(true);
            const res = await axios.get(`/venue/venue-by-org/${orgId}`);
            setVenues(res?.data?.venues || []);
            return res?.data?.venues || [];
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Failed to fetch venues");
            setVenues([]);
            return [];
        } finally {
            setLoadingVenues(false);
        }
    };

    useEffect(() => {
        fetchVenues();
    }, [token]);

    return (
        <VenueContext.Provider
            value={{
                venues,
                loadingVenues,
                fetchVenues,
                fetchVenuesByOrg, // new centralized function
                setVenues,
            }}
        >
            {children}
        </VenueContext.Provider>
    );
};

// Custom hook
export const useVenues = () => useContext(VenueContext);
