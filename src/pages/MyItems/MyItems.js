import axios from 'axios';
import Table from 'rc-table';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import trash from '../../images/trash.svg';
import './MyItems.css';

const MyItems = () => {
  const [user]=useAuthState(auth);
 
  const [myItems, setMyItems] = useState([]);
  

  //http://localhost:5000/products?email=${email}

  useEffect(() => {
    const getItems =async()=>{
      const email=user.email;
     
      const url = `http://localhost:5000/products?email=${email}`;
      const {data}=await axios.get(url);
      setMyItems(data);
    }
    getItems();
    
  }, [user]);
  console.log(myItems);

  const columns = [
    {
      title: "productName",
      dataIndex: "productName",
      key: "productName",
      width: 100,
    },
    {
      title: "quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: 100,
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      width: 100,
    },

    {
      title: "Operations",
      dataIndex: "",
      key: "operations",
      render: () => (
        <a href="/myitems">
          <button className="trash-btn">
            <img src={trash} alt="" />
          </button>
        </a>
      ),
    },
  ];

  
  return (
    <div className="d-flex  justify-content-center my-5 my-items">
      <Table className="item-table" columns={columns} data={myItems} />
      
    </div>
  );
};

export default MyItems;