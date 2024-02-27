import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { useDispatch } from './redux/store/hooks'
import { fetchReports } from './redux/reducers/reportReducer'
import { fetchArticles } from './redux/reducers/articleReducer'
import { fetchBlogs } from './redux/reducers/blogReducer'
import { fetchInfo } from './redux/reducers/infoReducer'



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchReports())
    dispatch(fetchArticles())
    dispatch(fetchBlogs())
    dispatch(fetchInfo())
  }, [dispatch])
  

  return (
    
    <BrowserRouter>
    <NavBar/>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App
