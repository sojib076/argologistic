import React from 'react';
import leftimg from '../../../assets/left.jpg';
import { FaTruckFast } from "react-icons/fa6";
import { GiScooter } from "react-icons/gi";


const Habout = () => {
    return (
        <div className='pt-[100px] pb-[50px] p-6 bg-[#F7F8FF] '>
            <div className='grid lg:grid-cols-2 lg:gap-0 '>

                <div className='lg:grid lg:grid-cols-2 w-[60%] mx-auto '>
                    <div className=''>
                        <img src={leftimg} className='lg:w-[89%] lg:h-32 mb-6   rounded-xl' alt="" />
                        <img src={leftimg} className='lg:w-[90%] lg:h-96    rounded-xl ' alt="" />

                    </div>
                    <div>
                        <img src={leftimg} className='lg:w-[90%] lg:block hidden 
                        rounded-xl
                        ' alt="this image can be found" />

                    </div>
                </div>
                <div className='lg:mt-0 mt-[20%] lg:text-left '>
                    <h1 className='section-subtitle text-[#1141BE]'>
                        About Us
                    </h1>
                    <h1 className='section-title text-[#3E3F41]'>
                        We Provide Logistics Services  Focused On Quality
                    </h1>
                    <p className='text-justify my-3 text-[#3E3F41] '>
                    At Argo Logistic , we specialize in quality-focused logistics services. With a relentless dedication to excellence, we ensure every client receives top-tier service, setting new standards in the industry. From freight transportation to supply chain management, trust us for precision and professionalism in every aspect of logistics.
                    </p>
                    <button className="bg-yellow-400 hover:bg-blue-400  button mb-5">
                        Read More
                    </button>
                    {/* This */}

                    <div className='h-[66px] bg-white shadow-2xl'>
                        <div className='grid grid-cols-2  '>
                            <div className="flex justify-center items-center p-3 gap-5">
                                <FaTruckFast className=" text-5xl lg:mr hover:animate-bounce transition " />
                                <div>
                                    <h1 className=" text-[#3E3F41] lg:text-[18px]  
                                    font-medium font-['Akshar'] ">We are the best</h1>
                                </div>
                            </div>
                            <div className="flex justify-center items-center p-3 gap-5">
                                <GiScooter className=" text-5xl lg:mr hover:animate-bounce transition  " />
                                <div>
                                    <h1 className=" text-[#3E3F41] lg:text-[18px]
                                      font-medium font-['Akshar'] ">We are the best</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Habout;