import { useEffect } from "react";
import { useState } from "react";
import Estate from "./Estate";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Estates = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    const [estates, setEstates] = useState([]);
    useEffect(() =>{
        fetch('estatedata.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])

    const handleAdd = (p) =>{
        console.log(p);
    }

    return (
        <div className="mx-auto container">
            <h2 className="text-3xl text-center mb-4">Featured Estates</h2>
        <div data-aos="flip-left" className="grid grid-cols-3 gap-4">
            
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate} handleAdd={handleAdd}></Estate>)
                }
               
        </div>
        </div>
    );
};

export default Estates;