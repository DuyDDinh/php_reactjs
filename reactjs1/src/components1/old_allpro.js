import  "../App.css";
import { Routes, Route, Link , useNavigate } from 'react-router-dom';
import AuthUser from '../components/AuthUser';
import http from "../http";
import { useState, useEffect } from "react";
import { PlusOutlined } from '@ant-design/icons';
import InforDev from "../components1/infordev";
import Inforpro from "../components1/inforpro";
import { Image } from 'antd';
import { Button, Col, DatePicker, Drawer, Form,Upload, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
function AllProduct() {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
  const showDrawer = () => {
    setOpen(true);
    
  };
  const onClose = () => {
    setOpen(false);
  };
  const submithandleForm = (pro) =>{
    form.setFieldsValue(pro)
    showDrawer();
}

  const [collapsed, setCollapsed] = useState(false);
  const [users, setUsers] = useState([]);
  const [product, setProduct] = useState([]);
  const [pro_details, setProductDetails] = useState([]);
  
  const [childrenDrawer, setChildrenDrawer] = useState(false);


  var someValue = window.sessionStorage.getItem('user');
  var obj = JSON.parse(someValue); 
   const Tsoken=obj.phanquyen;
    const {getToken} = AuthUser();
    useEffect(()=>{
        
        fetchAllPro();

    },[]);
 
    const fetchAllPro = () => {
        http.get('/products').then(res=>{
            setProduct(res.data);
            console.log(res.data)
        })
    }

    
  //   const fetchAllProDetails = () => {
  //     http.get('/productdetails').then(res=>{
  //       setProductDetails(res.data);
  //       // console.log(res.data)
  //     })
  // }




    const showChildrenDrawer = () => {
      setChildrenDrawer(true);
    };
    const onChildrenDrawerClose = () => {
      setChildrenDrawer(false);
    };


    const deleteProduct = (id) => {
        http.delete('/products/'+id ).then(res=>{
          fetchAllPro();
        })
    }
  
  if (Tsoken !== "0"){
    return (

          <div>      
            <Drawer
        title="Thông Tin Chi Tiết "
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button type="primary" onClick={showChildrenDrawer}>
              Product
            </Button>
    
            <Button onClick={onClose}>Cancel</Button>
            
            <div>
                 <Routes>                  
                 <Route path="/infordev" element={<InforDev/>} />
                 </Routes>            
            </div>
          
          </Space>
                
        }
      >

        <Form form={form} layout="vertical" hideRequiredMark>
        <Row gutter={16}>
            <Col span={24}>
           
              <Form.Item
                width="200"
                rules={[
                  {
                    required: true,
                    message: 'please enter link image',
                  },
                ]}
              >
               <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU"
                width={80} 
              />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name_pro"
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phanloai"
                label="Url"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  addonBefore="http://"
                  addonAfter=".com"
                />
              </Form.Item>
            </Col>
          </Row>
          
          
          <Row gutter={16}>
            <Col span={24}>
           
              <Form.Item
                name="mota"
                label="Description"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
          
        </Form>

        {/* =================================================================================== */}
        <Drawer
          title="Product"
          width={620}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          
        <Form form={form} layout="vertical" hideRequiredMark>
        <Row gutter={16}>
            <Col span={24}>
           
              <Form.Item
                width="200"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
          

            <Col span={12}>
             
              <Form.Item
                name="name_pro"
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phanloai"
                label="Url"
                rules={[
                  {
                    required: true,
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
          
          
          <Row gutter={16}>
            <Col span={24}>
           
              <Form.Item
                name="mota"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
          
        </Form>
        </Drawer>
      </Drawer>
      
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên Danh Muc</th>
                        <th>Phân Loại</th>
                        <th>Mô Tả</th>
                        <th>Xóa</th>
                        <th>Sửa</th>
                        <th> Xem </th>

                       
                    </tr>
                </thead>
                <tbody> 
                    {product.map((pro,index)=>(
                       
                            <tr key={pro.id_pro}>
                             <td>{pro.id_pro}</td>
                             <td>{pro.name_pro}</td>
                             <td>{pro.phanloai}</td>
                             <td>{pro.mota}</td>
                            <td >
                            <Button type="danger" onClick={()=>{deleteProduct(pro.id)}}>
                              Xóa
                            </Button>
                            {/* <button  type="button" className="btn btn-danger"
                                onClick={()=>{deleteUser(pro.id)}}
                                 ></button> */}
                            </td>
                            <td>
                            <Button type="primary" onClick={()=>submithandleForm(pro)} >
                                Sửa
                            </Button>
                            <td>
                            <Button type="primary" onClick={()=>submithandleForm(pro)} >
                                Thêm Details
                            </Button>
                            </td>
                          </td>
                          <td>
                            <Button type="info" onClick={()=>submithandleForm(pro)} >
                                Xem 
                            </Button>
                          </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
    );
  }
  

}

export default AllProduct;

