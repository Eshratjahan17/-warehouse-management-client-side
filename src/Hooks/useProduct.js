import { useEffect, useState } from 'react';

const useProduct = () => {
   const [phones, setPhones] = useState([]);
   useEffect(() => {
     fetch("https://ware-house-u1xf.onrender.com/products")
       .then((res) => res.json())
       .then((phones) => {
         phones.map(phone=>setPhones(phone))
       });
   });
  return [phones, setPhones];
};

export default useProduct;