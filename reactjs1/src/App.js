import "bootstrap/dist/css/bootstrap.min.css";
import AuthUser from './components/AuthUser';
import Guest from './navbar/guest';
import Auth from './navbar/auth2';
import Product from './components/product';
import { Breadcrumb, Layout, Menu, Slider } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { DatePicker } from 'antd';
const { Header, Content, Footer } = Layout;
function App() {
  const {getToken} = AuthUser();
  if(!getToken()){
    return (
      <Guest />
      
    );
  }
  return (
      <Auth />
  );
}

export default App;