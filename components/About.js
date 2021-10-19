import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-container">
          <div className="row">
            <div className="column">
              <div>
                <h3 className="about-header">
                  About <span className="text-warning">Us</span>
                </h3>
                <p className="descriptive-text">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="column">
              <h2>Lorem Ipsum has been the industry's standard dummy text</h2>
            </div>
            <div>
              <div>
                <div className="column">
                  <h6 className="mission-header">Our Mission</h6>
                  <p className="descriptive-text">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type
                  </p>
                </div>
                <div className="column">
                  <h6 className="vision-header">Our Vision</h6>
                  <p className="descriptive-text">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
