import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom'

const EstateDetails = () => {
    const estates = useLoaderData()
    const { id } = useParams()
    const estate = estates.find(estate => estate.id == id)
    
    return (
        <div className="hero min-h-screen bg-base-200">
            
            <Helmet>
                <title>{estate.estate_title}</title>
            </Helmet>
            <div>
                
            </div>
            <div className="hero-content flex-col lg:flex-row">
                <img src={estate.image_url} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{estate.estate_title}</h1>
                    <p className="py-6">{estate.description}</p>
                    <button  className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;