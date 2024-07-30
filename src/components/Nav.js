import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

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
          text-tranform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s ease-in-out;
        }

&:hover,
&:active {
color: ${({ theme }) => theme.colors.helper};

}

// navbar-link {
// font-size:4.2rem;
// }.

}



.cart-trolley--link{
 position:relative;

 .cart-trolley {
 position:relative;
 font-size : 5.2rem;
 }

.cart-total--item{
width:2.4rem;
height:2.4rem;
position:absolute;
background-color:#000;
color:#000;
border-radius:50%;
display:grid;
place-items:center;
top:-20%;
left:70%;
background-color:${({ theme }) => theme.colors.helper}
}
    }
  `;

  return (
    <Nav>
      <div className="navbar">
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link home-link">
              Home{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink to="/products" className="navbar-link ">
              Products{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink to="/about" className="navbar-link about-link">
              About{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink to="/contact" className="navbar-link contact-link">
              Contact{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />{" "}
              <span className="cart-total--item"> 10 </span>{" "}
            </NavLink>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </Nav>
  );
};

export default Nav;
