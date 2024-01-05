


const SearchBox = () => {
    return(
        <div className="searchbox">
            <input type="text" placeholder="Search by title" className="searchbox_text" />

            <div className="searchbox_button">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default SearchBox;