import React from 'react'
import{FaStarHalfAlt , FaStar} from 'react-icons/fa'
import{AiOutlineStar} from 'react-icons/ai'
import styled from 'styled-components'

const Stars = ({stars , reviews}) => {

    const ratingStar = Array.from({length:5}, (elem, index) => {
        let number =  index + 0.5;
            debugger;
        return(<>
        
  
         <span key={index}>
            {
                stars >= index + 1 ? (
                <FaStar className='icon' />
                ): stars >= number ? (
                    <FaStarHalfAlt className='icon'/>
                ):
                <AiOutlineStar className='icon'/>
             }

        </span>
       
        
        
        
        
        </>) 

    })


  return (
  <Wrapper>
    <div className='icon-style'>
        {ratingStar}
    <p>({reviews})</p>
    </div>
    
  </Wrapper>)
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    flex-direction:row;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Stars