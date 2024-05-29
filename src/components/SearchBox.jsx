import { useState } from "react";



const SearchBox = ({onChangeSearchField}) => {
    const [searchField, setSearchField] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        onChangeSearchField(searchField)
    }
  
    return(
        <form className="searchbox" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" onChange={(e) => setSearchField(e.target.value)} value={searchField} placeholder="Search by title" className="searchbox_text" />

            <button type="submit" onClick={() => onChangeSearchField(searchField)} className="searchbox_button">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    )
}

export default SearchBox;