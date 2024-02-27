import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { useDispatch } from './redux/store/hooks'
import { fetchReports } from './redux/reducers/reportReducer'



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
