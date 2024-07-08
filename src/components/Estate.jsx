import { Link } from "react-router-dom"
import {useEffect} from "react";

// import PropTypes from 'prop-types'; // ES6
import AOS from 'aos';
import 'aos/dist/aos.css';
const Estate = ({estate}) => {


    useEffect(() => {
        AOS.init();
      }, [])
    const {estate_title, id, segment_name, description, price, status, area, location, facilities, image_url} = estate;
    return (
        <div data-aos="flip-left" className="  card w-96 bg-base-100 shadow-xl text-left">
            
<img src={image_url} alt="Shoes" />
  <div className="card-body">
    <h2 className="card-title">
    {estate_title}
      <div className="badge badge-secondary">{segment_name}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{status}</div> 
      <div className="badge badge-outline">{price}</div>

      <h2>Area: {area}</h2>
      <h2>Location: {location}</h2>
      <h2>{facilities}</h2>
    </div>
        
        <Link to={`/estateid/${id}`} >    <button className="btn btn-accent">ViewProperty</button></Link>


  </div>
</div>
    );
};

export default Estate;

// Estate.propTypes={
//     estate: PropTypes.node
// }