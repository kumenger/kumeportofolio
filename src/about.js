import { Card, Figure } from "react-bootstrap";
import SkillsComponent  from "./SkillsCOmponent"
const About = () => {
 
  return ( <div className="border" >
    <div className=" a  rounded" >
     <h5 className="text-center heading-main" style={{wordSpacing:"2px",}}>  FullStack Developer</h5>
    <div className="row  aboutholder  " >
      
        <div className=" col-xs-12 col-s-12  col-4 bounce-1  d-flex justify-content-center" >
       
  <img  src="https://i.ibb.co/9tGLc6C/My-project-5-modified.png"  style={{width:"80%",height:"",objectFit:"contain"}} />
 
 </div>
  <div className="  col-xs-12   col-s-12 col-8 heading-sun "  >
    <p class=" abouttext" >
             
          I'm <strong className="pink">kumenger Beyene</strong> a fullstack
             Web,Mobile Developer  from{" "}
              <a href="https://en.wikipedia.org/wiki/Ethiopia" target="_blank" className="text-light">
                Ethiopia
              </a>{" "}<br></br>
              one of the lucky ones to Won the{" "}
              <a
                href="https://en.wikipedia.org/wiki/Diversity_Immigrant_Visa"
                target="_black" className="text-light"
              >
                Diversity visa lottery
              </a>{" "}
              that gives you the opportunity to <strong className="pink">Permanent Resident Card</strong>.<br></br>  Graduated in Computer Science and
              Information Techonolgy,<strong className="pink">Bsc</strong> at{" "}
              <a href="https://www.amu.edu.et/" target="_blank" className="text-light">
                <font>Arba Minch University</font>
              </a>{" "}
            </p>
           
            
            

                    
              
   
                  
            
                 
                 
                 
</div>



        </div>
       
     
        
        </div>
       
        </div>);
};
export default About;
