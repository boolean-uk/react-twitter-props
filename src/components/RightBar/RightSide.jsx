import FollowContainer from './FollowContainer'
import NewsContainer from './NewsContainer'

export default function RightSide(searchFilter, setSearchFilter) {
    return (
        <aside className='right-side'>
        <div className='search-section'>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input className="search" 
            type="text" 
            placeholder="Search Twitter"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)} 
            />
        </div>

        <div className='widget'>
            <div className="widget-grid">
                <h1>Get Verified</h1>
                <h3>Subscribe to unlock nothing.</h3>
                <button className="verify-btn">Get Verified</button>
            </div>
        </div>

        <div className='widget'>
            <h1>What's happening</h1>
            <NewsContainer/>
        </div>
        <div className='widget'>
            <h1>Who to follow</h1>
            <FollowContainer/>
        </div>
    </aside>

    )
}

