import '../../component/searchInput/searchinput.css';
import React, { useRef,useState ,useEffect} from 'react'

function SearchInput(props) {

    
    return (
        <div className="search-container">
            <input onChange={(e)=>props.getKeyWord(e)} onClick={props.show} type="search" className="search-input" type="text" placeholder="Search by Id username and address" name="search" />
            <i className="fa fa-search"></i>
            <i onClick={props.close} className="fa fa-close"></i>
        </div>

    )
}
export default SearchInput;
