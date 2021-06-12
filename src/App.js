
import './App.css';
import SearchInput from '../src/component/searchInput'
import Card from './component/card';
import Data from './data.json';
import { useState, useRef, useEffect } from 'react';
function App() {
  let [suggList, setSuggList] = useState([]) /*used for store filterd data */
  let [isOpen, setIsOpen] = useState(false) used for open or close the dropdown
  let [cursor, setCursor] = useState(-1)
  let [searchKeyWord, setSearchKeyWord] = useState(undefined)
  let [userData, setUserData] = useState([])
  
  const searchwrapper = useRef(null)
// show suggetion list
  const showSuggestion = () => { setIsOpen(true) } 
  // hide suggetion list
  const hideSuggestion = () => { setIsOpen(false) }

  // filter input
  const getKeyWord = (q) => {
    setSearchKeyWord(q)
    showSuggestion()
    let empArr = Data.filter(ele => ele.id.toLowerCase(q).indexOf(q) > -1 || ele.name.toLowerCase(q).indexOf(q) > -1 || ele.address.toLowerCase(q).indexOf(q) > -1)
    setSuggList(empArr)
  }
  // keyboard navigation
  const keyboardNavigation = (e) => {
    if (e.key === "ArrowDown") {
      isOpen ? setCursor(c => (c < suggList.length - 1 ? c + 1 : c)) : showSuggestion()
    }
    if (e.key === "ArrowUp") {
      setCursor(c => (c > 0 ? c - 1 : 0))
    }
  }
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
// detect if clicked outside the suggetionlist/dropdown
  const handleClickOutside = (e) => {
    if (searchwrapper.current && !searchwrapper.current.contains(e.target)) {
      hideSuggestion();
    }
  }
   const onSelect = (data) => {
    setUserData(data);
    hideSuggestion();
  }
  /*const scrolIntoView=(position)=>{
  alert("hggh")
  suggListRef.current.scrollTo({
  top:position,
  behavior:"smooth"
  })
  
  }*/
 


  return (
    <div className="searchbar-container">
      <h1>AutoComplete Searchbar</h1>
      <div ref={searchwrapper} className="wrapper">
        <SearchInput onKeyDown={keyboardNavigation} onKeyUp={onKeyUp} value={searchKeyWord} getKeyWord={getKeyWord} hideSuggestion={hideSuggestion} showSuggestion={showSuggestion} />
        <div className={isOpen ? "card-container" : "in-visible"}>
          {
            suggList.length > 0 ? suggList.map((e, index) => <Card isHighlighted={cursor == index ? true : false} onSelect={onSelect} data={e} />)
              : <p>No User Found</p>
          }
        </div>
      </div>
      <p>{
        Object.values(userData, "") 
      }</p>
    </div>
  );
}

export default App;
