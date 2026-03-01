import React from "react"
import { Link ,useNavigate } from "react-router";

const Register = () => {
    return (
        <div>


        
            <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 p-4">
                <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
                    <form className="bg-teal-50  p-6 sm:p-8 md:p-10 flex flex-col items-center rounded-2xl shadow-lg w-full space-y-5">

                    <h2 className=" flex items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-center">
                        <img
                            src="/edit.png"
                            alt="Logo"
                                className="w-8 md:w-12 md:h-12 h-8 sm:w-10 sm:h-10 object-contain" />
                        Register
                    </h2>
                   
                    <div className="relative w-full max-w-sm">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 pr-12  border-sky-500 border-l-blue-500 rounded-full focus:outline-none focus:ring-2  focus:ring-blue-400"
                        />
                        <img
                            src="/5.png"
                            alt="Logo"
                            className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2"
                        />
                    </div>

                    <div className="relative w-full max-w-sm">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 pr-12  border-sky-500 border-l-blue-500 rounded-full focus:outline-none focus:ring-2  focus:ring-blue-400"
                        />
                        <img
                            src="/arroba.png"
                            alt="Logo"
                            className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2"
                        />
                    </div>

                    <div className="relative w-full max-w-sm mt-4">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 pr-12 border-sky-500 border-l-blue-500 rounded-full focus:outline-none focus:ring-2  focus:ring-blue-400"
                        />
                        <img
                            src="/4.png"
                            alt="Logo"
                            className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2"
                        />
                    </div>
                    <Link to="/private/expenseadd">
                    <button className="w-96 bg-linear-to-r from-green-800 to-green-500 
                         text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full 
                         shadow-lg shadow-green-900/60 hover:scale-105 
                         transition-all duration-300 ">
                        Register
                        </button>
                    </Link>
                    <div className="flex items-center gap-2 m-3">
                        <h5 className="text-blue-700 m-3">Already have account..? </h5>

                        <Link to="/login">
                            <h5 className="text-blue-700 underline">Login</h5>            
                        </Link>
                       

                    </div>

                </form>
                </div>
            </div>

         </div>



        
    )
}

export default Register;