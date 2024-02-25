import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FETCH_REPORTS_SUCCESS, FETCH_INFO_SUCCESS, FETCH_BLOG_SUCCESS, FETCH_ARTICLES_SUCCESS} from '../redux/typos/actionNames'
import ReportBar from './subComponents/ReportBar.tsx'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard.tsx'
import ReportPage from './ReportPage.tsx'

function MainPage() {
    const dispatch = useDispatch()
      
    useEffect(() => {
        fetch(`https://api.spaceflightnewsapi.net/v4/reports/`)
            .then(response => response.json())
            .then(data => dispatch({ type: FETCH_REPORTS_SUCCESS, payload: data }))
        fetch(`https://api.spaceflightnewsapi.net/v4/info/`)
            .then(response => response.json())
            .then(data => dispatch({ type: FETCH_INFO_SUCCESS, payload: data }))
        fetch(`https://api.spaceflightnewsapi.net/v4/articles/`)
            .then(response => response.json())
            .then(data => dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: data }))
        fetch(`https://api.spaceflightnewsapi.net/v4/blogs/`)
            .then(response => response.json())
            .then(data => dispatch({ type: FETCH_BLOG_SUCCESS, payload: data }))
    }, [dispatch])

    return (
        <div className='d-flex flex-column'>
            <div className='d-flex'>
                <ReportBar/>
            </div>
                <Routes>
                <Route path='/' element={<DashBoard/>} />
                <Route path='/report/:reportId' element={<ReportPage/>} />
                </Routes>
        </div>
    )
}



export default MainPage