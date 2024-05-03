import axios from 'axios';
import React from 'react';

import { MdDelete } from 'react-icons/md';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

const Details: React.FC = () => {

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

    const signleloaderdata = useLoaderData();

    const productData: Product | undefined = typeof signleloaderdata === 'object' ? signleloaderdata as Product : undefined;

    const handelupdate = (e) => {
        e.preventDefault();
// this is for update
        const Alldata = {
            SenderName: e.target.name.value || productData?.SenderName,
            SenderNumber: e.target.buyerNumber.value || productData?.SenderNumber,
            Price: e.target.price.value || productData?.Price,
            SenderLocation: e.target.location.value || productData?.SenderLocation,
            ReciverName: e.target.buyerName.value || productData?.ReciverName,
            ReciverPhoneNumber: e.target.phoneNumber.value || productData?.ReciverPhoneNumber,
            ReciverLocation: e.target.ReciverLocation.value || productData?.ReciverLocation,
        };
        axios({
            method: 'put',
            url: `http://localhost:3000/api/v1/order/${productData?._id}`,
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
    const navigate = useNavigate();

    const handelDelete = (e) => {
        e.preventDefault();
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
                    url: `http://localhost:3000/api/v1/order/${productData?._id}`,
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
        // Create a temporary input element
        const tempInput = document.createElement('input');
        // Set its value to the tracking number text
        tempInput.value = productData?.trcknumber;
        // Append it to the body
        document.body.appendChild(tempInput);
        // Select the text inside the input
        tempInput.select();
        // Copy the selected text
        document.execCommand('copy');
        // Remove the temporary input element
        document.body.removeChild(tempInput);
      };

    return (
        <div>

            <div className=" w-[1080px] mx-auto p-6 bg-gray-400 rounded-lg shadow-md font-['Akshar']">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-semibold mb-4 font-['Akshar']  border p-2 border-black rounded-2xl "> Update Your Order</h2>
                    <h2 className="text-2xl font- mb-4 border-black border p-2 rounded-2xl cursor-pointer hover:hover:scale-90  ease-linear  transition " onClick={handleCopy}> Tracking Number : {productData?.trcknumber}</h2>

                    <button className="text-4xl font-semibold mb-4 text-red-900 hover:scale-125 ease-linear  transition  " onClick={handelDelete}> <MdDelete /> </button>

                </div>
                <form className="space-y-4" onSubmit={handelupdate}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Sender Name</label>
                        <input placeholder={productData?.SenderName} type="text" id="name" name="name" className="mt-1 
                        block p-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="buyerNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input placeholder={productData?.SenderNumber} type="text" id="buyerNumber" name="buyerNumber" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input placeholder={productData?.Price} type="text" id="price" name="price" className="mt-1 p-2 focus:ring-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700"> Sender Location</label>
                        <input placeholder={productData?.SenderLocation} type="text" id="location" name="location" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="buyerName" className="block text-sm font-medium text-gray-700"> Revicer Name</label>
                        <input placeholder={productData?.ReciverName} type="text" id="buyerName" name="buyerName" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input placeholder={productData?.ReciverPhoneNumber} type="text" id="phoneNumber" name="phoneNumber" className="mt-1 p-2 f block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>

                        <label htmlFor="ReciverLocation" className="block text-sm font-medium text-gray-700"> Reciver Location </label>
                        <input placeholder={productData?.ReciverLocation} type="text" id="ReciverLocation" name="ReciverLocation" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default Details;
