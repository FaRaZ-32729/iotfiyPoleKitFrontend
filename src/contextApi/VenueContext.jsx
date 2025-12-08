import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";
import { toast } from "react-toastify";

const BASEURL = import.meta.env.VITE_BACKEND_URL;

const VenueContext = createContext();

export const VenueProvider = ({ children }) => {
    const [venues, setVenues] = useState([]);
    const [loadingVenues, setLoadingVenues] = useState(true);

    const fetchVenues = async () => {
        try {
            setLoadingVenues(true);
            const res = await axios.get(`${BASEURL}/venue/all`);
            setVenues(res.data);
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
