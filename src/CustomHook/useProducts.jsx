
import {  useEffect, useState } from "react";
 


const useProduct = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
      fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then( data => {
       
           setProducts(data);
          setLoading(false)
         
      })
      .catch( error => console.log(error))
    },[])
    return [products, loading]
}
export default useProduct;