import axios from 'axios';
import React, { useState } from 'react';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  console.log(trackingNumber);


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target[0].value;

    console.log(id);

    axios.get(`http://localhost:3000/api/v1/order/track/${id}`)
      .then((res) => {
        setTrackingNumber(res.data)
      })


  };

  return (
    <div >
      <div className='lg:w-[60%] w-[90%] mx-auto mt-[20%]  font-["Akshar"] '>
        <h1 className='section-title'> Please Enter Your Code </h1>
        <form onSubmit={handleSubmit} className=" grid lg:grid-cols-2 grid-cols-1 gap-5 ">
          <input
            type="text"

            placeholder="Enter tracking number"
            className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500" />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 button"
          >
            Search
          </button>
        </form>


        {/* 
          <div className="flex items-center">
            <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
              1
            </div>
            <div className="ml-4 mt-4">
              <h1 className="text-gray-700">Order Placed</h1>
              <p className="ml-4 text-gray-500">Your order was placed on 12th March 2022</p>
            </div>
          </div>
          <div className="flex items-center relative">
            <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
            <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
              2
            </div>
            <div className="ml-4 mt-4">
              <h1 className="text-gray-700">Order Processed</h1>
              <p className="ml-4 text-gray-500">Your order was processed on 12th March 2022</p>
            </div>
          </div>
          <div className="flex items-center relative">
            <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
            <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
              3
            </div>
            <div className="ml-4 mt-4">
              <h1 className="text-gray-700">Shipped</h1>
              <p className="ml-4 text-gray-500">Your order was shipped on 12th March 2022</p>
            </div>
          </div>
          <div className="flex items-center relative">
            <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
            <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
              4
            </div>
            <div className="ml-4 mt-4">
              <h1 className="text-gray-700">Out for Delivery</h1>
              <p className="ml-4 text-gray-500">Your order is out for delivery on 12th March 2022</p>
            </div>
          </div>
          <div className="flex items-center relative">
            <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
            <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700 rounded-full text-white">
              5
            </div>
            <div className="ml-4 mt-4">
              <h1 className="text-gray-700">Delivered</h1>
              <p className="ml-4 text-gray-500">Your order was delivered on 12th March 2022</p>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col space-y-8 my-20">
          {

            (trackingNumber === 'pending') &&
            <div className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
                1
              </div>
              <div className="ml-4 mt-4">
                <h1 className="text-gray-700">Order Placed</h1>
                <p className="ml-4 text-gray-500">Your order was placed on 12th March 2022</p>
              </div>
            </div>

          }
          {

            (trackingNumber === 'Shipped') &&
            <>
              <div className="flex items-center">
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
                  1
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">Order Placed</h1>
                  <p className="ml-4 text-gray-500">Your order was placed on 12th March 2022</p>
                </div>
              </div>

              <div className="flex items-center relative">
                <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
                  2
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">Order Processed</h1>
                  <p className="ml-4 text-gray-500">Your order was processed on 12th March 2022</p>
                </div>
              </div>

              <div className="flex items-center relative">
                <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
                  3
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">Shipped</h1>
                  <p className="ml-4 text-gray-500">Your order was shipped on 12th March 2022</p>
                </div>
              </div>

            </>
          }
          {

            (trackingNumber === 'Out for Delivery') &&
            <>
              <div className="flex items-center">
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
                  1
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">Order Placed</h1>
                  <p className="ml-4 text-gray-500">Your order was placed on 12th March 2022</p>
                </div>
              </div>

              <div className="flex items-center relative">
                <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
                  2
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">Order Processed</h1>
                  <p className="ml-4 text-gray-500">Your order was processed on 12th March 2022</p>
                </div>
              </div>

              <div className="flex items-center relative">
                <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
                  3
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">Shipped</h1>
                  <p className="ml-4 text-gray-500">Your order was shipped on 12th March 2022</p>
                </div>
              </div>
              <div className="flex items-center relative">
                <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
                  4
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">Out for Delivery</h1>
                  <p className="ml-4 text-gray-500">Your order is out for delivery on 12th March 2022</p>
                </div>
              </div>

            </>



          }

          {

            (trackingNumber === 'Delivery') &&

            <>
              <div className="flex items-center">
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
                  1
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">Order Placed</h1>
                  <p className="ml-4 text-gray-500">Your order was placed on 12th March 2022</p>
                </div>
              </div>

              <div className="flex items-center relative">
                <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
                  2
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">Order Processed</h1>
                  <p className="ml-4 text-gray-500">Your order was processed on 12th March 2022</p>
                </div>
              </div>

              <div className="flex items-center relative">
                <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
                  3
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">Shipped</h1>
                  <p className="ml-4 text-gray-500">Your order was shipped on 12th March 2022</p>
                </div>
              </div>
              <div className="flex items-center relative">
                <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white">
                  4
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">Out for Delivery</h1>
                  <p className="ml-4 text-gray-500">Your order is out for delivery on 12th March 2022</p>
                </div>
              </div>
              <div className="flex items-center relative">
                <div className="absolute h-px w-full bg-gray-300 top-0 left-6"></div>
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700 rounded-full text-white">
                  5
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">Delivered</h1>
                  <p className="ml-4 text-gray-500">Your order was delivered on 12th March 2022</p>
                </div>
              </div>

            </>


          }

        </div>

      </div>

    </div>
  );
};

export default Tracking;
