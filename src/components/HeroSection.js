import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeroSection = () => {
    return (
        <Wrapper className="container">
            <div className="grid grid-two-column">
                <div className="hero-section-data">
                    <p className="intro-data"> Welcome to </p> <h1> Shahzad Store </h1>{" "}
                    <p>
                        {" "}
                        la aldk fasdkfjas dfsdkfjasdfkasdfjakldfj asd fjas as dfasld fd fjsd
                        s dadfd sd fsd fsdf{" "}
                    </p>{" "}
                    <NavLink>
                        <button className="hero-button"> Shop Now </button>{" "}
                    </NavLink>{" "}
                </div>{" "}
            </div>{" "}
        </Wrapper>
    );
};
const Wrapper = styled.section``;

export default HeroSection;
