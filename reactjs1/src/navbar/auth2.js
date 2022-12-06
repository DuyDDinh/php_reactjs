import React, { useState } from 'react';
import { Routes, Route, Link , useNavigate, Navigate } from 'react-router-dom';
import AuthUser from '../components/AuthUser';
import Dashboard from '../components1/dashboard2';
import CreatePro from '../components1/createpro';
import CreateDetails from '../components1/createdetails';
import AllProduct from '../components1/allproduct22';
import Editdetails from '../components1/editdetails';


import Register from '../components/Register';

import AllProductdetails from '../components1/allproductdetails';





import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Dashboard', '/dashboard', <PieChartOutlined />),
  getItem('Add User', '/register', <DesktopOutlined />),
  getItem('Product', 'sub1', <UserOutlined />, [
    //getItem('Create Product', '/createpro'),
   // getItem('Create Details Product', '/CreateDetails'),
    getItem('Allproducts', '/allproduct'),
    getItem('Allproductsdetails', '/allproductdetails'),

  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Logout', '9',),
];
const Auth = () => {
const [collapsed, setCollapsed] = useState(false);
const navigate = useNavigate();
 const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }
  return (
    
 
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider   collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu  onClick={({key})=>{
         navigate(key);
       }}  theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}  />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            
           <ContentRender />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED 
        </Footer>
      </Layout>
      <>
      <div>
            <nav className="navbar navbar-expand-sm navbar- ">
                            <ul className="navbar-nav">
                            
                                <li className="nav-item logout">
                                    <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                                </li>
                            </ul>
                        </nav>
                        <div>
                        </div>
        </div>
      </>
    </Layout>
  
  );
};
function ContentRender( ){
   
    return (
      <div>
      <Routes>
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/createpro" element={<CreatePro />} />
     <Route path="/CreateDetails" element={<CreateDetails />} />
     <Route path="/allproduct" element={<AllProduct />} />
     <Route path="/allproductdetails" element={<AllProductdetails />} />
     <Route path="/register" element={<Register />} />
     <Route path="/editdetails/:id_pro" element={<Editdetails />} />
     <Route path="/editdetails/" element={<Editdetails />} />




     </Routes>
      </div>
    )
}
export default Auth;