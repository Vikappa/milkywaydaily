/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_REPORTS_SUCCESS, FETCH_INFO_SUCCESS, FETCH_BLOG_SUCCESS, FETCH_ARTICLES_SUCCESS, blogWelcome,infoWelCome, reportWelcome, articleWelcome } from '../redux/typos/actionNames'
import  ButtonInfo from './subComponents/ButtonInfo'

function MainPage() {
    const dispatch = useDispatch();

    const reports = useSelector((state: reportWelcome) => state)
    const info = useSelector((state: infoWelCome) => state)
    const articles = useSelector((state: articleWelcome) => state)
    const blogs = useSelector((state: blogWelcome) => state)


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
        <>


            <Routes>

            </Routes>
        </>
    );
}



export default MainPage;
