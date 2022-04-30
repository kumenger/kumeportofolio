import Project from "./projects";
import Header from "./header";
import About from "./about";
import Skills from './skils'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Contact from './Contact'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter >
      <div className="" >
        <div className="row " >
          <div className="col-md-12" >
            <Navbar collapseOnSelect expand="lg" className="c ">
              <Container>
                <Navbar.Brand as={Link} to="/">
                   <p className="navitems btn btn-dark " eventKey={1}>  
                      About</p>{" "}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/projects" eventKey={2}>
                      <p className="navitems btn btn-dark">Projects</p>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/skills' eventKey={3} className="">
                      <p className="navitems btn btn-dark  ">Skills</p>
                    </Nav.Link>
                    <Nav.Link className="">
                      <p className="navitems btn btn-dark ">Resume</p>
                    </Nav.Link>

                    <Nav.Link href="#">
                      <p className="navitems btn btn-dark  ">Award</p>
                      
                    </Nav.Link>
                    <Nav.Link as={Link} to='/contact' eventKey={4}>
                      <p className="navitems btn btn-dark ">Contact</p>
                      
                    </Nav.Link>
                    
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
         
        </div>
       
        <div className=" " >
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
         
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
