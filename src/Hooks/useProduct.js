import { useEffect, useState } from 'react';

const useProduct = () => {
   const [phones, setPhones] = useState([]);
   useEffect(() => {
     fetch("http://localhost:5000/products")
       .then((res) => res.json())
       .then((phones) => {
         phones.map(phone=>setPhones(phone))
       });
   });
  return [phones, setPhones];
};

export default useProduct;