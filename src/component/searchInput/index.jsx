import '../../component/searchInput/searchinput.css';
import React, { useRef, useState, useEffect } from 'react'

function SearchInput(props) {
    let [value, setValue] = useState('')
    const onChange = (e) => {
        setValue(e.target.value)
        props.getKeyWord(e.target.value)
    }

    return (
        <div className="search-container">
            <input onKeyDown={(e) => props.onKeyDown(e)} onKeyUp={(e) => props.onKeyUp(e)} autoComplete="off" value={value} onChange={onChange} type="search" className="search-input" type="text" placeholder="Search by Id username and address" name="search" />
            <i className="fa fa-search"></i>
            <i onClick={() => { setValue(''); props.hideSuggestion(); }} className="fa fa-close"></i>
        </div>

    )
}
export default SearchInput;
