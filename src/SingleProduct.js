import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/productcontex";


const API = "https://api.pujakaitem.com/api/products";


const SingleProduct = () => {

  const {getSingleProduct , singleProduct} = useProductContext()
// console.log(singleProduct)

  const {id} = useParams();
  // console.log("id", id)


  const {
    id: alias , name , company , price , description, category,stock , stars , reviews
  } =singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  },[getSingleProduct , id])
  
 

  return (
    <Wrapper>
     <div className="container">
      <h1>{name}</h1>{" "}
      <h3>{alias}</h3>
      <h3>{company}</h3>
      <h2>{stars}</h2>
      <h3>{reviews}</h3>
      <h4>{price}</h4>
      <h3>{category}</h3>
      <h4>avaliable: {stock}</h4>
      <p>{description}</p>
      </div>  {" "}
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
