import React from 'react'
import {Link} from "react-scroll"
function Top() {
  return (
    <div className="header">
    <div className="header_left">
    <h1>
      Develop<span>er</span>
    </h1>
    
      <Heading ml="8" size="md"fontweight='semibold' color="cyan.400" >Develo<span>per</span></Heading>
      
      </div> */}
     
      {/* <Spacer />
      
        <div className="header_right">
    <Link to="About" smooth={true} duration={500}>
        <h4> About Me </h4>
      </Link>
      
      
    
       <Link  to="Skills" smooth={true} duration={500}>
         <h4> Skills</h4>
       </Link>
     
      
      <Link to="Projects" smooth={true} duration={500}>
        <h4> Projects </h4>
      </Link>
      
      
     <Link to="Contact" smooth={true} duration={500}>
        <h4> Contact </h4>
      </Link>
      
     </div>
     </div>
     );
}
export default Top;
