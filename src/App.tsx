import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ReportMarque from './components/subComponents/ReportMarque'
import { useEffect } from 'react'
import { useDispatch } from './redux/store/hooks'
import { fetchReports } from './redux/reducers/reportReducer'
import { fetchArticles } from './redux/reducers/articleReducer'
import { fetchBlogs } from './redux/reducers/blogReducer'
import { fetchInfo } from './redux/reducers/infoReducer'
import HomePage from './components/HomePage'
import ReportPage from './components/ReportPage'
import ArticlePage from './components/ArticlePage'



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
    <ReportMarque/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/report/:Id' element={<ReportPage/>}/>
      <Route path='/article/:Id' element={<ArticlePage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App
