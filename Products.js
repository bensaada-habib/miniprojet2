import React,{useState,useEffect} from 'react'
import '../App.css';
import axios from 'axios';

const Products = () => {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([])

 useEffect(()=> {
     setLoading(true);
   axios({
     method:"GET",
     url:"https://fakestoreapi.com/products"
   })
     .then(res=> {
        console.log(res.data)
        setData(res.data)
     })
     .catch(e=>console.log(e))
     .finally(()=>setLoading(false));
  }, []);

  return (
    <div className="Products-container">
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )} 

      {data.map((Products)=> (
          <div key={Products.id} className="card">
           <div><img src={Products.img} alt="#"/></div>
           <div className="card-description">
               <h6>{Products.title}</h6>
               <h6>'Price : ${Products.price}'</h6>
               <h6>'Category : ${Products.category}</h6>
           </div>
          </div>
        ))}
    </div>
  );
};

export default Products;