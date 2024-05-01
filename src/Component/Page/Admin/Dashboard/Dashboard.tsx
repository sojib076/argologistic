import React, { useEffect, useState } from 'react';
import Header from '../../../Header/Header';
import { Link, Outlet } from 'react-router-dom';
import { FaArrowAltCircleRight, FaSearch } from 'react-icons/fa';
import axios from 'axios';

const Dashboard = () => {

  type Product = {
    _id: string;
    Name: string;
    Price: number;
    Location: string;
    BuyerName: string;
    PhoneNumber: string;
  }

  const [allproduct, setAllproduct] = useState<Product[]>([]);
  const [singleOrder, setSingleOrder] = useState();

  useEffect(() => {
    axios.get<Product[]>('http://localhost:3000/api/v1/order/')
      .then((response) => {
        setAllproduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handelSingleOrder = (productid: string) => {
    console.log(typeof productid);
    axios.get(`http://localhost:3000/api/v1/order/${productid}`)
      .then((response) => {
        setSingleOrder(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }

  return (
    <div>


      <div className='grid grid-cols-3 gap-10  '>
        <div className='col-span-1'>

          <div className="  ">
            <input type="text" placeholder="Search" className=" bg-transparent border-none outline-none w-[90%] h-12 p-5  bg-stone-300 bg-opacity-40 rounded-2xl shadow " />
          </div>
          {/* Card details */}

          <div>
            <div className='w-[388px] h-[100vh] bg-white  p-5 mt-5'>
              <h1 className='text-center section-subtitle'>
                New Orders
              </h1>
              {
          allproduct && allproduct.map((product) => (
                  <div className='mt-5 shadow-2xl p-5 flex justify-between' key={product._id}>
                    <h1 className='text-sm font-[Akshar] font-semibold p-1'>
                      {product.SenderName}
                    </h1>

                    <Link to={''} onClick={() => handelSingleOrder(product._id)} className='text-green-500'>
                      {/* send prodcuts is to funciton  */}
                      <button className='bg-green-500 text-sm  text-white rounded-md p-2'>
                        Quick view
                      </button>
                    </Link>

                    <button className='bg-green-500 text-white text-sm rounded-md p-2'>
                  {product?.status }
                     *
                    
                    </button>


                  </div>
                ))
              }
            </div>
          </div>

        </div>
        <div className='col-span-2 mt-10 p-10 '>

          {
            singleOrder ? <div>
              <div className="w-[100%] h-[] border-neutral-300 border-2 p-3 pb-10  ">
                <div className='flex justify-between p-5 '>
                  <h1 className='section-subtitle'> Details items </h1>
                  <h1 className='bg-green-500 text-white text-sm rounded-md p-2'>
                  {
                    singleOrder?.status
                  }
                  </h1>

                </div>

                <div className=' flex justify-between shadow-xl p-4 items-center  mt-5 '>
                  <h1 className="text-neutral-600 text-sm font-semibold   ">{singleOrder?.SenderName}</h1>
                  <Link to={`/dashboard/details/${singleOrder?._id}`} className='text-green-500'> 
                    <FaArrowAltCircleRight className='text-2xl' />
                  </Link>
                </div>
                <div className=' flex justify-between   items-center shadow-xl p-8 mt-10   '>

                  <div className='flex  flex-col gap-2  '>
                    <div>
                      <h1 className="text-neutral-600 text-sm font-semibold    ">Weight</h1>
                    </div>
                    <h1 className=" text-sm font-semibold  text"> 5kg</h1>

                  </div>
                  <div className='flex  flex-col gap-2  '>
                    <div>
                      <h1 className="text-neutral-600 text-sm font-semibold  ">Due </h1>
                    </div>
                    <h1 className=" text-sm font-semibold  text">{singleOrder.Price}$ </h1>
                  </div>
                  <div className='flex  flex-col gap-2  '>
                    <div>
                      <h1 className="text-neutral-600 text-sm font-semibold    ">Distance</h1>
                    </div>
                    <h1 className=" text-sm font-semibold  text"> 50 kmt </h1>

                  </div>

                </div>
                <div className=" w-[90%]  text-center h-11 px-6 py-3 bg-white rounded-[56px] shadow  mt-5 mx-auto">
                  <button className="text-green-500  font-bold  "  > Mark as Out for delivery </button>
                </div>
              </div>

            </div> : <div className='p-20 '>

              <h1 className='section-title'>
                Hello Admin , Please select an order to view details
              </h1>
            </div>
          }

        </div>
      </div>



    </div>
  );
};

export default Dashboard;