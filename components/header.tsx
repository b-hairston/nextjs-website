'use client'
import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setSticky(true);
      } else if (window.scrollY < 180) {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <Navbar color="light" light expand="md" sticky={sticky ? "top" : undefined}>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="feature">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="experience">Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="about">About Me</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
