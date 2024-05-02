import axios from 'axios';
import React, { useEffect } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';
import { FiDelete } from 'react-icons/fi';
import { LuDelete } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

const Details: React.FC = () => {

    type Product = {
        SenderName: string,
        SenderNumber: number,
        Price: number,
        SenderLocation: string,
        ReciverName: string,
        ReciverPhoneNumber: string,
        ReciverLocation: string,
        status: string
    }

    const signleloaderdata = useLoaderData();

    const productData: Product | undefined = typeof signleloaderdata === 'object' ? signleloaderdata as Product : undefined;


    const handelupdate = (e) => {
        e.preventDefault();

        const Alldata = {
            SenderName: e.target.name.value || productData?.SenderName,
            SenderNumber: e.target.buyerNumber.value || productData?.SenderNumber,
            Price: e.target.price.value || productData?.Price,
            SenderLocation: e.target.location.value || productData?.SenderLocation,
            ReciverName: e.target.buyerName.value || productData?.ReciverName,
            ReciverPhoneNumber: e.target.phoneNumber.value || productData?.ReciverPhoneNumber,
            ReciverLocation: e.target.ReciverLocation.value || productData?.ReciverLocation,
            status: "pending"
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
    const navigate = useNavigate();

   const handelDelete = (e) => {
        e.preventDefault();
       
        // Swal.fire({
        //     title: 'Order Deleted',
        //     text: 'Order Deleted Successfully',
        //     icon: 'success',
        //     confirmButtonText: 'Ok'
        // })
        // axios({
        //     method: 'delete',
        //     url: `http://localhost:3000/api/v1/order/${productData?._id}`,
        // }).then((response) => {
            
         

        // });
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
                navigate('/dashboard/admin')
                axios({
                        method: 'delete',
                        url: `http://localhost:3000/api/v1/order/${productData?._id}`,
                    }).then((response) => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                    });

    

              });
            }
          });

    }

    return (
        <div>

            <div className=" w-[1080px] mx-auto p-6 bg-gray-400 rounded-lg shadow-md">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-semibold mb-4">Update your Order</h2> 
                    <button className="text-4xl font-semibold mb-4 text-red-700" onClick={handelDelete}> <MdDelete /> </button> 

                </div>
                <form className="space-y-4" onSubmit={handelupdate}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Sender Name</label>
                        <input placeholder={productData?.SenderName} type="text" id="name" name="name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block p-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="buyerNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input placeholder={productData?.SenderNumber} type="text" id="buyerNumber" name="buyerNumber" className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input placeholder={productData?.Price} type="text" id="price" name="price" className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700"> Sender Location</label>
                        <input placeholder={productData?.SenderLocation} type="text" id="location" name="location" className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="buyerName" className="block text-sm font-medium text-gray-700"> Revicer Name</label>
                        <input placeholder={productData?.ReciverName} type="text" id="buyerName" name="buyerName" className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input placeholder={productData?.ReciverPhoneNumber} type="text" id="phoneNumber" name="phoneNumber" className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="ReciverLocation" className="block text-sm font-medium text-gray-700"> Reciver Location </label>
                        <input placeholder={productData?.ReciverLocation} type="text" id="ReciverLocation" name="ReciverLocation" className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default Details;
