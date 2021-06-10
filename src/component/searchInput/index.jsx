import '../../component/searchInput/searchinput.css'
function SearchInput(){
    return(
        <div className="input-wrapper">
        <input type="text" placeholder="Search user by ID,address and name" className="input-field" />
        </div>
    )
}
export default SearchInput;