import React from 'react';
import banner_1 from "../../../assets/images/banner/5.jpg"
import banner_2 from "../../../assets/images/banner/1.jpg"
import banner_3 from "../../../assets/images/banner/2.jpg"
import banner_4 from "../../../assets/images/banner/4.jpg"


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner_1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-error text-white mr-4">Discover More</button>
                    <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner_2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-error text-white mr-4">Discover More</button>
                    <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                  </div>
                </div>
                <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner_3} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-error text-white mr-4">Discover More</button>
                    <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                  </div>
                </div>
                <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner_4}className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-error text-white mr-4">Discover More</button>
                    <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;