import { useState,useEffect } from "react";
import http from "../http"
import { Link } from "react-router-dom";
export default function Render() {
    const [users, setUsers] = useState([]);
    var someValue = window.sessionStorage.getItem('user');
    var obj = JSON.parse(someValue); 
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
    const Tsoken=obj.phanquyen;
    
    if(Tsoken !== "1" ){
        return (
            <div>

         <h2>dit me</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno.</th>
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
        </div>
        );
      }
    
    return (
        <div>

        
           
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phân Quyền</th>
                        <th>Action</th>
                        
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
                                     user.phanquyen == 0 ? <> <button type="button" className="btn"><Link className="btn btn-secondary" to={{  }}>Customer</Link>&nbsp; </button> </> : <></>
                                 }
                                  {
                                     user.phanquyen == 1 ? <> <button type="button" className="btn"><Link className="btn btn-primary" to={{ }}>Admin</Link>&nbsp; </button> </> : <></>
                                 }
                                
                            </td>
                           
                        
                            <td>
                                <button type="button" className="btn"><Link className="btn btn-light" to={{ pathname: "/edit/" + user.id }}>Edit</Link>&nbsp; </button> 
                              
                            </td>
                            <td id="btn_sss">
                                
                          
                            <button  type="button" className="btn btn-light"
                                onClick={()=>{deleteUser(user.id)}}
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}