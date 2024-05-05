import React, { useEffect, useState } from 'react';
import Header from '../../../Header/Header';
import { Link, Outlet } from 'react-router-dom';
import { FaArrowAltCircleRight, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';

const Dashboard = () => {

  type Product = {
    _id: string,
    SenderName: string,
    SenderNumber: number,
    Price: number,
    SenderLocation: string,
    ReciverName: string,
    ReciverPhoneNumber: string,
    ReciverLocation: string,
    status: string,
    trcknumber: string
  }


  const [allproduct, setAllproduct] = useState<Product[]>([]);
  const [singleOrder, setSingleOrder] = useState<Product>();

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/order/')
      .then((response) => {
        const reversed = response.data.reverse();
        console.log(reversed);
        setAllproduct(reversed)
        
      })
  }, [singleOrder]) 


  const handelSingleOrder = (productid: string)  => {
   
    axios.get<Product>(`http://localhost:3000/api/v1/order/${productid}`)
      .then((response) => {
        const result = response.data;
        setSingleOrder(result)
      })
  }

  const handelDelivery = (id: string, Status: string) => {

    if (Status === 'Cancel') {

      Swal.fire({
        title: 'Are you sure?',
        text: "You want to cancel this order",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Cancel it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.patch(`http://localhost:3000/api/v1/order/${id}`,
            { status: Status })
            .then((response) => {
              handelSingleOrder(id);
            })
        }
      })

    } else {
      axios.patch(`http://localhost:3000/api/v1/order/${id}`,
        { status: Status })
        .then((response) => {
          handelSingleOrder(id);
          Swal.fire({
            icon: 'success',
            title: `${Status} successfully`,
            showConfirmButton: false,
            timer: 1500

          })
        })
    }

  }

  return (
    <div className='overflow-hidden font-["Akshar"]'>

      <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-10  '>
        <div className='lg:col-span-1'>

          <div className=" ">
            <input type="text" placeholder="Search" className=" bg-transparent border-none outline-none w-[90%] h-12 p-5  bg-stone-300 bg-opacity-40 rounded-2xl shadow " />
          </div>

          <div>
            <div className='lg:w-[388px] w-[100%] lg:h-[100vh] bg-slate-200 rounded-xl p-2   mt-5'>
              <div className='flex justify-between items-center'> 
              <h1 className=' section-subtitle'>
                New Orders 
                  <span className='ml-2'>        {
                  allproduct?.filter(product => product.status !== 'Delivery' && product.status !== 'Cancel').length
                }</span>
              </h1>
              <button className='bg-green-500 text-white  rounded-md  px-2 py-2  '>
                <Link to='/dashboard/admin'> View All Order</Link>
              </button>
            </div>

            {
              allproduct?.length>= 0 ? allproduct?.map((product: Product) => (

                product.status !== 'Delivery' && product.status !== 'Cancel' &&
                <div className='mt-5 bg-white shadow-2xl rounded-xl p-5 flex justify-between' key={product._id}>
                  <h1 className='text-sm font-[Akshar] font-semibold p-1'>
                    {product.SenderName}
                  </h1>

                  <Link to={''} onClick={() => handelSingleOrder(product._id)} className='text-green-500'>
                    {/* send prodcuts is to funciton  */}
                    <button className='bg-green-500 text-sm  text-white rounded-md p-2 hover:scale-90 ease-linear  transition '>
                      Quick view
                    </button>
                  </Link>
                  <h1 className={` text-white text-sm rounded-md p-2   capitalize
                  ${product?.status === 'Cancel' ? 'bg-red-800' : 'bg-green-500'} `}>
                    {product?.status}
                  </h1>
                </div>
              )) :
                <div>
                  <h1 className='section-subtitle ml-[20%] mt-[20%]  '> No New Order </h1>

                </div>
            }
          </div>
        </div>

      </div>

      <div className='col-span-2 mt-10 p-10 '>

        {
          singleOrder ?

            <div>
              <div className="lg:w-[100%]  border-neutral-300 border-2 p-3 pb-10  rounded-3xl ">
                <div className='flex justify-between p-5 items-center '>
                  <h1 className='section-subtitle'> Tracking Number </h1>
                  <h1 className={`text-white text-sm rounded-md p-2
                     ${singleOrder?.status === 'Cancel' ? 'bg-red-800' : 'bg-green-500'}
                     `}>

                    {
                      singleOrder?.trcknumber
                    }
                  </h1>
                  <h1 className={`text-white text-sm rounded-md p-2
                     ${singleOrder?.status === 'Cancel' ? 'bg-red-800' : 'bg-green-500'}
                     `}>

                    {
                      singleOrder?.status
                    }
                  </h1>
                </div>

                <div className=' flex justify-between shadow-xl p-4 items-center  mt-5 bg-white rounded-xl  '>
                  <h1 className="text-neutral-600 text-sm font-semibold   ">{singleOrder?.SenderName}</h1>
                  <Link to={`/dashboard/details/${singleOrder?._id}`} className='text-green-500'>
                    <FaArrowAltCircleRight className='text-2xl hover:scale-150 ease-linear  transition ' />
                  </Link>
                </div>
                <div className=' flex justify-between   items-center shadow-xl p-8 mt-10  bg-white rounded-xl '>

                  <div className='flex  flex-col gap-2  '>
                    <div>
                      <h1 className="text-neutral-600 text-sm font-semibold ">Weight</h1>
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
                      <h1 className="text-neutral-600 text-sm font-semibold    "> Reciver Name </h1>
                    </div>
                    <h1 className=" text-sm font-semibold  text"> {singleOrder.ReciverName}</h1>

                  </div>

                </div>

                {
                  singleOrder.status === 'pending' &&
                  (<div onClick={() => handelDelivery(singleOrder._id, 'Shipped')} className=" hover:scale-90  ease-linear  transition  cursor-pointer lg:w-[90%]  text-center h-11 lg:px-6 py-3 bg-white rounded-[56px] shadow  mt-5 mx-auto">
                    <button className="text-green-500  font-bold   "  > Order Processed</button>
                  </div>)
                }
                {singleOrder.status === 'Shipped' &&

                  <div onClick={() => handelDelivery(singleOrder._id, 'Out for Delivery')} className=" hover:scale-90  cursor-pointer ease-linear  transition lg:w-[90%]  text-center h-11 lg:px-6 py-3 bg-white rounded-[56px] shadow  mt-5 mx-auto">
                    <button className="text-green-500  font-bold  "  > Out for Delivery </button>
                  </div>
                }

                {singleOrder.status === 'Out for Delivery' &&

                  <div onClick={() => handelDelivery(singleOrder._id, 'Delivery')} className="  hover:scale-90 cursor-pointer  ease-linear  transition lg:w-[90%]  text-center h-11 lg:px-6 py-3 bg-white rounded-[56px] shadow  mt-5 mx-auto">
                    <button className="text-green-500  font-bold  "  > Delivery</button>
                  </div>

                }
                {singleOrder.status === 'Out for Delivery' &&

                  <div onClick={() => handelDelivery(singleOrder?._id, 'Cancel')} className=" hover:scale-90  cursor-pointer ease-linear  transition  lg:w-[90%]  text-center h-11 lg:px-6 py-3 bg-white rounded-[56px] shadow  mt-5 mx-auto">
                    <button className="text-green-500  font-bold   "  > Cancel </button>
                  </div>
                }

              </div>

            </div> :
            <div className='lg:p-20'>
              <h1 className='section-title  '>
                Hello Admin , Please select an order to view details
              </h1>
            </div>
        }

      </div>
    </div>



    </div >
  );
};

export default Dashboard;