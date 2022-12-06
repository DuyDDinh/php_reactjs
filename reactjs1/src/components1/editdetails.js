// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import http from '../http'

// export default function CreatePro() {
//     const navigate = useNavigate();
//     const [inputs,setInputs] = useState({});
//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values,[name]:value}))
//     }

//     const submitForm = () =>{
//         http.post('/products',inputs).then((res)=>{
//             navigate('/allproduct');
//         })
//         // console.log(inputs)
//     }
//     return (
//         <div>
           
//        <div className="row justify-content-center pt-5 ">
//                 <div className="col-sm-4">
//        <h3>Thêm Danh Mục</h3>

//                     <div className="card p-4">
//                         <label>Tên Danh Mục </label>
//                         <input type="text" name="name_pro" className="form-control mb-2"
//                                 value={inputs.name_pro || ''}
//                                 onChange={handleChange}
//                              />
//                         <label> Phân Loại </label>
//                         <input type="text" name="phanloai" className="form-control mb-2"
//                             value={inputs.phanloai || ''}
//                             onChange={handleChange}
//                         />
//                         <label> Mô Tả </label>
//                         <input type="text" name="mota" className="form-control mb-2"
//                             value={inputs.mota || ''}
//                             onChange={handleChange}
//                              />
//                         <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }
import { useEffect, useState } from "react";
import { useNavigate , useParams} from "react-router-dom";
import http from '../http'
import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {  message, Upload } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Editdetails = () => {
const [form] = Form.useForm();
const navigate = useNavigate();
const [oneProduct , setOneProduct] = useState([]);
let {id_pro} =useParams();


const [inputs,setInputs] = useState({});
const [dataone,setDataOne] = useState({});

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,[name]:value}))
}
const fetchOne = ()=>{
    http.get('/products/'+id_pro+'/edit').then(res=>{
      console.log(res.data)
      form.setFieldsValue(res.data)
      setDataOne(res.data);
    }
      
        
    )
}
useEffect(()=>{
    fetchOne();
},[])
  const onFinish = (values) => {
    console.log(values);
    http.post('/products',values).then((res)=>{
        
        navigate('/allproduct');
    })
    setInputs(values) ;
  }
  return (
    <Form {...layout}  form={form}  dataSource={dataone}  name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    <h2>Edit Product </h2>
      <Form.Item
        name="name_pro" 
        label="Name"
        rules={[
            {
              required: true,
            },
          ]}
          >
        <Input />
      </Form.Item>
      <Form.Item
        name="phanloai"
        label="Phân Loại"
        rules={[
            {
              required: true,
            },
          ]}
        
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='mota'
        label="Mô Tả"
       
      >
        <Input />
      </Form.Item>
          
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
       

        <Button type="primary"  htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form >
  );
};
export default Editdetails;
