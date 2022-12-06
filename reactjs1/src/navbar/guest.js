import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Main from '../components/Main';
import "antd/dist/antd.css" ;


import {Table} from 'antd'

function Guest() {
    return (
        <>

            <nav className="navbar navbar-expand-sm navbar bg-white">
                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    
                </ul>
            </nav>
            
            
            <div >
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/createPro" element={<Login />} />

                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
            <div className="App" >
            </div>
        </>
    );
}

export default Guest;