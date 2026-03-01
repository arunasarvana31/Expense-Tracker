import { Link } from "react-router";

const NavBar = () => {
    return (
        <div>
            <div className="w-full bg-gray-100 shadow-md">


                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 gap-4">


                    <div className="flex items-center gap-3">
                        <img
                            src="/3456.png"
                            alt="Logo"
                            className="w-10 h-10 md:w-12 md:h-12"
                        />
                        <h1 className="text-lg sm:text-xl m-0 md:text-2xl font-bold text-blue-600 tracking-wide text-center md:text-left">
                            Smart Expense Tracker
                        </h1>
                    </div>


                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                       <Link to="/login">
                        <button className="w-full sm:w-auto px-6 py-2 text-white rounded-full bg-green-600 shadow-lg shadow-green-500/50 hover:scale-105 hover:bg-green-600 transition duration-300">
                            Login
                        </button>
                         </Link>   

                        <Link to="/register">
                        <button className="w-full sm:w-auto px-6 py-2 text-white rounded-full bg-red-600 shadow-lg shadow-red-500/50 hover:scale-105 hover:bg-rose-400 transition duration-300">
                            Register
                            </button>
                        </Link>   
                    </div>

                </div>

            </div>
            </div>

            
            
    )
}

export default NavBar;