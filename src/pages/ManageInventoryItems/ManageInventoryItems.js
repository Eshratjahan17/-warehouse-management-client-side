import Table from "rc-table";
import React from 'react';
import { Button } from "react-bootstrap";
import useData from "../../Hooks/useData";
import trash from "../../images/trash.svg";
import './ManageInventoryItems.css';





const ManageInventoryItems = () => {
  const [products,setProducts]=useData();
  console.log(products);

  const columns = [
    {
      title: "Id",
      dataIndex: "Id",
      key: "_Id",
      width: 100,
    },
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
      title: "supplier",
      dataIndex: "supplier",
      key: "supplier",
      width: 200,
    },

    {
      title: "Operations",
      dataIndex: "",
      key: "operations",
      render: () => (
        <a href="#">
          <button onClick={()=>handleDelete()} className="trash-btn">
            <img src={trash} alt="" />
          </button>
        </a>
      ),
    },
  ];
  
  return (
    <div>
      <div className="d-flex  justify-content-center my-5 my-items">
        <Table className="item-table" columns={columns} data={products} />
      </div>

      <div>
        <Button size="lg">
          <a className="add-button" href="/addnewitem">
            Add new item
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ManageInventoryItems;