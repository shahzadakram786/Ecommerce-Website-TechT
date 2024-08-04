import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button"

const HeroSection = ({ myData }) => {
    const { name } = myData;
    return (
        <Wrapper className="container">
            <div className="grid grid-two-column">
                <div className="hero-section-data">
                    <p className="intro-data"> Welcome to </p> <h1> {name} </h1>{" "}
                    <p>
                        {" "}
                        la aldk fasdkfjas dfsdkfjasdfkasdfjakldfj asd fjas as dfasld fd fjsd
                        s dadfd sd fsd fsdf la aldk fasdkfjas dfsdkfjasdfkasdfjakldfj asd fjas as dfasld fd fjsd
                        s dadfd sd fsd fsdf la aldk fasdkfjas dfsdkfjasdfkasdfjakldfj asd fjas as dfasld fd fjsd
                        s dadfd sd fsd fsdf{" "}
                    </p>{" "}
                    <NavLink>
                        <Button> Shop Now </Button>{" "}
                    </NavLink>{" "}
                </div>{" "}
                {/* our homepage img  */}
                <div className="hero-section-image">
                    <img src="images/hero.jpg" alt="hero-section-img"
                        className="img-style" />
                </div>
            </div>{" "}
        </Wrapper>
    );
};
const Wrapper = styled.section``;

export default HeroSection;
