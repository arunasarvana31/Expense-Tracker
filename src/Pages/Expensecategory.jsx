import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const Expensecategory = () => {

  const [expense, setExpense] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("All");
  const [rangeValue, setRangeValue] = useState(100000);
  const [sortType, setSortType] = useState("recent");
  const [search, setSearch] = useState("");



  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("Expense")) || [];
    setExpense(savedData);
  }, []);


  useEffect(() => {
    console.log("Updated Expense:", expense);
  }, [expense]);

  const filterBySearch = (data) => {
    return data.filter((item) =>
      item.category.toLowerCase().includes(search.toLocaleLowerCase()) ||
      item.note.toLowerCase().includes(search.toLocaleLowerCase()));
  }


  const filterByDate = (data) => {
    const today = new Date();

    if (dateFilter === "Day") {
      return data.filter((item) =>
        new Date(item.date).toDateString() === today.toDateString()
      );
    }

    if (dateFilter === "Month") {
      return data.filter((item) =>
        new Date(item.date).getMonth() === today.getMonth() &&
        new Date(item.date).getFullYear() === today.getFullYear()
      );
    }

    if (dateFilter === "Year") {
      return data.filter((item) =>
        new Date(item.date).getFullYear() === today.getFullYear()
      );
    }

    return data;

  };


  const filterByCategory = (data) => {
    if (categoryFilter === "All")
      return data;
    return data.filter((item) => item.category === categoryFilter);

  };

  const filterByAmount = (data) => {
    return data.filter((item) => Number(item.amount) <= rangeValue);
  };

  const sortData = (data) => {

    if (sortType === "recent") {
      return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    if (sortType === "highest") {
      return [...data].sort((a, b) => Number(b.amount) - Number(a.amount));
    }
    return data;
  }

  const filteredData = sortData(filterBySearch(filterByAmount(filterByDate(filterByCategory(expense)))));

  const totalAmount = filteredData.reduce((acc, curr) => {
    return acc + Number(curr.amount);
  }, 0);

  const chartData = filteredData.map((item) => ({
    name: item.category,
    amount: Number(item.amount)
  }));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-teal-50 shadow-lg rounded-2xl p-6 mb-6 w-90 mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-600"> {categoryFilter === "All" ? "  💸 Total Expenses" : `${categoryFilter} Total`}</h2>
        <p className="text-3xl font-semibold text-red-500 mt-2">${totalAmount}</p>
      </div>
      <div className="bg-teal-50 shadow-md rounded-2xl p-4 mb-6 
        flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <input type="text"
            placeholder="search"
            className="px-4 py-2 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
            value={filterBySearch}
            onChange={(e) => setSearch(e.target.value)}

          />

          <select
            className="px-7 py-2  gap-2 rounded-lg border border-blue-400 focus:ring-2 focus:ring-blue-300"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="All">All Category</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>E-Fees</option>
            <option>Rent</option>
            <option>Medical</option>
            <option>Grocery</option>
            <option>Others</option>
          </select>
          <select
            className="px-6 py-2 rounded-lg gap-3 border border-blue-400 focus:ring-2 focus:ring-blue-300"

            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Day">Today</option>
            <option value="Month">This Month</option>
            <option value="Year">This Year</option>
          </select>
        </div>
        <div className="flex flex-col w-full md:w-1/3">
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={rangeValue}
            onChange={(e) => setRangeValue(Number(e.target.value))}
          />
          <p className="text-sm text-gray-600 mt-1">Selected Limit : ${rangeValue}</p>
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              value="recent"
              checked={sortType === "recent"}
              onChange={(e) => setSortType(e.target.value)}
            />
            Recent
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              value="highest"
              checked={sortType === "highest"}
              onChange={(e) => setSortType(e.target.value)}
            />
            Highest
          </label>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 w-full px-4">

        
        <div className="bg-teal-50 shadow-md rounded-2xl w-full lg:w-2/3 p-6">

          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-blue-100 text-blue-700">
                  <th className="p-3">Date</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Note</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{item.date}</td>
                      <td className="p-3">{item.category}</td>
                      <td className="p-3 text-green-600 font-semibold">
                        ${item.amount}
                      </td>
                      <td className="p-3">{item.note}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center p-4 text-gray-500">
                      No Data Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          
          <div className="mt-4 font-semibold text-right text-blue-600">
            Total Amount :
            <span className="text-red-500 ml-2">${totalAmount}</span>
          </div>
        </div>

        
        <div className="bg-teal-50 shadow-md rounded-2xl p-4 w-full lg:w-1/3 h-[300px] md:h-[400px]">
          <h2 className="text-xl text-blue-700 font-semibold text-center mb-4">
            Expense Bar Chart
          </h2>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}
export default Expensecategory;