import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  // this is  for  styling of the navlink
  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
        }
      }
    }
  `;

  return (
    <Nav>
      <div className="navbar">
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link Home">
              Home{" "}
            </NavLink>{" "}
            <NavLink to="about" className="navbar-link About">
              {" "}
              About{" "}
            </NavLink>{" "}
            <NavLink to="contact" className="navbar-link Contact">
              {" "}
              Contact{" "}
            </NavLink>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </Nav>
  );
};

export default Nav;
