import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import App from "./App";
import { BrowserRouter as Router,Route, Routes ,Link} from "react-router-dom";
import Project from "./projects";



const Header = () => {
  return (
    <div className="container">
      <div className="">
        <Navbar collapseOnSelect expand="lg" className="c ">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <p className="navitems">About Me</p>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
               
           <Nav.Link  as={Link} to='/projects' >
                  <p className="navitems">Projects</p>
                </Nav.Link>
                
                <Nav.Link  className="">
                  <p className="navitems">Resume</p>
                </Nav.Link>

                <Nav.Link href="#">
                  <p className="navitems">Award</p>
                </Nav.Link>
                <Nav.Link href="#" className="navitems">
                  <p className="navitems">Hire Me</p>
                </Nav.Link>
                <Nav.Link href="#" className="navitems">
                  <p className="navitems"> Contac</p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
      <Routes>
            <Route exact path="/"  element={<App/>} />
            <Route path="/projects" element={<Project/>} />
         </Routes>
      </div>
     
    </div>
  );
};
export default Header;
