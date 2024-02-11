import React from "react";
import MultiplePizzas from "../assets/k2.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        The Kapetol is a coffee shop in Parañaque that 
        focuses on coffee as an art form, using carefully selected
         beans from the finest coffee-growing regions.
        The shop offers a diverse menu of brews and
         espressos, catering to different palates. 
        The cozy atmosphere provides a perfect backdrop for
         meetings, catch-ups, or quiet reflections.
        The shop fosters a sense of community, where strangers
         become friends over shared love for good coffee. 
        The Kapetol's artisanal blends, pastries, and treats are
         carefully curated to create an extraordinary experience.
        </p>
      </div>
    </div>
  );
}

export default About;