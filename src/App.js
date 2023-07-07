import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MainNav from "./MainNav";
import SideBar from "./components/SideBar";

import "./Apps.css";

function App(props) {
  const [isH1, setIsH1] = useState({ display: "block" });

  const Heading = {
    transform: isH1.display === "none" ? "translateX(100%)" : "translateX(0)",
    transition: "transform 0.5s ease-in-out",
  };

  const handleClick = () => {
    if (isH1.display === "block") {
      setIsH1({ display: "none" });
    } else {
      setIsH1({ display: "block" });
    }
  };

  return (
    <div>
      <div className="mainContainer">
        <Parallax pages={4} pointerEvents={true}>
      
          <ParallaxLayer offset={0} speed={0.8}>
            <div className="animation_layer parallax mountain" id="mountain1"></div>
          </ParallaxLayer>
         
          <ParallaxLayer offset={0} speed={0.6}>
            <div className="animation_layer parallax sky" id="mountain2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.01}>
          <ParallaxLayer offset={0} speed={3}>
            <div className="animation_layer parallax snow" id="snow"></div>
          </ParallaxLayer>
            <div style={Heading}>
              <h1>  <span  >Welcome  </span> &nbsp;to my world</h1>
            </div>
          </ParallaxLayer>
        </Parallax>
        <MainNav onClick={handleClick} />
        <SideBar
          style={
            isH1.display === "block"
              ? { display: "none" }
              : { display: "block" }
          }
        />
      </div>
    </div>
  );
}

export default App;
