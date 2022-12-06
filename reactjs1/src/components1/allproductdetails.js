import React, { useState , useEffect  } from 'react';
import { Button, Table, Space, Spin, Image} from 'antd';
import { Alert } from 'antd';

import { Pagination } from 'antd';
import AuthUser from '../components/AuthUser';
import http from "../http";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';
import { Col, DatePicker, Drawer, Form, Input, Row, Select } from 'antd';
const { Option } = Select;
const initPagination = {
  current: 1,
  defaultCurrent: 1,
  total: 5,
  defaultPageSize: 4,
  showSizeChanger: false
}
var someValue = window.sessionStorage.getItem('user');
var obj = JSON.parse(someValue); 

const AllProductdetails = () => {
const navigate = useNavigate();  

const [loading2 , setLoading2] = useState(false)
const [open, setOpen] = useState(false);
const showDrawer = () => {
  setOpen(true);
};
const onClose = () => {
  setOpen(false);
};
const [form] = Form.useForm();
  const [current, seturlPage] = useState([]);
  const [product22, setProduct] = useState([]);
  const [users, setUsers] = useState([]);

  const [pagination, setPaginate2] = useState(initPagination);
  const sumbitXem = (id_pro) =>{
    console.log(id_pro)
    form.setFieldsValue(id_pro)

    showDrawer();
    
  }
  //lấy id trên params
 
  
  const handletablechange2 = (pagination) => {

    console.log(pagination.current);
    let p = {
      current: pagination.current,
      defaultCurrent: 1,
      total: 7,
      defaultPageSize: 4,
      showSizeChanger: false
    };
    setPaginate2({...p})
    fetchAllProdetails(pagination.current);
  };
  const editdetails = (id_prodetail) =>{
    console.log("edit",id_prodetail.id_prodetail)
    http.delete(' ')
  }
  const deleteProduct = (id_prodetail) => {
    console.log(id_prodetail.id_prodetail)
    http.delete('/productdetails/'+id_prodetail).then(res=>{
        fetchAllProdetails();
      
    })
  }

  const columns2 = [
    {
      title: 'Image',
      dataIndex: 'image',
    },
    {
      title: 'Phân Loại',
      dataIndex: 'link',
  
    },
    {
      title: 'Mô tả',
      dataIndex: 'userpass',
    },
    
  ];
  const columns1 = [
    {
      title: 'Image ',
      dataIndex: 'image',
      render: (_, record) => {
        return (
          <Image src={"http://localhost/laravel/react-js-auth/larvamoi/public/images/"+record.image} width="50px" height={50}/>
        );
      }

    },
    {
      title: 'Phân Loại',
      dataIndex: 'link',
  
    },
    {
      title: 'Mô tả',
      dataIndex: 'userpass',
    },
    {
      title: 'Action',
      key: 'action',
      render: (id_pro, record) => (
        <Space size="middle">
          <a onClick={()=>{editdetails(id_pro)}}>Edit</a>
          <a onClick={()=>{deleteProduct(id_pro)}} >Delete</a>
        </Space>
      ),
    },
  ];


  // bắt đầu phân trang

  
  useEffect(()=>{
    fetchAllProdetails();
  },[]);
  // end phân trang

  const fetchAllProdetails = (current) => {
    setLoading2(true)
    http.get('/productdetails'+'?page='+current).then(res=>{
        console.log(res.data.map(items =>{
          console.log(items.image)
          // items.image = "http://localhost/laravel/react-js-auth/larvamoi/public/images/"+ items.image

        }))
        setProduct(res.data);
      setLoading2(false)

    })
}

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const start = () => {
  
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
        <div
          style={{
            marginBottom: 16,
          }}
        >
         
          <span
            style={{
              marginLeft: 8,
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Drawer
          title="INFORMATION"
          width={720}
          onClose={onClose}
          open={open}
          bodyStyle={{
            paddingBottom: 80,
          }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </Space>
          }
        >
          <Form form={form} layout="vertical" hideRequiredMark>
          <Image
              width={150}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU"
            />
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="image"
                  label="Hinh Anh"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter user name',
                    },
                  ]}
                >

               <Image
               width={200}
               src=""
               
               
               />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phanloai"
                  label="Phân Loại"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter user name',
                    },
                  ]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="mota"
                  label="Mô tả"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter user name',
                    },
                  ]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="link"
                  label="Link"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter url',
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: '100%',
                    }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
           
            
            
          </Form>
        </Drawer>
  
        
        <Button  href="http://localhost:3000/createpro">THÊM PRODUCT</Button>
        <Spin spinning={loading2}>
        <Table rowSelection={rowSelection} columns={columns1} onChange={handletablechange2} 
         pagination={pagination}  dataSource={product22} rowKey={"id_pro"}/>
            </Spin>
      </div>
    );
  
};
export default AllProductdetails;
