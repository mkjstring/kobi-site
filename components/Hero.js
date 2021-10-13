import React from 'react';

const Hero = () => {
  return (
    <section className="section position-relative">
      <div className='container'>
        <div className="row">
          <div className='column'>
            <div>
              <p>Lorem Ipsum</p>
              <h1>Simply dummy text of the printing <span className="text-primary font-weight-medium">Name</span></h1>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <a href="#" className="button">
                Find Out How <span>&#8594;</span>
              </a>
            </div>
          </div>
          <div>
            <div>
              <img src="/images/Group Members.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;