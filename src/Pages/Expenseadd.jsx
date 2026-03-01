import React from "react"
import { useState } from "react"
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router";


const Expenseadd = () => {

    const [Expense, setExpense] = useState(() => {
        const savedData = localStorage.getItem("Expense");
        return savedData ? JSON.parse(savedData) : [];
    });



    const [ExpenseDetails, setExpenseDetails] = useState({
        id: uuidv4(),
        date: "",
        category: "",
        amount: "",
        note: ""

    });

    const [edit, setEdit] = useState(false);

    useEffect(() => {
        console.log("Expense Added:", Expense);
        localStorage.setItem("Expense", JSON.stringify(Expense));
    }, [Expense]);


    const handleChange = (e) => {
        const { name, value } = e.target
        setExpenseDetails((currDetails) => {
            return {
                ...currDetails, [name]: value
            }
        })
    };

    const AddExpense = (e) => {
        e.preventDefault();
        if (edit) {
            setExpense((currExpense) =>
                currExpense.map((item) =>
                    item.id === ExpenseDetails.id ? ExpenseDetails : item));
            setEdit(false);
        
        }
        else {
            setExpense((currExpense) => [...currExpense, ExpenseDetails]);
        }
        
        setExpenseDetails({
            id: uuidv4(),
            date: "",
            category: "",
            amount: "",
            note: ""

        })
    };


    const deleteExpense = (id) => {
        setExpense((currExpense) => {
            return currExpense.filter((Expense) => {
                return Expense.id !== id;
            })
        })
    };

    const editExpense = (expenseData) => {
        setExpenseDetails(expenseData);
        setEdit(true);
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                <div className="bg-teal-50 shadow-lg rounded-2xl p-4 sm:p-6 lg:p-8 w-full">
                    <h2 className="text-xl font-bold text-blue-600 mb-4 text-center">EXPENSE ADD HERE</h2>
                    <form className="space-y-4">
                        
                            <input
                                type="date" placeholder="select the date"
                            className="w-full p-2 border rounded-lg px-4 py-2 focus:ring-2 border-blue-400  focus:ring-blue-400 outline-none"
                                value={ExpenseDetails.date} name="date"
                                onChange={handleChange}
                            />

                            <br />

                            <select value={ExpenseDetails.category} name="category"
                            className="w-full p-2 border rounded-lg px-4 py-2 focus:ring-2 border-blue-400  focus:ring-blue-400 outline-none"
                                onChange={handleChange}>
                                <option>Select Category</option>
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

                            <br />

                            <input
                                type="number" placeholder="Enter Amount"
                            className="w-full p-2 border rounded-lg px-4 py-2 focus:ring-2 border-blue-400  focus:ring-blue-400 outline-none"
                                value={ExpenseDetails.amount} name="amount"
                                onChange={handleChange}
                            />

                            <br />

                               <textarea placeholder="notes..."
                            className="w-full p-2 border rounded-lg px-4 py-2 focus:ring-2 border-blue-400  focus:ring-blue-400 outline-none"
                                value={ExpenseDetails.note} name="note"
                                onChange={handleChange}></textarea>

                            <br />

                        <div className="flex justify-center">
                            
                            <button onClick={AddExpense}
                                className={`h-12 w-42 bg-linear-to-r from-blue-950 to-blue-700
                         text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full 
                         shadow-lg shadow-blue-900/60 hover:scale-105 
                         transition-all duration-300 ${edit? "bg-linear-to-r from-rose-700 to-rose-500 shadow-green-900/60" 
                           : "bg-linear-to-r from-blue-950 to-blue-700 shadow-blue-900/60"
                              }`} >
                                {edit ? "Update" : "Add Expense"}</button>
                            
                        </div>
                        
                        <div className="flex justify-center">
                            <Link to="/private/expensecat">
                                <button className="w-full bg-linear-to-r from-green-800 to-green-500 
                         text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full 
                         shadow-lg shadow-green-900/60 hover:scale-105 
                         transition-all duration-300 " >
                                    View Summary</button>
                            </Link>
                        </div>


                    </form>

                </div>
                <div className="bg-teal-50 shadow-lg rounded-2xl p-4 sm:p-6 overflow-x-auto"> 
                    <h2 className="text-xl font-bold text-blue-600 mb-4 text-center">EXPENSE LIST</h2>
                     
                    <table className="text-left border-collapse">
                        <thead className="bg-blue-500 text-white">
                            <tr className="bg-blue-100 text-gray-700">
                                <th className="p-3">Date</th>
                                <th className="p-1">Category</th>
                                <th className="p-2">Amount</th>
                                <th className="p-3"> Description</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Expense.slice().reverse().map((Expense, index) => {

                                    return (
                                        <tr className="border-b hover:bg-gray-50" key={Expense.id} >
                                            <td className="px-4 py-2 whitespace-nowrap">{Expense.date}</td>
                                            <td className="p-2">{Expense.category}</td>
                                            <td className="p-2 text-green-500 font-semibold">$ {Expense.amount}</td>
                                            <td className="p-2">{Expense.note}</td>
                                            <td className="px-4 py-2">
                                                <div className="flex gap-4">
                                                    <button className="text-blue-500 hover:underline"
                                                      onClick={() => editExpense(Expense)}>
                                                        Change
                                                    </button>
                                                    <button
                                                        onClick={() => deleteExpense(Expense.id)}
                                                        className="text-red-500 hover:underline">
                                                        Remove
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                        </table>
                        
                </div>

                
            </div>
        </div>
    )
};

export default Expenseadd;