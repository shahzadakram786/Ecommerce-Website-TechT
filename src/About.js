import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {

  const nickName = useProductContext()

  const data = {
    name: "Shahzad Ecommerce About Page"
  }
  return <><HeroSection myData={data} />
    {nickName}
  </>
  
};






export default About;
 