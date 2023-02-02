import React from 'react';

import {
    FaBell
}from "react-icons/fa";
import {
    GoPrimitiveDot
}from "react-icons/go";
function Niv(props){
    return  <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLft">
          <span className="lgo">{props.name}</span>
      </div>
      <div className="topRgt">
          <div className="topIcon">
          <FaBell/>
              <span className="topIconbadge"><GoPrimitiveDot/></span>
          </div>
          <div className="topIcon">
          Hi,Achintha
              <span className="topIconbadge"></span>
          </div>
      </div>
    </div>
  </div>
}
export default Niv;


    
