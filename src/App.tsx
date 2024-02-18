import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {


  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
<NavBar/>
<MainPage/>
 <Footer/>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
