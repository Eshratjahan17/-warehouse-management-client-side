import Table from "rc-table";
import React from 'react';
import { Button } from "react-bootstrap";
import trash from "../../images/trash.svg";
import './ManageInventoryItems.css';



const ManageInventoryItems = () => {
  const columns = [
    {
      title: "Id",
      dataIndex: "Id",
      key: "Id",
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
          <button className="trash-btn">
            <img src={trash} alt="" />
          </button>
        </a>
      ),
    },
  ];
  const data = [
    { ProductName: "Iphone",Id:1, quantity: 28, price: 5000,supplier:"Eshrat", key: "1" },
    { ProductName: "Sumsung",Id:2, quantity: 36, price: 4000,supplier:"Effat", key: "2" },
  ];
  return (
    <div>
      <div className="d-flex  justify-content-center my-5 my-items">
        <Table className="item-table" columns={columns} data={data} />
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