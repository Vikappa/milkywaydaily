import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
function App() {


  return (
    <>
    <BrowserRouter>
<NavBar/>
<MainPage/>
 <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
