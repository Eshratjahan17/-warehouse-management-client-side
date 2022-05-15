import Table from 'rc-table';
import React from 'react';
import trash from '../../images/trash.svg';
import './MyItems.css';

const MyItems = () => {
  const columns = [
    {
      title: "ProductName",
      dataIndex: "ProductName",
      key: "ProductName",
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
      width: 200,
    },

    {
      title: "Operations",
      dataIndex: "",
      key: "operations",
      render: () => (
        <a href="#">
          <button className='trash-btn'>
            <img src={trash} alt="" />
          </button>
          
        </a>
      ),
    },
  ];

  const data = [
    { ProductName: "Iphone", quantity: 28,price:5000 ,key: "1" },
    { ProductName: "Sumsung", quantity: 36,price:4000,  key: "2" },
];


  return (
    <div className="d-flex  justify-content-center my-5 my-items">
      <Table className='item-table' columns={columns} data={data} />
    </div>
  );
};

export default MyItems;