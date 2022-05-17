import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BodyItems.css';


const BodyItems = ({ bodyProduct }) => {
  const {_id, productName, about, picture, price, quantity, supplierName } =
    bodyProduct;
    const navigate=useNavigate();
    const navigateToProductDetails=(id)=>{
      navigate(`/inventory/${id}`);

    }
  return (
    <div>
      <div className="col">
        <div className="card  card-div">
          <img src={picture} className="card-img-top card-img" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <small className="text-muted">{supplierName}</small>
            <p className="card-text text-area">{about.slice(0, 200)}</p>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title={about}
            >
              see more about {productName}
            </button>
            <p className="card-text">
              Price:<span>{price}</span>
            </p>
            <p className="card-text">
              Quantity:<span>{quantity}</span>
            </p>
          </div>
          <div>
            <button
              onClick={()=>navigateToProductDetails(_id)}
              className=" btn btn-update btn-lg"
              type="button"
              href="/inventory/:id"
            >
              Update button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyItems;