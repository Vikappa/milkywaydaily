import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
    <div id="footerFade" className=''></div>
    <Navbar fixed='bottom' className="bg-body-tertiary" bg="dark" variant="dark" id='footerbar'>
      <Container>
      <Navbar.Brand href="https://www.linkedin.com/in/vincenzo-costantini-b6a540116/"><i className="bi bi-linkedin"></i></Navbar.Brand>
      <Navbar.Brand href="https://github.com/Vikappa"><i className="bi bi-github"></i></Navbar.Brand>
      <Navbar.Brand href="https://www.instagram.com/vincenzokonstantine_/"><i className="bi bi-instagram"></i></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Vincenzo Costantini
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  );
}

export default Footer;