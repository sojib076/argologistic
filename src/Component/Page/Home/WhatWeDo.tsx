import React from 'react';
import { GiChaingun, GiHouse,GiTruck,GiScooter  } from 'react-icons/gi';
import { GoPackage } from "react-icons/go";
import { FaTemperatureHigh } from "react-icons/fa";


const WhatWeDo = () => {
    interface Service {
        icon?: JSX.Element|string;
        title: string;
        description: string;
    }
    const services: Service[] =[
        {
          title: "Freight Forwarding",
          description: "Tailored logistics solutions for seamless transportation of goods across the USA and beyond.",
           icon: <GiTruck />
        },
        {
          title: "Supply Chain Management",
          description: "Comprehensive strategies to optimize your supply chain, from sourcing to delivery, enhancing efficiency and reducing costs.",
          icon: <GiChaingun/>
        },
        {
          title: "Customized Warehousing",
          description: "State-of-the-art facilities and tailored storage solutions to meet your unique inventory management needs.",
          icon: <GiHouse/>
        },
        {
          title: "E-commerce Fulfillment",
          description: "Specialized services designed to handle the complexities of online retail, including order processing, packaging, and fast delivery.",
          icon: <GoPackage />
        },
        {
          title: "Temperature-Controlled Logistics",
          description: "Expert handling of perishable goods and sensitive materials, ensuring they reach their destination in optimal condition.",
          icon: <FaTemperatureHigh />
        },
        {
          title: " Last mile delivery",
          description: "Specialized expertise in managing oversized or unconventional shipments, providing innovative solutions for complex logistical challenges.",
          icon: <GiScooter/>
        }
      ]
      



    return (
        <div className='pt-[100px] pb-[0px]  bg-white'  >
            <div>
                <div>
                    <h6 className='section-subtitle text-center text-[#1141BE]'>
                        What We Do
                    </h6>
                    <h1 className='section-title text-center text-[#3E3F41]'>
                        Specialist Logistics Services
                    </h1>
                    <p className="section-para lg:w-[70%] w-[90%] mx-auto  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam architecto alias odio facilis dignissimos voluptate obcaecati fuga in eum esse molestiae modi pariatur distinctio delectus, quasi culpa. Odit, eos! Dolorem.</p>

                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 lg:gap-y-5'>
                        {
                            services.map((service, index) => (

                                <div key={index} className=" bg-white border hover:bg-gray-100 
                                 border-gray-200 rounded-3xl shadow-xl w-[90%]  pt-2  mx-auto flex flex-col items-center justify-center">

                                    <span className=" text-4xl lg:mr-2 rounded-full bg-yellow-400 p-2 shadow-black shadow-md  " > {service.icon}</span>

                                    <div className="text-center mt-4">
                                        <h1 className="text-lg font-bold">{
                                            service.title
                                        }</h1>
                                        <p className=" text-[#3E3F41] text-[14px] w-[90%] mx-auto pb-10 mt-5">
                                            {service.description}</p>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>

                {/* the we are logistic  */}
                <div className='we-banner  mt-[-5%] lg:h-[90vh] mx-auto py-10 '>
                    <div className=" flex justify-between">
                        <div className=''>


                        </div>
                        <div className=' mt-[10%] '>

                            <h6 className='section-subtitle text-[#FFCD06] text-center'>
                                We Are Logistics

                            </h6>
                            <h1 className='section-title w-[70%] text-white text-center mx-auto'>
                                Your guide to global logistics in World
                            </h1>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;