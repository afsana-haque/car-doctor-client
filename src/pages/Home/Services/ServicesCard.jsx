import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {_id, title, img, price} = service
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='font-bold text-red-500'>Price: ${price}</p>
                <div className="card-actions justify-end text-red-500">
                    <Link to={`/checkout/${_id}`}>
                    <FaArrowRight/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;