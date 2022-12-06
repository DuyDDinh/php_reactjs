import React, { useState , useEffect } from 'react';
import { Button, Table, Space , Spin} from 'antd';
import { Pagination } from 'antd';
import AuthUser from '../components/AuthUser';
import http from "../http";
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Password',
    dataIndex: 'email',

  },
  {
    title: 'Phân quyền',
    dataIndex: 'phanquyen',
  },
  {
    title: 'Action',
    key: 'action',
    render: (id, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const columns2 = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Password',
    dataIndex: 'email',

  },
  {
    title: 'Phân quyền',
    dataIndex: 'phanquyen',
  },
  
];

const initPagination = {
  current: 1,
  defaultCurrent: 1,
  total: 5,
  defaultPageSize: 2,
  showSizeChanger: false
}
const Dashboard = () => {
const [loading2 , setLoading2] = useState(false)

  const [users, setUsers] = useState([]);
  const [current, seturlPage] = useState([]);
  // bắt đầu phân trang
  const [pagination, setPaginate] = useState(initPagination);

  const handletablechange = (pagination) => {
    console.log(pagination.current);
    let p = {
      current: pagination.current,
      defaultCurrent: 1,
      total: 5,
      defaultPageSize: 2,
      showSizeChanger: false
    };
    setPaginate({...p})
    fetchAllUsers(pagination.current);
  };
  useEffect(()=>{
    fetchAllUsers(1);
  },[]);
  // end phân trang

const fetchAllUsers = (current) => {
    setLoading2(true)
      http.get('/users'+'?page='+current).then(res=>{
        let {data} = res.data;
          setUsers(data);
          console.log(res.data)
    setLoading2(false)

      })
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
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
        <Spin spinning={loading2}>
        <Table rowSelection={rowSelection} columns={columns} dataSource={users} pagination={pagination} onChange={handletablechange} rowKey={"id"}/>
           </Spin>
      </div>
    );
  
  
  
};
export default Dashboard;