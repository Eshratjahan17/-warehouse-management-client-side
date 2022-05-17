import Table from "rc-table";
import React from 'react';
import { Button } from "react-bootstrap";
import useData from "../../Hooks/useData";
import useProduct from "../../Hooks/useProduct";
import trash from "../../images/trash.svg";
import './ManageInventoryItems.css';





const ManageInventoryItems = () => {
   
  const [products,setProducts]=useData();
  const [phones, setPhones]=useProduct();
 const {_id}= phones;

  
  const handleDelete=id=>{
    const proceed=window.confirm("Are u sure?");
    if(proceed){
       console.log(id);
       fetch(`http://localhost:5000/inventory/${id}`, {
         method: "DELETE",
       })
         .then((res) => res.json())
         .then((data) => console.log(data));

    }

    }
   
   
  const columns = [
    {
      title: "productName",
      dataIndex: "productName",
      key: "productName",
      width: 100,
    },
    {
      title: "supplierName",
      dataIndex: "supplierName",
      key: "supplierName",
      width: 200,
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      width: 200,
    },
    {
      title: "quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: 100,
    },

    {
      title: "Operations",
      dataIndex: "",
      key: "operations",
      render: () => (
        <a href="/manageinventory">
          <button onClick={() => handleDelete(_id)} className="trash-btn">
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