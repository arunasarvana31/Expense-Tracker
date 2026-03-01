import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Expenseadd from './Pages/Expenseadd';
import Expensecategory from './Pages/Expensecategory';
import Private from './components/Private';
import Main from './components/Main';


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        },
      ]
    },
    {
      path: "/private",
      element: <Private />,
      children: [
    
        {
          path: "expenseadd",
          element: <Expenseadd />
        },
        {
          path: "expensecat",
          element: <Expensecategory />
        }
      ]
    }
      
    

    
  ]);

  return (
    <RouterProvider router={router} />
  )
};

export default App;