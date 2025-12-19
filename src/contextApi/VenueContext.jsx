import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const BASEURL = import.meta.env.VITE_BACKEND_URL;

const VenueContext = createContext();

export const VenueProvider = ({ children }) => {
    const [venues, setVenues] = useState([]);
    const [loadingVenues, setLoadingVenues] = useState(true);
    const { user, token } = useAuth();

    const fetchVenues = async () => {
        try {
            let res = [];
            setLoadingVenues(true);
            if (token && user.role === "admin") {
                res = await axios.get("/venue/all");
                setVenues(res?.data || []);
            } else if (token && user.role === "manager") {
                res = await axios.get(`/venue/venue-by-org/${user.organization}`)
                setVenues(res?.data?.venues || []);
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to load venues");
        } finally {
            setLoadingVenues(false);
        }
    };

    useEffect(() => {
        fetchVenues();
    }, []);

    return (
        <VenueContext.Provider
            value={{
                venues,
                loadingVenues,
                fetchVenues,
                setVenues, // useful for update/delete without calling API again
            }}
        >
            {children}
        </VenueContext.Provider>
    );
};

// Custom hook
export const useVenues = () => useContext(VenueContext);
