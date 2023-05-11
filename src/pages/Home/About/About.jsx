import React from 'react';
import person from "../../../assets/images/about_us/person.jpg"
import part from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={part} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 p-4'>
                    <h3 className='text-red-500 text-xl font-bold pb-6'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br/> & of experience<br/> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn btn-error text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;