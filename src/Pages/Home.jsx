import React from 'react'
import { Link } from 'react-router';

const Home = () => {
  return (
       <div>
      
        <div className="py-16 m-10 flex items-center justify-center px-4">

          <div className="bg-teal-50 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 
                    w-full max-w-md md:max-w-xl lg:max-w-2xl text-center">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Smart Expense Tracker
            </h2>

            <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
              Smart Expense Tracker helps you manage your daily expenses,
              track your spending habits, and stay within your budget easily.
              Keep your finances organized and under control.
            </p>
            <Link to="/register">
            <button className="bg-linear-to-r from-green-800 to-green-500 
                         text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full 
                         shadow-lg shadow-green-900/60 hover:scale-105 
                         transition-all duration-300 m-2">
              Click Here
            </button>
          </Link>

          </div>

        </div>
      
    </div>

  )
};

export default Home;