
import './App.css';
import SearchInput from '../src/component/searchInput'
import Card from './component/card';
import Data from './data.json';
import { useState } from 'react';
function App() {
 let [suggList, setSuggList]= useState([])
 let [isOpen,setIsOpen]=useState(false)
  
const show=()=>{
setIsOpen(true)
}
const close=()=>{

setIsOpen(false)
}
 const getKeyWord=(q)=>{

if(q!==null||''){

   let empArr = Data.filter(ele=>ele.id.toLowerCase(q).indexOf(q)>-1||ele.name.toLowerCase(q).indexOf(q)>-1||ele.address.toLowerCase(q).indexOf(q)>-1)
  // q!==null||''&&setSuggList(empArr)
setSuggList(empArr)
  
  }
  else
  setSuggList([])
   console.log(suggList,"else suggList")
 }
  return (
    <div className="searchbar-container">
    <h1>AutoComplete Searchbar</h1>
      <div className="wrapper">
        <SearchInput getKeyWord={getKeyWord} close={close} show={show} />
        <div className={isOpen?"card-container":"none"}>
          {
           suggList && <Card data={suggList} />||<span>No  Data Found</span>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
