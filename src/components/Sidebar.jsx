import { NavLink } from "react-router";

const SideBar = () => {
    return (
        <div className="w-64 min-h-screen bg-gray-200 text-blue-700 shadow-xl p-6 hidden md:block">

            <h2 className="text-2xl font-bold mb-8 tracking-wide">
                 💰 Expense Tracker
            </h2>

            <ul className="space-y-6">

                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "block bg-green-50 text-blue px-4 py-2 rounded-lg font-semibold shadow"
                                : "block hover:bg-white px-4 py-2 rounded-lg transition duration-300"
                        }
                    >
                        🏠 Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="expenseadd"
                        className={({ isActive }) =>
                            isActive
                                ? "block bg-green-50 text-blue px-4 py-2 rounded-lg font-semibold shadow"
                                : "block hover:bg-white px-4 py-2 rounded-lg transition duration-300"
                        }
                    >
                        ➕ Add Expense
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="expensecat"
                        className={({ isActive }) =>
                            isActive
                                ? "block bg-green-50 text-blue px-4 py-2 rounded-lg font-semibold shadow"
                                : "block hover:bg-white px-4 py-2 rounded-lg transition duration-300"
                        }
                    >
                        📊 Dashboard
                    </NavLink>
                </li>

            </ul>

        </div>
    );
};

export default SideBar;