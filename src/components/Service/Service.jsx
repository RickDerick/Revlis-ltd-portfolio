import React, { useContext } from "react";
import { themeContext } from "../../Context";
import ServicesCard from "../ServicesCard/ServicesCard";
import solarImage from "../../img/solar.jpeg";
import engineerImage from "../../img/person.jpeg";
import carbonImage from "../../img/grass.jpeg";
import "./Service.css"


const Service = ()=>{

     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="service" id="service">
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Our Awesome</span>
        <span>services</span>
        {/* <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane> */}
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div> */}
      </div>
    <div class="serviceCard">
    <div className="one">
    <ServicesCard 
    title={"Residential"}
    text={"Elevate your home with sustainable solutions. Athwatt Limited offers expert solar design and installation services, providing customized solar solutions for energy efficiency. Experience the power of solar energy and reduce reliance on traditional power sources. We also specialize in reverse osmosis water purification systems, ensuring clean and safe drinking water. Transform your residence with solar activities and embrace a greener lifestyle for a healthier, more sustainable future."}
    photo={solarImage}
    />
    </div>
    <div className="two">
      <ServicesCard 
      title={"Commercial"}
      text={"Empower your business with sustainable solutions. Athwatt Limited offers commercial solar design, energy efficiency, and water management services. Harness the power of solar energy through tailored installations, reducing operational costs and demonstrating environmental responsibility. Optimize energy usage with advanced audits and eco-friendly practices, minimizing your carbon footprint. Implement efficient water management systems, conserving resources and lowering expenses. Ignite positive change, elevate your brand's sustainability, and embrace a greener future for your business."}
      photo={engineerImage}
      />
    </div>
    <div className="three">
    <ServicesCard
     title={"Carbon Offsets"}
     text={"Take action against climate change. Athwatt Limited offers carbon offset programs to help businesses reduce their carbon footprint. Partner with us to quantify emissions, develop customized strategies, and invest in verified projects like reforestation and renewable energy. Show your commitment to sustainability, engage stakeholders, and build a positive brand image. Join the global movement towards a greener future by offsetting your carbon footprint and making a lasting impact on the planet."}
    photo={carbonImage}
    />
    </div>
  </div>
</div>

  );
};
export default Service;