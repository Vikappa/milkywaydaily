import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// import { Provider } from 'react-redux'
// import store from './redux/store'
function App() {


  return (
    <>
    <BrowserRouter>
<NavBar/>
 <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
