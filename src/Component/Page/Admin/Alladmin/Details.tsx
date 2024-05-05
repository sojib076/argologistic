import axios from 'axios';
import React from 'react';
import { FaCopy } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

const Details = () => {
    const navigate = useNavigate();

    type Product = {
        _id: string,
        SenderName: string,
        SenderNumber: string,
        Price: string,
        SenderLocation: string,
        ReciverName: string,
        ReciverPhoneNumber: string,
        ReciverLocation: string,
        status: string,
        trcknumber: string,

    }

    const signleloaderdata = useLoaderData() as Product;



    const handelupdate = (e) => {
        console.log(typeof e)

        e.preventDefault();
       
        const Alldata = {
            SenderName: e.target.name.value || signleloaderdata?.SenderName,
            SenderNumber: e.target.buyerNumber.value || signleloaderdata?.SenderNumber,
            Price: e.target.price.value || signleloaderdata?.Price,
            SenderLocation: e.target.location.value || signleloaderdata?.SenderLocation,
            ReciverName: e.target.buyerName.value || signleloaderdata?.ReciverName,
            ReciverPhoneNumber: e.target.phoneNumber.value || signleloaderdata?.ReciverPhoneNumber,
            ReciverLocation: e.target.ReciverLocation.value || signleloaderdata?.ReciverLocation,
        };
        axios({
            method: 'put',
            url: `http://localhost:3000/api/v1/order/${signleloaderdata?._id}`,
            data: Alldata,
        }).then((response) => {
            Swal.fire({
                title: 'Order Updated',
                text: 'Order Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        });
    }


    // this is for delete


    const handelDelete = (e) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: 'delete',
                    url: `http://localhost:3000/api/v1/order/${signleloaderdata?._id}`,
                }).then((response) => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    navigate('/dashboard/admin')

                });
            }
        });

    }

    const handleCopy = () => {
        const tempInput = document.createElement('input');
    
        tempInput.value = signleloaderdata?.trcknumber;

        document.body.appendChild(tempInput);
      
        tempInput.select();
    
        document.execCommand('copy');
        
        document.body.removeChild(tempInput);
    };

    return (
        <div>

            <div className=" w-[1080px] mx-auto p-6 bg-gray-400 rounded-lg shadow-md font-['Akshar']">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-semibold mb-4 font-['Akshar']  border p-2 border-black rounded-2xl "> Update Your Order</h2>
                    <h2 className="text-2xl font- mb-4 border-black border p-2 rounded-2xl cursor-pointer hover:hover:scale-90  ease-linear  transition flex  " onClick={handleCopy}> Tracking  : {signleloaderdata?.trcknumber} <FaCopy></FaCopy> </h2>

                    <button className="text-4xl font-semibold mb-4 text-red-900 hover:scale-125 ease-linear  transition  " onClick={handelDelete}> <MdDelete /> </button>

                </div>
                <form className="space-y-4" onSubmit={handelupdate}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Sender Name</label>
                        <input placeholder={signleloaderdata?.SenderName} type="text" id="name" name="name" className="mt-1 
                        block p-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="buyerNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input placeholder={signleloaderdata?.SenderNumber} type="text" id="buyerNumber" name="buyerNumber" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input placeholder={signleloaderdata?.Price} type="text" id="price" name="price" className="mt-1 p-2 focus:ring-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700"> Sender Location</label>
                        <input placeholder={signleloaderdata?.SenderLocation} type="text" id="location" name="location" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="buyerName" className="block text-sm font-medium text-gray-700"> Revicer Name</label>
                        <input placeholder={signleloaderdata?.ReciverName} type="text" id="buyerName" name="buyerName" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input placeholder={signleloaderdata?.ReciverPhoneNumber} type="text" id="phoneNumber" name="phoneNumber" className="mt-1 p-2 f block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>

                        <label htmlFor="ReciverLocation" className="block text-sm font-medium text-gray-700"> Reciver Location </label>
                        <input placeholder={signleloaderdata?.ReciverLocation} type="text" id="ReciverLocation" name="ReciverLocation" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default Details;
