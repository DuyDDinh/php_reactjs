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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const CreatePro = () => {
const [form] = Form.useForm();
const navigate = useNavigate();
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const [inputs,setInputs] = useState({});
const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,[name]:value}))
}

  const onFinish = (values) => {
    console.log(values);
    http.post('/products',values).then((res)=>{
        navigate('/allproduct');
    })
    setInputs(values) ;
  }
  return (
    <Form {...layout}  form={form}  name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    <h2>Thêm Product     </h2>

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
        <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
        <Button type="primary"  htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CreatePro;
