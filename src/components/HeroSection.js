import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button"

const HeroSection = ({ myData }) => {
    const { name } = myData;
    return (
        <Wrapper className="container">
            <div className="flex p-40 gap-40">
                <div className="hero-section-data">
                    <p className="intro-data"> Welcome to </p> <h1> {name} </h1>{" "}
                    <p >
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repudiandae veniam ducimus velit at reiciendis exercitationem aliquid, consequatur assumenda maxime.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis obcaecati soluta unde, magnam quia natus est sint veritatis architecto?{" "}
                    </p>{" "}
                    <NavLink>
                        <Button> Shop Now </Button>{" "}
                    </NavLink>{" "}
                </div>{" "}
                {/* our homepage img  */}
                <div className="hero-section-image " >
                    <img src="images/hero.jpg" alt="hero-section-img"
                        className="img-style" />
                </div>
            </div>{" "}
        </Wrapper>
    );
};
const Wrapper = styled.section``;

export default HeroSection;
