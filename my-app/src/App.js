import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout ,Breadcrumb} from 'antd';


import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';
import Home from './pages/Home/Home';
import Notifications from './pages/Notifications/Notifications';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';



const { Header, Content, Footer, Sider } = Layout;



function App() {

  return(
    <Layout
    style={{
      backgroundColor:'#171717',
      minHeight: '100vh',
    }}
  >

    <Sider style={{
      backgroundColor:'#171717',
      height:'1px'
    }}>
      <div className="side-menu" />
      <SideMenu />
    </Sider>


    <Layout className="site-layout" style={{
      backgroundColor:'#171717',
    }}>
      <Header className="site-layout-background" style={{
      backgroundColor:'#171717',
    }}>
      <Navbar/>
      </Header>


      <Content >
        <Breadcrumb>
          <BreadCrumb/>
        </Breadcrumb>
        <div style={{
            backgroundColor:'#171717'}}>
        <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='notifications' element={<Notifications/>}/>
      </Routes>
        </div>
      </Content>

     <Footer
          style={{
            backgroundColor:'#171717',
            color:'white',
            padding:'0 0' 
          }}
        >
         Dashboard for monitoring by Next
        </Footer>

    </Layout>
  </Layout>
  )
  
  
}

export default App;
