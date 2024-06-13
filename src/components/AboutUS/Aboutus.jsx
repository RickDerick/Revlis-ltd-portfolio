import React, { useContext } from "react";
import "./Aboutus.css";
import greenenenergy from "../../img/greenenergyphoto.jpeg";
import { themeContext } from "../../Context";
import {Link} from 'react-scroll';

const Aboutus = () => {
     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
  <div class="container fluid">
      <div class="row">
          <div class="col">
              {/* dark Mode */}
              <div class="about-us">
                <span style={{ color: darkMode ? "white" : "" }}>
                    Who are We
                    </span>
                   <span>& What We Do</span>
                <span class="text-start">we are dedicated to sustainable development and recognize the vast potential of renewable energy in advancing Africa's progress toward a brighter future. Our specialized column on renewable energy aims to highlight the transformative impact of clean and sustainable energy solutions across the continent. We cover a wide range of renewable resources, including solar, wind, hydroelectric, and geothermal energy, and their crucial role in addressing energy challenges while combating climate change. Our column features the latest innovations, projects, and success stories, demonstrating how renewable energy can empower communities, drive economic growth, and enhance quality of life</span>
                   <Link to="contact" smooth={true} spy={true}>
                     <button className="button s-button">Read More</button>
                    </Link>
              </div>
           </div>
          <div class="col">
               {/* right side */}
       
               <img src={greenenenergy} class="img-fluid" alt="greenEngergy-photo missing"/>
         
           </div>
        </div>
      </div>
  );
}

export default Aboutus
