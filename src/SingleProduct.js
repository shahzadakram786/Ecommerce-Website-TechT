import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/productcontex";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import FormatPrice from "./helpers/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { Container } from "./styles/Container";
import Stars from "./components/Stars";



const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  // console.log(singleProduct)

  const { id } = useParams();
  // console.log("id", id)

  const {
    id: alias,
    image,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [getSingleProduct, id]);

  if (isSingleLoading) {
    return <div className="page_loading">Loading . . . </div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="flex gap-20 flex-wrap md:flex-nowrap lg:flex-nowrap"  >
          <div className="product_images">
            <MyImage imgs={image} />
          </div>

          <div className="product-data">
            <h2>{name}</h2>
           <div className="flex">
            <Stars className="flex flex-col" stars = {stars} reviews={reviews}/>
            </div> 
            <p>{stars}</p>
            <p>{reviews}</p>
            <div className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 25000} />
              </del>
              <p className="product-data-price product-data-real-price">
                Deal of the Day : <FormatPrice price={price} />
              </p>
              <p>
                {description}
              </p>
              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon"/>
                  <p>Free Delivery</p>
                </div> 
                 
                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon"/>
                  <p>30 Days Replacement</p>
                </div> 

                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon"/>
                  <p>Delivered</p>
                </div> 

                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon"/>
                  <p>2 Years Warranty</p>
                </div> 
              </div>

              <div className="product-data-info">
                <p>Avaliable: 
                  <span>{stock > 0 ? "In Stock" : "Not Avaliable"}</span></p>
                  <p>
                    ID : <span>{id}</span>
                  </p>
                  <p>
                    Category: <span>{category ? category.charAt(0).toUpperCase() + category.slice(1) : ""}</span> 
                  </p>
                  <p>
                    Brand : <span>{company}</span>
                  </p>
              </div> 

            </div>
          </div>
        </div>
      </Container>
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
    margin-top:2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 2rem;
      padding:2rem;
      

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          // background-color: rgba(220, 220, 220, 0.5);
          background-color:black;
          color:white;
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
          margin:auto;
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
