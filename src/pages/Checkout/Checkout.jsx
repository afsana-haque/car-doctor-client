import React, { useContext } from 'react';
import banner from "../../assets/images/checkout/checkout.png"
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {
    const service = useLoaderData();
    const { title, _id, price, img} = service;
    const {user} = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Service book successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div>
            <div className='relative mb-14'>
                <img src={banner} alt="" className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 '>
                        <h2 className='text-6xl font-bold'>Check Out</h2>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <button className="btn btn-error text-white mr-4">Home/Checkout</button>
                </div>
            </div>
            <h2 className='text-center text-3xl font-bold py-6'>Book Service: {title}</h2>
            <div className='card w-full shadow-2xl bg-base-100 mb-16'>
                <div className="card-body">
                    <form onSubmit={handleBookService}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name='date' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' defaultValue={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due amount</span>
                                </label>
                                <input type="text" defaultValue={"$" + price} className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Order Confirm" className="btn btn-error text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;