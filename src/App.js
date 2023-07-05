import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ContactMe from "./pages/ContactMe";
import MainNav from "./MainNav";      
import classes from "./App.module.css";
import SideBar from "./components/SideBar";

// import planet from "./img/planet.png"

function App(props) {
  const [isH1, setIsH1] = useState({ display : 'block'});
const Heading = {
  transform: isH1.display === 'none' ? 'translateX(100%)' : 'translateX(0)',
  transition: 'transform 0.5s ease-in-out',
};
 

  const handleClick = () => {
    if (isH1.display === 'block' ) {
      setIsH1({ display: 'none' });
    } else {
      setIsH1({ display: 'block' });
    }
}




  return (
    <div className={classes.mainContainer} >
  
     <MainNav  onClick={handleClick}   />
     <SideBar style={isH1.display === 'block' ? { display: 'none' } : { display: 'block' }}
     />
      {/* <img className={classes.planet} src={planet} alt="planet" />{" "} */}
      <div style={Heading} >  
      <h1      style={isH1}   >Welcome to my world</h1>
        </div>
    </div>
  );
}

export default App; 
