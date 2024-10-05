import React from "react";
import styled from "styled-components";
// import { useFilterContext } from "./context/filterContext";
// import Sort from "./components/Sort";

const Products = () => {

// const{filter_products} = useFilterContext()

// console.log("filterProduct = ", filter_products)

  return <Wrapper>
    <div className="container grid grid-filter-column">
      <div>
        {/* <filterSection/> */}
      </div>

      <section className="product-view--sort">
        <div className="sort-filter">
          {/* <Sort/> */}
        </div>
      </section>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
