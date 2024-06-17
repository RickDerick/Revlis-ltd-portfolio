import React, { useContext } from "react";
import "./Aboutus.css";
import greenenenergy from "../../img/greenenergyphoto.jpeg";
import { themeContext } from "../../Context";
import {Link} from 'react-scroll';
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

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
                    Get To Know
                    </span>
                   <span>Us</span>
                <span class="text-start">we are dedicated to sustainable development and recognize the vast potential of renewable energy in advancing Africa's progress toward a brighter future. Our specialized column on renewable energy aims to highlight the transformative impact of clean and sustainable energy solutions across the continent. We cover a wide range of renewable resources, including solar, wind, hydroelectric, and geothermal energy, and their crucial role in addressing energy challenges while combating climate change. Our column features the latest innovations, projects, and success stories, demonstrating how renewable energy can empower communities, drive economic growth, and enhance quality of life</span>
                   <Link to="contact" smooth={true} spy={true}>
                     <button className="button s-button">Read More</button>
                    </Link>

                 <div className="f-icons">
                  <Insta color="#242D49" size={"3rem"} />
                  <Facebook color="#242D49" size={"3rem"} />
                  <Gitub color="#242D49" size={"3rem"} />
                </div>
                <p style={{ marginTop: "25px" }}>connect with us on social media</p>
              </div>
           </div>
          <div class="col">
               {/* right side */}
               <div className="right-side">
                <img src={greenenenergy} class="img-fluid" alt="greenEngergy missing"/>

               </div>
         
           </div>
        </div>
      </div>
  );
}

export default Aboutus
