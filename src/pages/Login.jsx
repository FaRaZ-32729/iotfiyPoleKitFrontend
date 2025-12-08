// import React from "react";
// import { NavLink } from "react-router";

// const Login = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-0">
//             <div className="grid md:grid-cols-2 rounded-4xl items-stretch max-w-7xl w-full bg-white shadow-lg overflow-hidden">

//                 {/* Left (Form) Section */}
//                 <div className="p-8 w-full">
//                     <div className="space-y-6 lg:p-24 p-0">
//                         <div className="mb-8 text-center md:text-left">
//                             <img src="/logo.png" alt="IoTify Logo" className="h-10 mx-auto md:mx-0 mb-4" />
//                             <h3 className="text-slate-900 text-2xl font-semibold">Log in to your Account</h3>
//                             <p className="text-slate-500 text-sm mt-2">
//                                 Welcome Back! Select method to log in
//                             </p>
//                         </div>

//                         <div>
//                             <div className="relative flex items-center">
//                                 <input
//                                     type="email"
//                                     className="w-full text-sm text-slate-800 border border-slate-300 pl-10 pr-4 py-3 rounded-lg outline-blue-600"
//                                     placeholder="Email"
//                                     readOnly
//                                 />
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="#bbb"
//                                     stroke="#bbb"
//                                     className="w-[18px] h-[18px] absolute left-4"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path d="M12 12c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-10c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
//                                 </svg>
//                             </div>
//                         </div>

//                         <div>
//                             <div className="relative flex items-center">
//                                 <input
//                                     type="password"
//                                     className="w-full text-sm text-slate-800 border border-slate-300 pl-10 pr-10 py-3 rounded-lg outline-blue-600"
//                                     placeholder="Password"
//                                     readOnly
//                                 />
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="#bbb"
//                                     stroke="#bbb"
//                                     className="w-[18px] h-[18px] absolute left-4"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path d="M17 9v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-3v14h16v-14h-3zm-9 0v-2c0-2.209 1.791-4 4-4s4 1.791 4 4v2h-8zm12 12h-12v-10h12v10z" />
//                                 </svg>

//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="#bbb"
//                                     stroke="#bbb"
//                                     className="w-[18px] h-[18px] absolute right-4"
//                                     viewBox="0 0 128 128"
//                                 >
//                                     <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
//                                 </svg>
//                             </div>
//                         </div>

//                         <div className="flex flex-wrap items-center justify-end gap-4">
//                             <div className="text-sm">
//                                 <NavLink to="/forgot-password" className="text-blue-600 hover:underline font-medium">
//                                     Forgot Password
//                                 </NavLink>
//                             </div>
//                         </div>

//                         <div className="!mt-12">
//                             <button
//                                 type="button"
//                                 className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
//                             >
//                                 Log In
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right (Images) Section */}
//                 <div style={{ backgroundColor: "#EAEAEA" }} className="h-full hidden md:flex flex-col items-center justify-between p-4">
//                     {/* Top Image */}
//                     <div className="w-full flex justify-end p-4">
//                         <img
//                             src="login-right-top-image.png"
//                             className="h-16 w-auto object-contain"
//                             alt="Top Right Illustration"
//                         />
//                     </div>

//                     {/* Main Image */}
//                     <div className="flex-grow flex items-center justify-center p-4">
//                         <img
//                             src="/login-image.png"
//                             className="w-full h-auto object-contain"
//                             alt="IoT HVAC Control"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../contextApi/AuthContext";
const BASEURL = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // const handleLogin = async () => {
    //     if (!email || !password) {
    //         setError("Email & Password are required");
    //         return;
    //     }

    //     try {
    //         setLoading(true);
    //         setError("");

    //         const res = await axios.post(
    //             `${BASEURL}/auth/login`,
    //             { email, password },
    //             { withCredentials: true }
    //         );

    //         // Save token & user data
    //         localStorage.setItem("token", res.data.token);
    //         localStorage.setItem("user", JSON.stringify(res.data.user));

    //         navigate("/"); 
    //     } catch (err) {
    //         if (err.response) {
    //             setError(err.response.data.message);
    //         } else {
    //             setError("Something went wrong");
    //         }
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    const handleLogin = async () => {
        if (!email || !password) {
            setError("Email & Password are required");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const res = await axios.post(
                `${BASEURL}/auth/login`,
                { email, password },
                { withCredentials: true }
            );

            // Save user & token in context and localStorage
            login(res.data.user, res.data.token);

            navigate("/");
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-0">
            <div className="grid md:grid-cols-2 rounded-4xl items-stretch max-w-7xl w-full bg-white shadow-lg overflow-hidden">

                {/* Left (Form) Section */}
                <div className="p-8 w-full">
                    <div className="space-y-6 lg:p-24 p-0">
                        <div className="mb-8 text-center md:text-left">
                            <img src="/logo.png" alt="IoTify Logo" className="h-10 mx-auto md:mx-0 mb-4" />
                            <h3 className="text-slate-900 text-2xl font-semibold">Log in to your Account</h3>
                            <p className="text-slate-500 text-sm mt-2">
                                Welcome Back! Select method to log in
                            </p>
                        </div>

                        {error && (
                            <p className="text-red-600 text-sm font-medium">{error}</p>
                        )}

                        {/* Email Field */}
                        <div>
                            <div className="relative flex items-center">
                                <input
                                    type="email"
                                    className="w-full text-sm text-slate-800 border border-slate-300 pl-10 pr-4 py-3 rounded-lg outline-blue-600"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#bbb"
                                    className="w-[18px] h-[18px] absolute left-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 12c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-10c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                                </svg>
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="relative flex items-center">
                                <input
                                    type="password"
                                    className="w-full text-sm text-slate-800 border border-slate-300 pl-10 pr-10 py-3 rounded-lg outline-blue-600"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {/* Lock Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#bbb"
                                    className="w-[18px] h-[18px] absolute left-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17 9v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-3v14h16v-14h-3zm-9 0v-2c0-2.209 1.791-4 4-4s4 1.791 4 4v2h-8zm12 12h-12v-10h12v10z" />
                                </svg>
                                {/* Eye Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#bbb"
                                    className="w-[18px] h-[18px] absolute right-4"
                                    viewBox="0 0 128 128"
                                >
                                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-end gap-4">
                            <div className="text-sm">
                                <NavLink to="/forgot-password" className="text-blue-600 hover:underline font-medium">
                                    Forgot Password
                                </NavLink>
                            </div>
                        </div>

                        <div className="!mt-12">
                            <button
                                type="button"
                                onClick={handleLogin}
                                disabled={loading}
                                className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400"
                            >
                                {loading ? "Logging in..." : "Log In"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div style={{ backgroundColor: "#EAEAEA" }} className="h-full hidden md:flex flex-col items-center justify-between p-4">
                    <div className="w-full flex justify-end p-4">
                        <img src="login-right-top-image.png" className="h-16 w-auto object-contain" />
                    </div>

                    <div className="flex-grow flex items-center justify-center p-4">
                        <img src="/login-image.png" className="w-full h-auto object-contain" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
