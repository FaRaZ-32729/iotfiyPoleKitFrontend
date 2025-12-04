import { Mail, User } from "lucide-react";

const AddUser = ({ selectedUser }) => {
    return (
        // <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#EEF3F9] border border-gray-300 rounded-xl shadow-md w-full max-w-md p-6 flex flex-col justify-center">
                <h2 className="text-center text-xl font-semibold mb-1">Add User</h2>
                <p className="text-center text-gray-500 mb-6">
                    Welcome back! Fill the form to add a user
                </p>

                <form className="space-y-4 w-full">
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-md transition duration-300 shadow-md"
                    >
                        Save
                    </button>
                </form>
            </div>
        // </div> 
    );
};

export default AddUser;
