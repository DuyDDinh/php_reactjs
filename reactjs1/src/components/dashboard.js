import  "../App.css";
import { Table } from "antd";
import { Routes, Route, Link , useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import AuthUser from './AuthUser';
import http from "../http";

import { useState, useEffect } from "react";
import axios from "axios";
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
  getItem('Option 2', '/createProDuct', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
function App() {
  
  const navigate = useNavigate()
 
  const [dataSource, setDataSource] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);



  const [collapsed, setCollapsed] = useState(false);
  const [users, setUsers] = useState([]);
  var someValue = window.sessionStorage.getItem('user');
  var obj = JSON.parse(someValue); 
   const Tsoken=obj.phanquyen;
    const {getToken} = AuthUser();
    useEffect(()=>{
        fetchAllUsers();
    },[]);
    const fetchAllUsers = () => {
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }


    const deleteUser = (id) => {
        http.delete('/users/'+id).then(res=>{
            fetchAllUsers();
        })
    }
  
  if (Tsoken !== "0"){
    return (

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          Admin
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
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
            
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
            <h2> Admin</h2>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Quyền</th>
                        <th>Edit</th>
                        <th>Delete</th>

                       
                    </tr>
                </thead>
                <tbody> 
                    {users.map((user,index)=>(
                        <tr key={user.id}>
                             <td>{user.id}</td>
                             <td>{user.name}</td>
                             <td>{user.email}</td>

                            
                             <td>
                                 {
                                     user.phanquyen == 0 ? <> <p type="" className=""><Link className="" to={{  }}>User</Link>&nbsp; </p> </> : <></>
                                 }
                                  {
                                     user.phanquyen == 1 ? <> <p type="" className=""><Link className="" to={{ }}>Admin</Link>&nbsp; </p> </> : <></>
                                 }
                                
                            </td>
                           
                        
                            <td>
                                <Link className="" to={{ pathname: "/edit/" + user.id }}>Edit</Link>&nbsp;
                            </td>
                            <td >
                            <button  type="button" className="btn btn-danger"
                                onClick={()=>{deleteUser(user.id)}}
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
  
          
          </div>
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
      </Layout>
        
       
      </div>
    );
  }
  return (
    
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
     <Layout
    style={{
      minHeight: '100vh',
    }}
  >
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
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
          User
        <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        
                    </tr>
                </thead>
                <tbody> 
                    {users.map((user,index)=>(
                        <tr key={user.id}>
                             <td>{user.id}</td>
                             <td>{user.name}</td>
                             <td>{user.email}</td>

                            
                        </tr>
                    ))}
                </tbody>
            </table>
        <div>

      
      </div>
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
  </Layout>
    
   
  </div>

  )
}
export default App;