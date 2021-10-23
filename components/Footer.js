import React from "react";
import SocialFollow from "./social-media";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Feature",
      child: [
        { title: "LOREM IPSUM", link: "/" },
        { title: "LOREM IPSUM", link: "/" },
        { title: "LOREM IPSUM", link: "/" },
        { title: "LOREM IPSUM", link: "/" },
      ],
    },
    {
      id: 2,
      title: "About Us",
      child: [
        { title: "Contact Us", link: "/" },
        { title: "FAQs", link: "/" },
        { title: "Privacy Policy", link: "/" },
      ],
    },
  ];

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
              {links.map((link, key) => (
                <div className="column" key={key} md={4}>
                  <h6 className="text-dark mb-3">{link.title}</h6>
                  <ul className="list-unstyled company-sub-menu">
                    {link.child.map((fLink, key) => (
                      <li key={key}>
                        <a href={fLink.link}>{fLink.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="column">
                <h6 className="text-dark mb-3">Our Address</h6>
                <p className="text-muted f-14">
                  1234 Lorem Ipsum dummy text, 12345
                </p>
                <h6 className="text-muted pb-2">Email: email@email.com</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className='column'>
            <div>
              <p>2020 © Name. Design by Name</p>
            </div>
          </div>
        </div>
      </div>
      <SocialFollow />
    </section>
  );
};
export default Footer;
