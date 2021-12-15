import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Navbar dark expand="md">
        <Container>
          <NavbarBrand href="/">
            <Image
              className="logo"
              width="100"
              height="40"
              alt="logo"
              src="/img/kobi/logo.jpeg"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <Link href="/">HOME</Link>
              </NavItem>
              <NavItem>
                <Link href="/#gallery">GALLERY</Link>
              </NavItem>
              <NavItem className="menu-item">
                <Link className="menu-item" href="/About">
                  ABOUT
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/#service">SERVICES</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
