
import './App.css';
import SearchInput from '../src/component/searchInput'
import Card from './component/card';
import Data from './data.json';
import { useState } from 'react';
function App() {
 const [isFocus, setIsFocus]= useState(false)
 let [isOpen,setIsOpen]=useState(false)
    
const show=()=>{
setIsOpen(true)
}
const close=()=>{
console.log("ryryry")
setIsOpen(false)
}
 const getKeyWord=(e)=>{
 //  let input=e.target.value,empArr=[];
  // if(e.target.value!==null||""){
  //  empArr=Data&&Data.filter((item,index)=>console.log(Object.values(item),"filterData"))
   }
   
   else{
   empArr=null;
    setIsOpen(false)
     console.log(e.target.value,"else")
   }
  
   
 }
  return (
    <div className="searchbar-container">
    {isOpen}
    <h1>AutoComplete Searchbar</h1>
      <div className="wrapper">
        <SearchInput getKeyWord={getKeyWord} close={close} show={show} />
        <div className={isOpen?"card-container":"none"}>
          {
           Data&& Data.map(e => {
              return <Card data={e} />
            })
           
          }
        </div>
      </div>
    </div>
  );
}

export default App;
