import React from "react";
import SocialFollow from "./social-media";

const Footer = () => {
  return (
    <section className="footer section">
      <div className="container">
        <div className="row">
          <div className="column">
            <div>
              <p>email@email.com</p>
              <h6>+99 1234-5678-9</h6>
            </div>
          </div>
          <div className="column" lg={8}>
            <div className="row">
              <div className="column">
                <h6 className="mb-3">Contact</h6>
                <h6>+99 1234-5678-9</h6>
                <p className="f-14">
                  1234 Lorem Ipsum dummy text, 12345
                </p>
                <h6 className="pb-2">Email: email@email.com</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className='column'>
            <div>
            </div>
          </div>
        </div>
      </div>
      <SocialFollow />
    </section>
  );
};
export default Footer;
