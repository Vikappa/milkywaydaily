import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { fetchReports } from './redux/reducers/reportReducer'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchReports())
  }, [dispatch])
  

  return (
    
    <BrowserRouter>
    <NavBar/>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App
