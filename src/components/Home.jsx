import { Helmet } from 'react-helmet-async';
import Accordions from './Accordions';
import Estates from './Estates';
import Slider from './Slider';
import Testimonials from './Testimonials';


const Home = () => {
    
    return (
        <div>
          <Helmet>
            <title>Casa Spot</title>
          </Helmet>
          <div className='items-center text-center justify-center border'>
            

        </div>
      <Slider></Slider>

      <Estates></Estates>

        <Accordions></Accordions>
        <Testimonials></Testimonials>
        </div>
    );
};

export default Home;