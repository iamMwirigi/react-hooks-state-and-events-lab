import React,{useState} from "react";

function Item({ name, category }) {
  const[isincart,setincart]=useState(false)
  const[action,setAction]=useState(true)

  function handleAddToCart(){
    setincart(!isincart)
    setAction(!action)
  }
  return (
    <li className={isincart? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{action?"Add to Cart":"Remove from Cart"}</button>
    </li>
  );
}

export default Item;