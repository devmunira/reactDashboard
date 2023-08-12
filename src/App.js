import React , {Fragment} from 'react'
import { BrowserRouter , Route , Routes } from "react-router-dom"
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import './app.css'
import {Ecommerce , Calendar , ColorPicker , Customer , Editor , Employees , Kanban , Orders , Bar , Pie , Area , ColorMapping , Financial , Line , Pyramid , Stacked } from './pages/index';
import {Sidebar , Navbar , Footer} from "./components/index"
import { useGlobalContext } from './context/globalStateContextProvider';
import { Transition } from '@headlessui/react'

const App = () => {
  const {activeMenu , setActiveMenu} = useGlobalContext();
  return (
    <div className='bg-main-bg'>
      <BrowserRouter>
        <div className='relative flex bg-main-bg w-full'>
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                style={{background : 'blue'}}
                className="text-3xl text-white rounded-[50%] p-3 hover:drop-shadow-xl hover:bg-light-gray "
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>

            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Transition
                show={activeMenu}
                enter="transition ease-in-out duration-50000 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-50000 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Sidebar></Sidebar>
              </Transition>
            </div>
          
          
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Transition
                show={activeMenu}
                enter="transition ease-in-out duration-50000 transform"
                leaveFrom="-translate-x-full"
                leaveTo="translate-x-0"
                leave="transition ease-in-out duration-5000 transform"
                enterFrom="translate-x-0"
                enterTo="-translate-x-full"
              >
                <Sidebar></Sidebar>
              </Transition>
            </div>
          

          <div className={`min-h-screen w-full bg-main-bg bg-main-dark-bg ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
              <div className='flex-none fixed md:static navbar bg-main-bg dark:bg-main-dark-bg w-full'>
                <Navbar/>
                <button type='button' onClick={() => setActiveMenu(true)}>Click Me</button>
              </div>

              <div className='bg-main-bg grow'>
                <Routes>
                  <Route path='/' element={<Ecommerce></Ecommerce>}></Route>
                  <Route path='/ecommerce' element={<Ecommerce></Ecommerce>}></Route>
                  <Route path='/calenders' element={<Calendar></Calendar>}></Route>
                  <Route path='/colorpickers' element={<ColorPicker></ColorPicker>}></Route>
                  <Route path='/customers' element={<Customer></Customer>}></Route>
                  <Route path='/editors' element={<Editor></Editor>}></Route>
                  <Route path='/employees' element={<Employees></Employees>}></Route>
                  <Route path='/kanbans' element={<Kanban></Kanban>}></Route>
                  <Route path='/orders' element={<Orders></Orders>}></Route>
                  <Route path='/pie' element={<Pie></Pie>}></Route>
                  <Route path='/bar' element={<Bar></Bar>}></Route>
                  <Route path='/area' element={<Area></Area>}></Route>
                  <Route path='/color-mapping' element={<ColorMapping></ColorMapping>}></Route>
                  <Route path='/financial' element={<Financial></Financial>}></Route>
                  <Route path='/line' element={<Line></Line>}></Route>
                  <Route path='/pyramid' element={<Pyramid></Pyramid>}></Route>
                  <Route path='/stacked' element={<Stacked></Stacked>}></Route>
                </Routes>
              </div>

              <Footer></Footer>
          </div>
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App