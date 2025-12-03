import React from "react";
import NavigationBar from "../components/NavigationBar";

const AppLayout = ({ children }) => {
    return (
        <div className="w-full h-screen flex flex-col md:flex-row bg-gray-100 relative">
            <NavigationBar />
            <div className="flex-1 ">{children}</div>
        </div>
    );
};

export default AppLayout;
