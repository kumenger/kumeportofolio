import react from 'react'
import { Card, Figure,Button } from "react-bootstrap";
const Projects=()=>{
    return( 
    <div className="row container-fluid " >
      <div className="col-xs-1 col-s-2 col-md-3 col-lg-4" style={{padding:"5%"}} >
      <Card style={{width:"340px",height:"300px"}} className=' '>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2uZ4BrSvvm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
  <Card.Body>
    <Card.Title className='pink'>discussion forum</Card.Title>
    
    <Button variant="primary">View Online</Button>{" "}
    <Button variant="primary">View Source Code</Button>
  </Card.Body>
</Card>
    
      </div>
      <div className="col-xs-2 col-s-2 col-md-3 col-lg-4" style={{padding:"5%"}}>    
       <Card style={{width:"340px",height:"300px"}} className=' '>
  
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/u8-RcGNyWOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
  
  <Card.Body>
    <Card.Title className='pink'>discussion forum</Card.Title>
    
    <Button variant="primary">View Online</Button>{" "}
    <Button variant="primary">View Source Code</Button>
  </Card.Body>
</Card></div>
      <div className="col-xs-2 col-s-2 col-md-3 col-lg-4" style={{padding:"5%"}}>    <Card style={{width:"340px"}} className=' bg-dark'>
  <Card.Img   src="https://i.ibb.co/K0n7PTk/Untitled2.png" style={{width:"100%",height:"100%", padding:"3%" ,objectFit:"contain"}} />
  <Card.Body>
    <Card.Title className='pink'>discussion forum</Card.Title>
    
    <Button variant="primary">View Online</Button>{" "}
    <Button variant="primary">View Source Code</Button>
  </Card.Body>
</Card></div>
      <div className="col-xs-2 col-s-2 col-md-3 col-lg-4" style={{padding:"5%"}}>     <Card style={{width:"340px"}} className=' bg-dark'>
  <Card.Img   src="https://i.ibb.co/K0n7PTk/Untitled2.png" style={{width:"100%",height:"100%", padding:"3%" ,objectFit:"contain"}} />
  <Card.Body>
    <Card.Title>discussion forum</Card.Title>
    
    <Button variant="primary">View Online</Button>{" "}
    <Button variant="primary">View Source Code</Button>
  </Card.Body>
</Card></div>
      <div className="col-xs-2 col-s-2 col-md-3 col-lg-4" style={{padding:"5%"}}>    <Card style={{width:"340px"}} className=' bg-dark'>
  <Card.Img   src="https://i.ibb.co/K0n7PTk/Untitled2.png" style={{width:"100%",height:"100%", padding:"3%" ,objectFit:"contain"}} />
  <Card.Body>
    <Card.Title className='pink'>discussion forum</Card.Title>
    
    <Button variant="primary">View Online</Button>{" "}
    <Button variant="primary">View Source Code</Button>
  </Card.Body>
</Card></div>
      <div className="col-xs-2 col-s-2 col-md-3 col-lg-4" style={{padding:"5%"}}>     <Card style={{width:"340px"}} className=' bg-dark'>
  <Card.Img   src="https://i.ibb.co/K0n7PTk/Untitled2.png" style={{width:"100%",height:"100%", padding:"3%" ,objectFit:"contain"}} />
  <Card.Body>
    <Card.Title className='pink' >discussion forum</Card.Title>
    
    <Button variant="primary">View Online</Button>{" "}
    <Button variant="primary">View Source Code</Button>
  </Card.Body>
</Card></div>
      <div className="col-xs-2 col-s-2 col-md-3 col-lg-4" style={{padding:"5%"}}>     <Card style={{width:"340px"}} className=' bg-dark'>
  <Card.Img   src="https://i.ibb.co/K0n7PTk/Untitled2.png" style={{width:"100%",height:"100%", padding:"3%" ,objectFit:"contain"}} />
  <Card.Body>
    <Card.Title className='pink'>Quit smooking discussion forum</Card.Title>
    
    <Button variant="primary">View Online</Button>{" "}
    <Button variant="primary">View Source Code</Button>
  </Card.Body>
</Card></div>
    </div>
  )
}
export default Projects