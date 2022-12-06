// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import http from '../http'
// import AuthUser from '../components/AuthUser';
// import React from 'react';


// export default function Edit(props) {
//     var someValue = window.sessionStorage.getItem('user');
//     var obj = JSON.parse(someValue); 
//     const navigate = useNavigate();
//     const Tsoken=obj.phanquyen;

//   const {getToken} = AuthUser();
//     const [inputs,setInputs] = useState({});
//     const {id} = useParams();

//     useEffect(()=>{
//         fetchUser()
//     },[]);

//     const fetchUser= () =>{
//         http.get('/users/'+id+'/edit').then((res)=>{
//             setInputs({
//                 name:res.data.name,
//                 email:res.data.email,
//                 password:res.data.password,
//                 phanquyen:res.data.phanquyen,
//             });
//         });
//     }

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values,[name]:value}))
//     }

//     const submitForm = () =>{
//         http.put('/users/'+id,inputs).then((res)=>{
//             navigate('/');
//         })
//     }
//     const oldpass =inputs.password ;
//     return (
//        <div className="row justify-content-center pt-5 ">
//              <h2>Edit User</h2>
//             <div className="">
//                 <div className="col-sm-4">
//                     <div className="card p-4">
//                         <label>Name</label>
//                         <input type="text" name="name" className="form-control mb-2"
//                                 value={inputs.name || ''}
//                                 onChange={handleChange}
//                              />
//                              <label>Email</label>
//                         <input type="email" name="email" className="form-control mb-2"
//                             value={inputs.email || ''}
//                             onChange={handleChange} disabled
//                         /> 
//                         { <label>Password</label> }
//                          <input type="password" name="password2" className="form-control mb-2"
//                                 value={oldpass}
                                
//                              /> 
//                           { <label>New Password</label> }
//                          <input type="password" name="password1" className="form-control mb-2"
                               
//                              /> 
//                           { <label>Retype New Password</label> }
//                          <input type="password" name="password" className="form-control mb-2"
                                
//                                 onChange={handleChange}
//                              /> 
                     
                        
//                          <label>Cấp quyền</label>
                            
//                             <select className="form-select" type="" name="phanquyen"  value={inputs.phanquyen || ''} id="inputGroupSelect01" onChange={handleChange} >
//                                 <option value="1">Admin</option>
//                                 <option value="0">User</option>
//                             </select>
                                            
                    
//                         <button type="submit" onClick={submitForm} className="btn btn-info mt-2">Update</button>
//                     </div>
//                 </div>
//             </div>
           
//         </div>

//     )
    
   
         
       
// }


import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'
import AuthUser from '../components/AuthUser';

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
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const Edit = () => {
    var someValue = window.sessionStorage.getItem('user');
    var obj = JSON.parse(someValue); 
    const navigate = useNavigate();
    const Tsoken=obj.phanquyen;

  const {getToken} = AuthUser();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
        http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email,
                password:res.data.password,
                phanquyen:res.data.phanquyen,
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.put('/users/'+id,inputs).then((res)=>{
            navigate('/dashboard');
        })
    }
    const oldpass =inputs.password ;
  const [collapsed, setCollapsed] = useState(false);
  return (
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
           
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h2> Sửa Thông Tin</h2>
             <div className="">
                <div className="col-sm-4">
                    <div className="card p-4">
                        <label>Name</label>
                         <input type="text" name="name" className="form-control mb-2"
                                value={inputs.name || ''}
                                onChange={handleChange}
                             />
                             <label>Email</label>
                        <input type="email" name="email" className="form-control mb-2"
                            value={inputs.email || ''}
                            onChange={handleChange} disabled
                        /> 
                        { <label>Password</label> }
                         <input type="password" name="password2" className="form-control mb-2"
                                value={oldpass}
                                
                             /> 
                          { <label>New Password</label> }
                         <input type="password" name="password1" className="form-control mb-2"
                               
                             /> 
                          { <label>Retype New Password</label> }
                         <input type="password" name="password" className="form-control mb-2"
                                
                                onChange={handleChange}
                             /> 
                     
                        
                         <label>Cấp quyền</label>
                            
                            <select className="form-select" type="" name="phanquyen"  value={inputs.phanquyen || ''} id="inputGroupSelect01" onChange={handleChange} >
                                <option value="1">Admin</option>
                                <option value="0">User</option>
                            </select>
                                            
                    
                        <button type="submit" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
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
  );
};
export default Edit;