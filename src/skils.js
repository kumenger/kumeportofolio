import SkillsComponent  from "./SkillsCOmponent"
const Skills=()=>{
    return ( <div className="row aboutme ">
       
      <h2 className="text-center">SPECIAL SKILLS</h2>
     <SkillsComponent title={"Html"} skills={[ {src:"https://img.icons8.com/color/48/000000/nodejs.png",skilltype:"Node"} ,{src:"https://img.icons8.com/color/48/000000/react-native.png",skilltype:"React"} ,{src:"https://img.icons8.com/color/48/000000/graphql.png",skilltype:"Grapgiql"}]}/>
     <SkillsComponent title={"CSS"} skills={[ {src:"https://img.icons8.com/color/48/000000/nodejs.png",skilltype:"Node"} ,{src:"https://img.icons8.com/color/48/000000/react-native.png",skilltype:"React"} ]}/>
     <SkillsComponent title={"Javascript"} skills={[ {src:"https://img.icons8.com/color/48/000000/nodejs.png",skilltype:"Node"} ,{src:"https://img.icons8.com/color/48/000000/react-native.png",skilltype:"React"} ]}/>
     <SkillsComponent title={"BackEnd"} skills={[ {src:"https://img.icons8.com/color/48/000000/nodejs.png",skilltype:"Node"} ,{src:"https://img.icons8.com/color/48/000000/react-native.png",skilltype:"React"} ]}/>
     <SkillsComponent title={"Other"} skills={[ {src:"https://img.icons8.com/color/48/000000/nodejs.png",skilltype:"Node"} ,{src:"https://img.icons8.com/color/48/000000/react-native.png",skilltype:"React"} ]}/>
    
    <div className="col-1">
       
        <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node"/>
      
        </div>
  
    <div className="col-1">
    <img icons src="https://img.icons8.com/color/48/000000/react-native.png"/>
       
        </div>
        <div className="col-1">
      
        <img src="https://img.icons8.com/color/48/000000/mongodb.png"/>
       
        </div>
        <div className="col-1">
      
        <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/>
     
        </div>
        <div className="col-1">
       
        <img src="https://img.icons8.com/ios/50/000000/typescript.png"/>
        </div>
        <div className="col-1">
        <img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
        </div>
        <div className="col-1">   <img src="https://img.icons8.com/color/48/000000/json--v1.png"/></div>
        <div className="col-1"><img src="https://img.icons8.com/color/48/000000/git.png"/></div>
        <div className="col-1"><img src="https://img.icons8.com/color/48/000000/graphql.png"/></div>
        <div className="col-1"><img src="https://img.icons8.com/color/48/000000/redux.png"/></div>
        <div className="col-1"><img src="https://img.icons8.com/color/48/000000/docker-container.png"/></div>
        <div className="col-1"><img src="https://img.icons8.com/color/48/000000/amazon-web-services.png"/></div>
     
    </div>)
}
export default Skills