import React, {useState} from 'react';
import "./SideMenu.css"
import ProgressBar from './ProgressBar/ProgressBar'

function SideMenu(props) {
    return (
      <div className="SideMenu">
        <div className="SideHeader">
          <h1>RAPHAEL CARDOSO</h1>
        </div>

        <div className="profile">
        <div id="langlinks"></div>  

            <h3>PROFILE</h3>
            <p>
                I'm 19 years old, attending bachelor's degree in Information Systems. Passionate about technology and games, I use part of my day reading news, and learning about new market technologies. Natural from Mogi das Cruzes -SP
            </p>
        </div>

        <div className="Contact">
            <h3>CONTACT
            </h3>
            <p>
                +55 (11)97101-7819 <br/>
                Av. Dom Paulo Rolim Loureiro 776, Mogi das Cruzes-SP <br/>
                Github.com/Raphaelhcc <br/>
                Raphaelhecc@gmail.com
            </p>
        </div>
        <div className="progressDiv">
          <ProgressBar title={"SQL"} Percentage={80}/>
          <ProgressBar title ={"Javascript"} Percentage={65}/>
          <ProgressBar title ={"Python"} Percentage={30}/>

        </div>


    </div>
    );
  }
  
  export default SideMenu;
  