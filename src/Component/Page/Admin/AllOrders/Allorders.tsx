import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

type Product =
    {
        _id: string,
        SenderName: string,
        SenderNumber: number,
        Price: number,
        SenderLocation: string,
        ReciverName: string,
        ReciverPhoneNumber: string,
        ReciverLocation: string,
        status: string
    }



const Allorders = () => {
    const [allproduct, setAllproduct] = useState<Product[]>([]);

    useEffect(() => {
        axios.get<Product[]>(`${process.env.REACT_APP_API_URL}/order/`)
            .then((response) => {
                setAllproduct(response.data);

            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try later',
                })
            })
    }, []);

    const handelsort = (sort: string) => {
        if (sort === 'Delivery' || sort === 'Cancel') {
            axios.get<Product[]>(`${process.env.REACT_APP_API_URL}/order/`)
                .then((response) => {
                    const Delivered = response.data.filter((product) => product.status === sort)
                    setAllproduct(Delivered)
                })
        } else {
            axios.get<Product[]>(`${process.env.REACT_APP_API_URL}/order/`)
                .then((response) => {
                    setAllproduct(response.data);
                })
        }

    }

    return (
        <div>
            <h1 className="text-4xl text-center font-['Akshar']"> Sort by</h1>
            {/*  Radio drop down button  */}
            <div className="flex justify-center space-x-4   font-['Akshar'] capitalize">
                <div className="flex items-center space-x-2">
                    <input type="radio" id="cancel" name="sort" value="all" onClick={() => handelsort('Cancel')} />
                    <label htmlFor="cancel"> cancel </label>

                    <input type="radio" id="deliver" name="sort" value="all" onClick={() => handelsort('Delivery')} />
                    <label htmlFor="cancel" > Delivered</label>

                    <input type="radio" id="all" name="sort" value="all" onClick={() => handelsort('All')} />
                    <label htmlFor="cancel" > All</label>
                </div>
                <div />
            </div>
            <table className="table-auto lg:w-[1080px] w-0 overflow-auto shadow-slate-500 shadow-xl font-['Akshar'] ">

                <thead>
                    <tr className=''>
                        <th className="px-4 py-2">Sender Name</th>
                        <th className="px-4 py-2">Due </th>
                        <th className="px-4 py-2">Location</th>
                        <th className="px-4 py-2">Reciver Name</th>
                        <th className="px-4 py-2">Reciver Number</th>
                        <th className="px-4 py-2"> Status</th>
                    </tr>
                </thead>
                <tbody className='capitalize' >
                    {allproduct?.map((product: Product) => (
                        <tr key={product._id} className="bg-gray-100 mx-auto"    >

                            <td className="border px-4 py-2">{product.SenderName}</td>
                            <td className="border px-4 py-2">{product.Price}</td>
                            <td className="border px-4 py-2">{product.SenderLocation}</td>
                            <td className="border px-4 py-2">{product.ReciverName}</td>
                            <td className="border px-4 py-2">{product.SenderNumber}</td>
                            <td className={`border px-4 py-2 ${product?.status === 'Cancel' ? 'bg-red-800' : 'bg-green-500'} `}>{product.status}</td>
                            <td className="border px-2 py-2  bg-blue-900 text-white hover:bg-yellow-500 hover:scale-125 ease-linear  transition "> <Link to={`/dashboard/details/${product?._id}`}>  Details </Link></td>
                        </tr>
                    ))
                    }

                </tbody>
            </table>
        </div>

    );
};

export default Allorders;
