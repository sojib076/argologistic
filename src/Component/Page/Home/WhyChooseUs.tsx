import React from 'react';
import human from '../../../assets/human.jpg'
import { GiHelp, GiTruce } from 'react-icons/gi';
const WhyChooseUs = () => {

    type Service = {
        icon?: JSX.Element
        title: string;
        description: string;
    }
    const whychosesection: Service[] = [
        {
            icon: <GiTruce />,
            title: "Reliability",
            description: "We have a proven track record of delivering shipments on time, every time."
        },
        {
            icon: <GiHelp />,
            title: "Customer-Centric Approach",
            description: "Our dedicated team goes the extra mile to understand and meet our clients' unique needs."
        },

    ]

    return (
        <div className=' lg:py-[100px] py-10  bg-[#FFFBED]'>
            <div className='grid lg:grid-cols-2 lg:p-10 p-2 text-center lg:text-left gap-10'>
                <div className=' '>
                    <h6 className='section-subtitle  text-[#1141BE]'>
                        Why Choose Us
                    </h6>
                    <h1 className='section-title  text-[#3E3F41]'>
                        We are the best in the business
                    </h1>
                    <p className="section-para   ">We're unparalleled in the industry. With top-notch service, unmatched expertise, and a commitment to excellence, we're simply the best in the business.</p>
                    <button className="bg-yellow-400 hover:bg-blue-400  button lg:ml-0">
                        Button
                    </button>

                    <div className='grid lg:grid-cols-2 lg:mt-10 gap-5 mt-5'>

                        {
                            whychosesection.map((service, index) => (

                                <div key={index} className="bg-white border border-gray-200 rounded-3xl shadow-xl w-[100%] pt-2  mx-auto flex flex-col items-center justify-center">
                                    <span className=" text-4xl lg:mr-2 rounded-full bg-yellow-400 p-2 shadow-black shadow-md  " > {service.icon}</span>
                                    <div className="text-center ">
                                        <h1 className="text-[15px] font-bold mt-5">{service.title}</h1>
                                        <p className=" text-[#3E3F41] text-[14px] w-[90%] mx-auto pb-10 mt-2 ">{service.description}</p>
                                    </div>
                                </div>

                            ))
                        }



                    </div>
                </div>

                <div>
                    <img src={human} alt="human holding books" className='rounded-2xl' />
                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;