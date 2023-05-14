import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className=''>
            <div className='text-center'>
            <h3 className='text-red-500 text-xl font-bold pb-2'>Service</h3>
            <h2 className="text-5xl font-bold py-6">Our Service Area</h2>
            <p className='pb-6'>The majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
                {
                    services.map(service => <ServicesCard 
                    key={service._id}
                    service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;