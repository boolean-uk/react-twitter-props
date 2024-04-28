export default function Search({searchInput, setSearchInput}) {

    function handleSearchInput(e) {
        setSearchInput(e.target.value.toLowerCase())
    }
    
    return (
        <div className='search-section'>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input className="search" type="text" placeholder="Search Twitter" value={searchInput} onChange={handleSearchInput} />
        </div>
    )
}