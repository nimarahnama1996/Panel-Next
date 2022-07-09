import React from 'react'
import {PoweroffOutlined,SearchOutlined,MenuOutlined,BellOutlined,SettingOutlined,MessageOutlined } from '@ant-design/icons'
import { Input} from 'antd';


import './Navbar.css'
import user from '../../img/profile.png'
import logo from '../../img/logomenu.PNG'


const Navbar = () => {
  return (
    <nav style={{backgroundColor:'#171717'}}>
        <div className='nav-icons'>
        <Input size="small" className='nav-input' placeholder="Search Dashboard" prefix={<SearchOutlined />} />
        <MenuOutlined className='nav-menu-icon' style={{marginTop:'20px',cursor:'pointer'}}/>
        <img src={user} alt='user'/>
        <SearchOutlined className='nav-search-icon'/>
        <MessageOutlined className='nav-message-icon' style={{marginTop:'20px',cursor:'pointer'}}/> 
        <SettingOutlined className='nav-setting-icon' style={{marginTop:'20px',cursor:'pointer'}} />
        <BellOutlined className='nav-bell-icon' style={{marginTop:'20px',cursor:'pointer'}}/>
        <PoweroffOutlined className='nav-power-icon' /> 
        
        </div>
        <img src={logo} alt='logo' className='nav-logo' style={{width:'250px',marginLeft:'-250px' ,marginTop:'-20px'}}/>
    </nav>
  )
}

export default Navbar