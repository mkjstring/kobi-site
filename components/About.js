import React from 'react';


const About = () => {
return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className='column'>
            <div>
              <h3>About <span className="text-warning">Us</span></h3>
              <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
            </div>
          </div>
        </div>
        <div>
          <div className='column'>
            <h2>Lorem Ipsum has been the industry's standard dummy text</h2>
          </div>
          <div>
            <div>
              <div className='column'>
                <h6>Our Mission</h6>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
              </div>
              <div className='column'>
                <h6>Our Vision</h6>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;