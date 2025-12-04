import { useState } from "react";
import UserList from "../components/users/UserList";
import AddUser from "../components/users/AddUser";

const UserManagement = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserSelect = (user) => setSelectedUser(user);

    return (
        <div className="bg-white rounded-2xl w-full h-full p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-2 h-full w-full shadow-md rounded-2xl">
                {/* User List */}
                <div className="flex-1 min-h-[400px] md:min-h-0">
                    <UserList onEdit={handleUserSelect} selectedUser={selectedUser} />
                </div>

                {/* Divider for tablet+ */}
                <div className="hidden md:block w-px bg-gray-200"></div>

                {/* Add User Form */}
                <div className="flex-1 min-h-[400px] md:min-h-0 flex justify-center">
                    <AddUser selectedUser={selectedUser} />
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
