import Search from './Search'
import NewsSection from './NewsSection'
import FollowSection from './FollowSection'


export default function RightSide({searchInput, setSearchInput}) {
    return (
        <aside className='right-side'>

            <Search searchInput={searchInput} setSearchInput={setSearchInput} />            

                <div className='widget'>
                    <div className="widget-grid">
                        <h1>Get Verified</h1>
                        <h3>Subscribe to unlock nothing.</h3>

                        <button className="verify-btn">Get Verified</button>
                    </div>
                </div>

            <NewsSection />

            <FollowSection />
            
            </aside>
    )
}