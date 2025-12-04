import React from "react";
import ListOrganization from "../components/organization/ListOrganizations";
import AddOrganization from "../components/organization/addOrganization";

const OrganizationManagement = () => {
    return (
        <div className="bg-white rounded-2xl w-full h-full p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-2 h-full w-full shadow-md rounded-2xl">
                {/* Organization List */}
                <div className="flex-1 min-h-[400px] md:min-h-0">
                    <ListOrganization />
                </div>

                {/* Divider for tablet+ */}
                <div className="hidden md:block w-px bg-gray-200"></div>

                {/* Add Organization Form */}
                <div className="flex-1 min-h-[400px] md:min-h-0 flex justify-center">
                    <AddOrganization />
                </div>
            </div>
        </div>
    );
};

export default OrganizationManagement;
