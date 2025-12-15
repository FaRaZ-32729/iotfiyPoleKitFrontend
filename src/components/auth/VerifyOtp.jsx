import React from 'react'

const VerifyOtp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-0">
            <div className="grid md:grid-cols-2 rounded-4xl items-stretch max-w-7xl w-full bg-white shadow-lg overflow-hidden">

                {/* Left (Form) Section */}
                <div className="p-8 w-full">
                    <form className="space-y-6 lg:p-24 p-0">
                        <div className="mb-8 text-center md:text-left">
                            <img
                                src="/logo.png"
                                alt="IoTify Logo"
                                className="h-10 mx-auto md:mx-0 mb-4"
                            />
                            <h3 className="text-slate-900 text-2xl font-semibold">
                                Verify OTP
                            </h3>
                            <p className="text-slate-500 text-sm mt-2">
                                Enter the 1-time OTP sent to your email to activate your account.
                            </p>
                        </div>

                        {/* OTP Input */}
                        <div>
                            <label className="sr-only">OTP</label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    className="w-full text-sm text-slate-800 border border-slate-300 pl-10 pr-4 py-3 rounded-lg outline-blue-600"
                                />

                                {/* Lock / Key icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#bbb"
                                    stroke="#bbb"
                                    className="w-[18px] h-[18px] absolute left-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5zm3 8H9V6a3 3 0 0 1 6 0v3z" />
                                </svg>
                            </div>
                        </div>

                        <div className="!mt-6">
                            <button
                                type="button"
                                className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            >
                                Verify OTP
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right (Images) Section */}
                <div className="h-full hidden md:flex flex-col items-center justify-between p-4 bg-[#EAEAEA]">
                    {/* Top Image */}
                    <div className="w-full flex justify-end p-4">
                        <img
                            src="/login-right-top-image.png"
                            className="h-16 w-auto object-contain"
                            alt="Top Right Illustration"
                        />
                    </div>

                    {/* Main Image */}
                    <div className="flex-grow flex items-center justify-center p-4">
                        <img
                            src="/login-image.png"
                            className="w-full h-auto object-contain"
                            alt="Illustration"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default VerifyOtp
