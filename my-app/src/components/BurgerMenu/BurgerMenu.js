import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {MenuOutlined,CloseOutlined} from '@ant-design/icons'
import { Menu } from 'antd'
import {HomeOutlined,BellOutlined,EyeOutlined,AppstoreOutlined,CloudUploadOutlined} from '@ant-design/icons'






import './BurgerMenu.css'

const { SubMenu } = Menu;

const BurgerMenu = () => {

    const [active,setActive] = useState(false)


    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className='header'>

     <div className='menu-icon'>
        <MenuOutlined className='menu'  onClick={showMenu}/>
     </div>
     <nav className={active ? 'slider active' :  'slider'}>
        <ul>

        <div className='closed'>
            <CloseOutlined className='close' onClick={showMenu}/>
        </div>
        <Menu
        
        style={{ 
            width: 300,
            backgroundColor:'#171717',
            color:'#ffffff',
            marginTop:'-30px'
             }}
        mode="inline"
        theme='dark'
        
      >
        
          <Menu.Item key="1" icon={<HomeOutlined className='burger-home'/>} >
            <Link to='/'>Overview</Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<BellOutlined/>} style={{marginTop:'30px'}}>
            <Link to='/notifications'>
                Notifications
            </Link>
          </Menu.Item>


          <SubMenu key="3" title="Contents" icon={<EyeOutlined/>} className='burger-contents' style={{marginTop:'10px'}}>
            <Menu.Item key="4">Filimo (Selection)</Menu.Item>
            <Menu.Item key="5">Filimo (Statistic)</Menu.Item>
            <Menu.Item key="6">TSCOBOX</Menu.Item>
        </SubMenu>

        <Menu.Item key="7" icon={<AppstoreOutlined/>} style={{marginTop:'-15px'}}>
            <Link to='/launchers'>
            Launchers
            </Link>
          </Menu.Item>

          <Menu.Item key="8" icon={<CloudUploadOutlined/>} style={{marginTop:'10px'}}>
            <Link to='/ota'>
            OTA Management
            </Link>
          </Menu.Item>

        
        <SubMenu key="9" title="Monitoring" className='burger-monitoring' icon={<EyeOutlined/>} style={{marginTop:'10px'}}>
          <Menu.Item key="10">Users</Menu.Item>
          <Menu.Item key="11">Servers</Menu.Item>
          <Menu.Item key="12">Products</Menu.Item>
        </SubMenu>
      </Menu>
        </ul>
     </nav>
    </div>
  )
}

export default BurgerMenu