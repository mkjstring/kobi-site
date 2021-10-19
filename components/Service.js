import React from 'react';

const Service = () => {
  const services = [
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  ]
  
  return (
    <section className="section" id="service">
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <div className="title">
              <h3 className="header-3"><span className="header-text">Services</span></h3>
              <p className="descriptive-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </div>
        </div>
        <div className='row'>
          {
            services.map((service, key) =>
              <div className='column'>
                <div>
                  <div className="service-list">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="service-title">{service.title}</h5>
                  <p className="service-description">{service.desc}</p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
}
export default Service;