import React from 'react'
import { BrowserRouter , Route , Routes } from "react-router-dom"
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import './app.css'
import {Ecommerce , Calendar , ColorPicker , Customer , Editor , Employees , Kanban , Orders , Bar , Pie , Area , ColorMapping , Financial , Line , Pyramid , Stacked } from './pages/index';

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className='relative flex dark:bg-main-dark-bg'>
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                style={{background : 'blue'}}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray "
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              SideBar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              SideBar
            </div>
          )}

          <div className={`min-h-screen w-full bg-main-bg bg-main-dark-bg ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
              <div className='fixed md:static navbar bg-main-bg dark:bg-main-dark-bg w-full'>
                navbar
              </div>

              <div>
                <Routes>
                  <Route path='/' element={<Ecommerce></Ecommerce>}></Route>
                </Routes>
              </div>

              <div>
                footer
              </div>
          </div>
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App