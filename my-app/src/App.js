import React from 'react';
import { Route, Routes } from 'react-router-dom';



import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';
import Home from './pages/Home/Home';
import Notifications from './pages/Notifications/Notifications';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';



function App() {
  return (
    <div className="App">

    <nav>
      <Navbar/>
    </nav>

    <div>
     <BreadCrumb/>
     </div>

    <aside>
      <SideMenu/>
    </aside>

    <div className='main'>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='notifications' element={<Notifications/>}/>
      </Routes>
      </div>
    
    </div>
  );
}

export default App;
