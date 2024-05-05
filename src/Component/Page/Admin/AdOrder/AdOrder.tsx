import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2'




const AdOrder = () => {

 type FormData = {
    SenderName: string,
    SenderNumber: string,
    Price: string,
    SenderLocation: string,
    ReciverName: string,
    ReciverPhoneNumber: string,
    ReciverLocation: string,
    status: string,
    trcknumber: string,
    date: string
 }

    const handleSubmit = (e) => {
        e.preventDefault();

        const Alldata :FormData = {
            SenderName: e.target.name.value,
            SenderNumber: e.target.buyerNumber.value,
            Price: e.target.price.value,
            SenderLocation: e.target.location.value,
            ReciverName: e.target.buyerName.value,
            ReciverPhoneNumber: e.target.phoneNumber.value,
            ReciverLocation: e.target.ReciverLocation.value,
            status: "pending",
            trcknumber: `argo${Math.floor(Math.random() * 1000000)}`,
            date: new Date().toLocaleDateString()
        };

        axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/order/`,
            data: Alldata,
        }).then((response) => {
            if (response) {
                Swal.fire({
                    title: 'Order Added',
                    text: 'Order Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                // reset form
                e.target.reset();
            }
        }).catch((error) => {
            console.log(error);
            Swal.fire({
                icon: 'info',
                title: 'Server Under Maintenance',
                text: 'Please try again Later!',
            })
        });
        ;
    };

    return (
        <div className=" lg:w-[1080px]  mx-auto p-6 bg-gray-400 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Add New Order</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Sender Name</label>
                    <input required type="text"  name="name" className="mt-1 block p-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="buyerNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="text" id="buyerNumber" name="buyerNumber" className="mt-1 p-2  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="text" id="price" name="price" className="mt-1 p-2
     block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700"> Sender Location</label>
                    <input type="text" id="location" name="location" className="mt-1 p-2   w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="buyerName" className="block text-sm font-medium text-gray-700"> Revicer Name</label>
                    <input type="text" id="buyerName" name="buyerName" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" className=" mt-1 p-2 focus:border-blue-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="ReciverLocation" className="block text-sm font-medium text-gray-700"> Recive rLocation</label>
                    <input type="text" id="ReciverLocation" name="ReciverLocation" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <button type="submit" className="
                w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-blue-900 
                 ease-linear  transition "
                >Submit</button>
            </form>
        </div>
    );
};

export default AdOrder;
