import { Outlet } from "react-router";
import SideBar from "./Sidebar";


const Private = () =>{
  return (
      
          <div className="flex min-h-screen bg-gray-100">
           <SideBar />
          
              <div className="flex-1 p-8 overflow-y-auto">
                  <Outlet />
              
           </div>
          </div>
    
  )
}

export default Private;