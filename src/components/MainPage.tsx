import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_REPORTS_SUCCESS, FETCH_INFO_SUCCESS, FETCH_BLOG_SUCCESS, FETCH_ARTICLES_SUCCESS, blogWelcome, infoWelCome, reportWelcome, articleWelcome } from '../redux/typos/actionNames'
import ReportBar from './subComponents/ReportBar.tsx'

function MainPage() {
    const dispatch = useDispatch();

    const info = useSelector((state: infoWelCome) => state.infoArray)
    const articles = useSelector((state: articleWelcome) => state.articlesArray)
    const blogs = useSelector((state: blogWelcome) => state.blogsArray)


    interface InfoProps {
        infoWelcome: typeof info
      }
      

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
                <ReportBar></ReportBar>
            </div>
        </div>
    )
}



export default MainPage