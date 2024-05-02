import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Product = {
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


const Alladmin = () => {
    const [allproduct, setAllproduct] = useState<Product[]>([]);

    useEffect(() => {
        axios.get<Product[]>('http://localhost:3000/api/v1/order/')
            .then((response) => {
                setAllproduct(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <table className="table-auto lg:w-[1080px] w-0 overflow-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Buyer Name</th>
                    <th className="px-4 py-2">Phone Number</th>
                </tr>
            </thead>
            <tbody >
                {allproduct.map((product) => (
              <tr key={product._id} className="bg-gray-100 mx-auto"    >
              <td className="border px-4 py-2">{product.SenderName}</td>
              <td className="border px-4 py-2">{product.Price}</td>
              <td className="border px-4 py-2">{product.SenderLocation}</td>
              <td className="border px-4 py-2">{product.ReciverName}</td>
              <td className="border px-4 py-2">{product.SenderNumber}</td>
              <td className="border px-4 py-2"> <Link to={`/dashboard/details/${product?._id}`}> VIew Details </Link></td>
            
          </tr> 
                ))}
            </tbody>
        </table>

    );
};

export default Alladmin;
