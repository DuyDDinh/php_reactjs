import { Routes, Route, Link , useNavigate } from 'react-router-dom';
import Home from '../components/Home';
import Product from '../components/product';
import ListProduct from '../components/product';
import AddProduct from '../components/addpro';
import NewProduct from '../components/createpro';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/AuthUser';
import Edit from '../components/edit.js';
import '../App.css'
import "antd/dist/antd.css" ;
import {Menu} from "antd";

function Auth() {
    const navigate = useNavigate() ;

    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/product">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/creproduct">Thêm Danh Mục</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/creproduct">All Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/themsanpham">Thêm Sản Phẩm</Link>
                                </li>
                                <li className="nav-item logout">
                                    <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                                </li>
                            </ul>
                        </nav>
                        
                        <div>
                              <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/edit/:id" element={<Edit />} />
                                <Route path="/edit" element={<Edit />} />
                                <Route path="/product" element={<Product/>} />
                                <Route path="/allproduct" element={<ListProduct/>} />
                                <Route path="/themsanpham" element={<AddProduct/>} />
                                <Route path="/creproduct" element={<NewProduct/>} />



                            </Routes>
                           
                        </div>

                        
                
                    
        </div>
          
    );
}

            
export default Auth;