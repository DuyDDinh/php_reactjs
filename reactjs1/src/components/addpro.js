import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from '../http'

export default function AddProduct() {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.post('/products',inputs).then((res)=>{
            navigate('/product');
        })
        //console.log(inputs) 
    }
    return (
        <div>
           
       <div className="row justify-content-center pt-5 ">
                <div className="col-sm-4">
       <h2>Thêm sản phẩm </h2>

                    <div className="card p-4">
                        <label>Tên sản phẩm </label>
                        <input type="text" name="image" className="form-control mb-2"
                                value={inputs.image || ''}
                                onChange={handleChange}
                             />
                        <label>Mô tả </label>
                        <input type="text" name="link" className="form-control mb-2"
                            value={inputs.link || ''}
                            onChange={handleChange}
                        />
                        <label> Kích Hoạt </label>
                        <input type="text" name="userpass" className="form-control mb-2"
                            value={inputs.userpass || ''}
                            onChange={handleChange}
                             />
                        
                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
                    </div>
                </div>
            </div>
        </div>

    )
}