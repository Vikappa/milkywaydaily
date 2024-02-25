import Navbar from 'react-bootstrap/Navbar';
import navImage from '../assets/navbarLog_clipped.png';
import { Link } from 'react-router-dom';
function NavBar() {
  return (<>
    <Navbar className="navBar p-0 w-100 d-flex flex-column justify-content-center" bg="dark" variant="dark">
      <Link to={"/"} className='d-flex flex-column justify-content-center w-100 p-0 m-0'>
      <img src={navImage} alt='nav-image' className='mx-auto p-0 my-0 navBarImage' />
      </Link >
    </Navbar>
<div id="fadeBorder"></div>
  </>
  )
}

export default NavBar