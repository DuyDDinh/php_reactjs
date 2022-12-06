import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from '../http'

export default function NewProduct() {
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
        // console.log(inputs)
    }
    return (
        <div>
           
       <div className="row justify-content-center pt-5 ">
                <div className="col-sm-4">
       <h2>New Product</h2>

                    <div className="card p-4">
                        <label>Thêm Danh Mục </label>
                        <input type="text" name="name_pro" className="form-control mb-2"
                                value={inputs.name_pro || ''}
                                onChange={handleChange}
                             />
                        <label>Mô tả </label>
                        <input type="text" name="phanloai" className="form-control mb-2"
                            value={inputs.phanloai || ''}
                            onChange={handleChange}
                        />
                        <label> Kích Hoạt </label>
                        <input type="text" name="mota" className="form-control mb-2"
                            value={inputs.mota || ''}
                            onChange={handleChange}
                             />
                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
                    </div>
                </div>
            </div>
        </div>

    )
}