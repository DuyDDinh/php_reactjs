import React, { useState , useEffect } from 'react';
import { Link } from "react-router-dom";
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
const AllProduct = () => {
const navigate = useNavigate();  
const [childrenDrawer, setChildrenDrawer] = useState(false);
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
  const [product, setProduct] = useState([]);
  const [productdetails, setProductdetails] = useState([]);
  const [users, setUsers] = useState([]);
  const [idPro, setIdPro] = useState("");


  const [pagination, setPaginate2] = useState(initPagination);
  const editdetails= (id_pro) =>{
    navigate('/editdetails/'+id_pro.id_pro)

    
  }
  const submitX=(id_prodetail) =>{
      console.log("hehe",id_prodetail)
    showChildrenDrawer()
  }
  const sumbitXem = (id_pro) =>{
    console.log("ALO",id_pro.id_pro);
    setIdPro(id_pro.id_pro)
    form.setFieldsValue(id_pro)
    showDrawer();
    
  }
  
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
    fetchAllPro(pagination.current);
  };

  const addDetails = (id_pro) =>{
    navigate('/CreateDetails'+'?id='+id_pro.id_pro);
    http.store('/productdetails/'+id_pro.id_pro).then(res=>{
    console.log(id_pro.id_pro)

      fetchAllPro();

    })
  }
  const deleteProduct = (id_pro) => {
    console.log(id_pro.id_pro)
    http.delete('/products/'+id_pro.id_pro ).then(res=>{
      fetchAllPro();
    })
  }
  const fetchOne = (id_pro)=>{
    console.log("lay 1 ",id_pro.id_pro)
  }
  const columns = [
    {
      title: 'Name ProDuct',
      dataIndex: 'name_pro',
    },
    {
      title: 'Phân Loại',
      dataIndex: 'phanloai',
  
    },
    {
      title: 'Mô tả',
      dataIndex: 'mota',
    },
    {
      title: 'Action',
      key: 'action',
      render: (id_pro, record) => (
        <Space size="middle">
          <a onClick={()=> {editdetails(id_pro)}}>Edit</a>
          <Link to={{ pathname:"/editdetails/"+id_pro.id_pro}} > Edit </Link>
          <a onClick={()=>{deleteProduct(record)}} >Delete</a>
          <a onClick={()=>{addDetails(record)}}>AddDetails</a>
          <a onClick={()=>{sumbitXem(id_pro)}}>Xem</a>
        </Space>
      ),
    },
  ];
  const columns2 = [
    {
      title: 'Name ProDuct',
      dataIndex: 'name_pro',
    },
    {
      title: 'Phân Loại',
      dataIndex: 'phanloai',
    },
    {
      title: 'Mô tả',
      dataIndex: 'mota',
    },

  ];
  useEffect(()=>{
    fetchAllPro();
    fetchPro();
  },[]);
  const fetchAllPro = (current) => {
    setLoading2(true)
    http.get('/products'+'?page='+current).then(res=>{
      console.log(res.data.data)
        setProduct(res.data.data);
      setLoading2(false)

    })
}
const fetchPro= ()=>{
  http.get('/productdetails').then(res=>{
    console.log(res.data)
    setProductdetails(res.data)
  })

}
const showChildrenDrawer = (id_pro) => {
  navigate("/allproductdetails")
  setChildrenDrawer(true);
};

const onChildrenDrawerClose = () => {
  setChildrenDrawer(false);
};
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
          dataSource={productdetails}
          title="INFORMATION"
          width={720}
          onClose={onClose}
          open={open}
          bodyStyle={{
            paddingBottom: 80,
          }}
          extra={
            <Space>
               <Button type="primary" onClick={()=>submitX()}>
            ProDucct Details
          </Button>
              <Button onClick={onClose}>Cancel</Button>
             
            </Space>
          }
        >
          <Form form={form} layout="vertical" hideRequiredMark>
          <Image
              width={150}
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU"}
            />
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="id_pro"
                  label="Name"
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
         
          <Drawer
            title="Product Details"
            width={420}
            closable={false}
            onClose={onChildrenDrawerClose}
            open={childrenDrawer}
            
          >
           <Form form={form} layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="image"
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter user name',
                    },
                  ]}
                >
                   <Input/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="Link"
                  label="Link"
                  rules={[
                    {
                      required: true,
                      message: 'Link',
                    },
                  ]}
                >
                  <Input placeholder="LINK" />
                </Form.Item>
              </Col>
             
              
            </Row>
           
            
            
          </Form>
         
          </Drawer>
        </Drawer>
        <Button  href="http://localhost:3000/createpro">THÊM PRODUCT</Button>
        <Spin spinning={loading2}>
        <Table rowSelection={rowSelection} columns={columns} onChange={handletablechange2}  pagination={pagination}  dataSource={product} rowKey={"id_pro"}/>
            </Spin>
      </div>
    );
   

   
  }
 
 
export default AllProduct;
