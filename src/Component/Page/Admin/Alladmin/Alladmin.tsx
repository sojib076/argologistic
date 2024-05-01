import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Product = {
    _id: string;
    Name: string;
    Price: number;
    Location: string;
    BuyerName: string;
    PhoneNumber: string;
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
        <table className="table-auto lg:w-[1080px]">
            <thead>
                <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Buyer Name</th>
                    <th className="px-4 py-2">Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {allproduct.map((product) => (
                    <tr key={product._id} className="bg-gray-100">
                        <td className="border px-4 py-2">{product.Name}</td>
                        <td className="border px-4 py-2">{product.Price}</td>
                        <td className="border px-4 py-2">{product.Location}</td>
                        <td className="border px-4 py-2">{product.BuyerName}</td>
                        <td className="border px-4 py-2">{product.PhoneNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
};

export default Alladmin;
