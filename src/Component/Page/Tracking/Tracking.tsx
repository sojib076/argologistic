import axios from 'axios';
import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import Swal from 'sweetalert2';

const Tracking = () => {

  const [trackingNumber, setTrackingNumber] = useState() as object[] | any;

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target[0].value;


    axios.get(`http://localhost:3000/api/v1/order/track/${id}`)
      .then((res) => {

        setTrackingNumber(res.data);


      }).catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Enter Correct Tracking Number!',
        })
        setTrackingNumber(null)
      })


  };

  const steps = [
    {
      number: 1,
      title: "Package Placed",
      description: `Your Package was placed on ${trackingNumber?.date}`
    },
    {
      number: 2,
      title: "Package Processed",
      description: "Your Package was processing"
    },
    {
      number: 3,
      title: "Shipped",
      description: "Your Package will be at our hub soon"
    },
    {
      number: 4,
      title: "Out for Delivery",
      description: "Your Package is at your local hub. Please collect it"
    },
    {
      number: 5,
      title: "Delivered",
      description: "Your Package was delivered Successfully"
    }, {
      number: 6,
      title: "Cancel",
      description: "Your Order is Cancelled"
    }
  ];



  const arraylength = steps.length;
  const status = trackingNumber?.status;
  if (status === 'pending') {
    steps.splice(2, arraylength - 1);
  } else if (status === 'Shipped') {
    steps.splice(3, arraylength - 1);
  }
  else if (status === 'Out for Delivery') {
    steps.splice(4, arraylength - 1);
  } else if (status === 'Delivery') {
    steps.splice(5, arraylength - 1);
  }

  return (
    <div >
      <div className='lg:w-[70%] w-[100%] mx-auto mt-[5%] vh-[100vh]  font-["Akshar"] '>
        <h1 className='section-title'> Please Enter Your Code </h1>
        <form onSubmit={handleSubmit} className=" grid lg:grid-cols-2 grid-cols-1 gap-5 ">
          <input required
            type="text"

            placeholder="Enter tracking number"
            className="bPackage bPackage-gray-300 rounded-l px-4 py-2 focus:outline-none focus:bPackage-blue-500" />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 button"
          >
            Search
          </button>
        </form>

        <div className='my-10 mb  '>
          {
            trackingNumber? steps.map((step) => (
              <div className="flex items-center mt-[2%] hover:scale-110 ease-in-out transition   " key={step.number}>
                <div className={`h-8 w-8 flex items-center justify-center rounded-full text-white ${status === "Cancel" ? "bg-red-500" : "bg-gradient-to-br from-blue-500 to-blue-700"
                  } `}>
                  {step.number}
                </div>
                <div className="ml-4 mt-4">
                  <h1 className="text-gray-700">{step.title}</h1>
                  <p className="ml-4 text-gray-500"> {step.description} </p>
                </div>
              </div>
            )) : <h1> 
              Please Check Your invoice For Tracking Number
            </h1>
          }
        </div>

      </div>

    </div>
  );
};

export default Tracking;
