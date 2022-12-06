import Axios from "axios";
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

const CreateDetails = () => {
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
const [imagedata, setImagedata] = useState({});

  const handleChangeimage = (file) =>{
    setImagedata(file[0]);

    };
const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,[name]:value}))
}
const onFinishimage = () => {
  let formDaTa = new FormData;
  formDaTa.append("image",imagedata);
  console.log(imagedata.name)
    Axios.post("http://localhost:8000/api/upload",formDaTa)
  .then(res => {
    console.log(formDaTa)
  })
}
  const onFinish = (values) => {
    let formDaTa = new FormData;
    formDaTa.append("link",values.link);
    formDaTa.append("userpass",values.link);
    formDaTa.append("product_id",values.link);
    formDaTa.append("image",imagedata);
    console.log(imagedata.name)

    console.log(values);
    Axios.post("http://localhost:8000/api/productdetails",formDaTa)
    .then(res => {

      console.log(formDaTa)
      navigate('/allproductdetails');
    })
    // http.post('/productdetails',formDaTa).then((res)=>{
    //     navigate('/CreateDetails');
    // })
  
  }
  return (
    <Form {...layout}  form={form}  name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    <h2>Thêm Product     </h2>

    <Form.Item
        name="link" 
        label="Link"
        rules={[
            {
              required: true,
            },
          ]}
          >
        <Input />
      </Form.Item>
      <Form.Item
        name="userpass" 
        label="userpass"
        rules={[
            {
              required: true,
            },
          ]}
          >
        <Input />
      </Form.Item>
      <Form.Item
        name="product_id"
        label="Pro ID"
        rules={[
            {
              required: true,
            },
          ]}
        
      >
        <Input />
      </Form.Item>
      <Form.Item
      name="image"
      label="Image">
          <Input type="file" name="image" onChange={e =>handleChangeimage(e.target.files)} id="image" />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Upload {...props}>
  </Upload>

        <Button type="primary"  htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CreateDetails;
