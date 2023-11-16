import React ,{useState}from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import "../index.css"
function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  const [appClass,setAppClass]=useState(false)
  // this will be used for the Dark Mode Toggle feature

 function handleClickDarkMode(){
  setAppClass(!appClass)
 }
  return (
    <div className={appClass ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClickDarkMode} >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;