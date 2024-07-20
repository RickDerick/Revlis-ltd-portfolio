import React from "react";
import "./Aboutus.css";
import greenenenergy from "../../img/greenenergyphoto.jpeg";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Aboutus = () => {
  return (
    <div className="AboutUs" id="about-us">
      <div className="one">
        <Card className="flex-fill">
          <Card.Body>
            <Card.Title>
              <span className="title-part1">Get to Know</span>
              <span className="title-part2"> About Us</span>
            </Card.Title>
            <Card.Text>
            <p className="short-text">
                We are dedicated to sustainable development and recognize the vast potential of renewable energy in advancing Africa's progress toward a brighter future. Our specialized column on renewable energy aims to highlight the transformative impact of clean and sustainable energy solutions across the continent.
              </p>
              <p className="full-text">
                We are dedicated to sustainable development and recognize the vast potential of renewable energy in advancing Africa's progress toward a brighter future. Our specialized column on renewable energy aims to highlight the transformative impact of clean and sustainable energy solutions across the continent. We cover a wide range of renewable resources, including solar, wind, hydroelectric, and geothermal energy, and their crucial role in addressing energy challenges while combating climate change. Our column features the latest innovations, projects, and success stories, demonstrating how renewable energy can empower communities, drive economic growth, and enhance quality of life.
              </p>
            </Card.Text>
            <Button variant="primary" className="green-button">Read More</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="image">
        <Image src={greenenenergy} fluid alt="greenEngergy missing" />
      </div>
    </div>
  );
};

export default Aboutus;
