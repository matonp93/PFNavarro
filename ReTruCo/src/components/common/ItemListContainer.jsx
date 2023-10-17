import { useEffect, useState } from "react";
import {getProducts} from '../../asyncMock.jsx'
import ItemList from '../common/ItemList.jsx'
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts]= useState([])

const {categoryId} = useParams()

useEffect(()=>{
  const asyncFunc= categoryId ? getProductsByCategory : getProducts 
  asyncFunc(categoryId)
  .then(response=>{
    setProducts(response)
  })
  .catch(error=>{
    console.error(error)
  })
},[categoryId])
  
   
  return (
    <div>
      <h1>{saludo}</h1>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
