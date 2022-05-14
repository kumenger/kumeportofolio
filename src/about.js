import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const About = () => {
  return (
    <div className="">
      
      <div className=" a  ">
        <div className="row">
          <div className="12 text-center">
            {" "}
            <p
              className=" heading-main"
              style={{ letterSpacing: "13px", fontFamily: "Baloo Bhai" ,color:"turquoise"}}
            >
              {" "}
             <strong>KUMENGER BEYENE</strong> 
            </p>
          </div>
          <br></br><br></br>
        </div>
        <div className="row  aboutholder  ">
          <div className=" col-xs-12 col-s-12 offset-md-2 col-md-3 bounce-1  d-flex justify-content-center ">
            <img
              src="https://i.ibb.co/9tGLc6C/My-project-5-modified.png"
              style={{ width: "80%", height: "", objectFit: "contain" }}
            />
          </div>
          <div className="  col-xs-12   col-s-12  col-md-4  heading-sun ">
            <p class=" abouttext">
              I'm{" "}
              <strong className="pink">
                a fullstack Web,Mobile Developer{" "}
              </strong>{" "}
              from{" "}
              <a
                href="https://en.wikipedia.org/wiki/Ethiopia"
                target="_blank"
                className="link"
              >
                Ethiopia
              </a>{" "}
              <br></br>
              one of the lucky ones to Won the{" "}
              <a
                href="https://en.wikipedia.org/wiki/Diversity_Immigrant_Visa"
                target="_black"
                className="link"
              >
                Diversity visa lottery
              </a>{" "}
              that gives you the opportunity to{" "}
              <strong className="pink">Permanent Resident Card</strong>.
              <br></br> Graduated in Computer Science and Information
              Techonolgy,<strong className="pink">Bsc</strong> at{" "}
              <a
                href="https://www.amu.edu.et/"
                target="_blank"
                className="link"
              >
                <font>Arba Minch University</font>
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
