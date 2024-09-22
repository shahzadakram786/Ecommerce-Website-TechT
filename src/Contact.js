import styled from "styled-components";

const Contact = () => {

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              // color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
        <h2 className="common-heading">Contact page</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.9281665915328!2d73.08048319999999!3d33.633104499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9588690ff4cd%3A0x44a9e3263439699f!2sGB%20Mountain%20Foods!5e0!3m2!1sen!2s!4v1726927219570!5m2!1sen!2s" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/manwgjpa" method="Post" className="contact-inputs" >
              <input type="text" placeholder="username" name="username" required autoComplete="off" />
              <input type="email" name="Email" placeholder="Email" autoComplete="off" required/>

              <textarea placeholder="Enter Your Message" name="message" rows="10" cols="30" id=""></textarea>
              <input className="shadow-lg shadow-indigo-500/40 rounded-xl  " type="submit" value="send" />
            </form>
          </div>
        </div>
  </Wrapper>;
};

export default Contact;
