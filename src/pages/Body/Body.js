import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import img1 from '../../images/banner/1.jpg';
import img2 from "../../images/banner/2.jpg";
import img3 from "../../images/banner/3.jpg";
import BodyItems from '../BodyItems/BodyItems';
import './Body.css';

const Body = () => {

  const [products,setProducts]=useData();
  const product = products.slice(0, 6);
  console.log(product);
  
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* cards */}
     <div class="row row-cols-1 row-cols-md-3 g-5 mx-5 my-5">
        {product.map((bodyProduct) => <BodyItems key={bodyProduct._id}
        bodyProduct={bodyProduct}
        ></BodyItems>)}
      </div>

      <h3 className="my-5">
        <Link to="/manageinventory">Manage Items</Link>
      </h3>
    </div>
  );
};

export default Body;