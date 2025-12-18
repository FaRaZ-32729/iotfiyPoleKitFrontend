import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";

const DeviceContext = createContext();

export const useDevices = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }) => {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchDevices = async () => {
        try {
            setLoading(true);
            const res = await axios.get("/device/all-devices");
            setDevices(res.data || []);
        } catch (err) {
            console.error("Error fetching devices:", err);
            setError(err.response?.data?.message || "Failed to fetch devices");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDevices();
    }, []);

    return (
        <DeviceContext.Provider
            value={{
                devices,
                setDevices,
                loading,
                error,
                fetchDevices,
            }}
        >
            {children}
        </DeviceContext.Provider>
    );
};
