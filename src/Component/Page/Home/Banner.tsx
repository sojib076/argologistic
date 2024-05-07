import React from 'react';

import icons from '../../../assets/truch.png';

import icons2 from '../../../assets/storehouse.png';

import icons3 from '../../../assets/delivery.png';



const Banner = () => {
    
    const allservices = [
        {
            servicename: 'Freight Transportation',
            des: 'Efficient shipping solutions for all your cargo needs, ensuring timely delivery across the USA.',
            icon: icons

        },
        {
            servicename: 'Warehousing and Distribution',
            des: 'Secure storage facilities and streamlined distribution services to optimize your supply chain management.',
            icon: icons2

        },
        {
            servicename: 'Last-Mile Delivery',
            des: 'Reliable and flexible delivery options to reach your customers doorstep with precision and speed.',
            icon: icons3
        }
    ]

    return (
        <div className='  '>

            <div className='bg-banner   '>
                <div className="overlay pb-20">
                    <div className='lg:p-20 p-10'>
                        <h6 className='text-[#FFCD06] lg:text-xl font-[Akshar] font-medium  leading-[28px] uppercase  lg:text-left text-center'>
                            We’re Providing Best Services
                        </h6>
                        <h1 className='lg:text-[65px] lg:leading-[80px] text-[38px] leading-10 font-bold
                         text-white font-[Akshar]  lg:w-[100%] lg:text-left text-center'>
                            USA Logistics: Nationwide Shipping Experts
                        </h1>
                        <p className='lg:w-[60%] my-3 text-white text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorum voluptas quam, maxime unde itaque earum magnam ab adipisci totam quibusdam, rem quae optio aperiam molestiae, facilis libero explicabo? Aut?</p>
                        <button className=" bg-blue-400 hover:bg-yellow-400   ml-[20%] button lg:ml-0">
                            Button
                        </button>

                    </div>

                </div>

            </div>



            <div className='w-[90%] mx-auto mb-10   '>
                <div className=' grid lg:grid-cols-3 grid-cols-1 shadow-2xl  mt-[-10%] text-justify '>
                    {
                        allservices.map((service, index) => {
                            return (
                                <div key={index} className="bg-white
                                 hover:bg-[#FFCD06]  duration-300  transition  ease-in-out l ">
                                    <div className="py-16 px-10  ">
                                        <img src={service.icon} alt="" className="w-10 h-10 mr-4 my-5" />
                                        <div>
                                            <h1 className="text-lg font-bold hover:text-blue-700 transition-colors duration-300">
                                                {service.servicename}
                                            </h1>
                                            <p className="text-sm hover:text-blue-700 transition-colors duration-300">
                                                {service.des}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;