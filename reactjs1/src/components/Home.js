import React, { useState ,  useEffect  } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'antd';
import http from "../http";
import AuthUser from './AuthUser';
import  "../App.css";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { height } from '@mui/system';
const { Meta } = Card;

const { Header, Sider, Content } = Layout;


const App = () => {
    const [users, setUsers] = useState([]);

useEffect(()=>{
    fetchAllUsers();
},[]);
const fetchAllUsers = () => {
    http.get('/users').then(res=>{
        setUsers(res.data);
    })
}
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"  />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'ALL INFOR',
            },
            
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
           <div>
           <div class="mt-4">
            <div class="row">
                   
            {users.map((user,index)=>(  
                 <div class="col-sm-4 col-lg-4 CARD">
                    <div class="card card-course-item">
                        <a href="">
                            <img class="card-img-top"src="https://ceramictilewarehouse.co.uk/wp-content/uploads/2019/09/8_avatar-512-1-460x460.png" alt="" />
                        </a>
                        <div class="card-body">
                            <a href="">
                                <h5 class="card-title">{user.name}</h5>
                            </a>
                            <p class="card-text">{user.email}</p>
                            <a href="#" class="btn btn-primary">Xem infor</a>
                        </div>
                    </div>
                </div>    ))}
               
            </div>
</div>
           </div>
         
        </Content>
      </Layout>
    </Layout>
    
  );
};
export default App;