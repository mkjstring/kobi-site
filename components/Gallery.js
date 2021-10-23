import React from 'react';
const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <div className='container'>
          <div className='column'>
            <div>
              <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </div>
            <div className='column' md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </div>
        </div>
      :
      <div className="row">
        <div className='column'>
          <div>
            <div>
              <i></i>
            </div>
            <h5>{feature.title}</h5>
            <p >{feature.desc}</p>
            <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </div>
        <div className="column">
          <div>
            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
          </div>
        </div>
      </div>
      )
    }
    </>
  );
}
const Gallery = () => {
const features = [
    {id : 1, img : "./images/45.png", title : "LOREM IPSUM", desc : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link : "/"},
    {id : 2, img : "./images/Group Members.png", title : "LOREM IPSUM", desc : "Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.", link : "/"},
    {id : 3, img : "./images/45.png", title : "LOREM IPSUM", desc : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link : "/"},
  ];
return (
    <section className="section" id="feature">
      <div className='container'>
        <div className='row' >
          <div className='column'>
            <div>
              <h3><span className="text-warning">GALLERY</span></h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </div>
        </div>
        <FeatureBox features={features} />
      </div>
    </section>
  );
}
export default Gallery;