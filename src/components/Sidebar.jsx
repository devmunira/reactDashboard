import React from 'react'
import {AiOutlineDashboard} from "react-icons/ai"
import {VscEyeClosed} from "react-icons/vsc"
import { NavLink , Link} from 'react-router-dom';
import {links} from "./../data/dummy.js"
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { activeLink , normalLink } from './../constant/data';
import {useGlobalContext} from "./../context/globalStateContextProvider.js"

const Sidebar = () => {
  const {activeMenu , setActiveMenu } = useGlobalContext();

  return (
    <div className="ml-2 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10">

        {
          activeMenu && 
          <>
            <div className="flex justify-between items-center pt-4 pb-10">
              {/* Dashboard Logo */}
                <Link 
                to='/'
                onClick={()=>setActiveMenu(false)}
                className="flex justify-center items-center gap-2 text-xl font-bold text-gray-900 dark:text-gray-200 tracking-tight"
                >
                  <AiOutlineDashboard
                  className="text-2xl"
                  ></AiOutlineDashboard>
                  <span>Dashboard..</span>
                </Link>

                {/* Close Button */}
                <TooltipComponent position="BottomCenter" content="Close">
                    <button
                    type="button"
                    className="text-xl mr-2 text-gray-600 hover:bg-gray-100 rounded-full p-3"
                    onClick={() => setActiveMenu(!activeMenu)}
                    >
                      <VscEyeClosed></VscEyeClosed>
                    </button>
                </TooltipComponent>
            </div>
            {/* Menu Items */}
            <div>
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase text-14">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? 'blue' : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
            </div>
          </>
        }
    </div>
  )
}

export default Sidebar