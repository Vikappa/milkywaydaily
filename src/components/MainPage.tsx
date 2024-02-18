import { useEffect } from 'react';
import { Routes } from'react-router-dom';
import { useDispatch } from 'react-redux';
import { FETCH_REPORTS_SUCCESS, FETCH_INFO_SUCCESS, FETCH_BLOG_SUCCESS, FETCH_ARTICLES_SUCCESS } from '../redux/typos/actionNames';

function MainPage() {
    
const dispatch = useDispatch()

    useEffect(() => { 

        fetch(`https://api.spaceflightnewsapi.net/v4/reports/`)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: FETCH_REPORTS_SUCCESS, payload: data })
            );

        fetch(`https://api.spaceflightnewsapi.net/v4/info/`)
        .then(response => response.json())
        .then(data => dispatch({ type: FETCH_INFO_SUCCESS, payload: data }));
   
        fetch(`https://api.spaceflightnewsapi.net/v4/articles/`)
        .then(response => response.json())
        .then(data => dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: data }));     

        fetch(`https://api.spaceflightnewsapi.net/v4/blogs/`)
        .then(response => response.json())
        .then(data => dispatch({ type: FETCH_BLOG_SUCCESS, payload: data }));
         }, [])

return (
    
    <Routes>
    
    </Routes>
)
}

export default MainPage