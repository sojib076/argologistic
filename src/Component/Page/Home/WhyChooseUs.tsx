import React from 'react';
import human from '../../../assets/human.jpg'
const WhyChooseUs = () => {
    return (
        <div className=' lg:py-[100px] py-10  bg-[#FFFBED]'>
            <div className='grid lg:grid-cols-2 lg:p-10 p-2 text-center lg:text-left gap-10'>
                <div className='lg:w-[90%] mx-auto '>
                    <h6 className='section-subtitle  text-[#1141BE]'>
                        Why Choose Us
                    </h6>
                    <h1 className='section-title  text-[#3E3F41]'>
                        We are the best in the business
                    </h1>
                    <p className="section-para    ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam architecto alias odio facilis dignissimos voluptate obcaecati fuga in eum esse molestiae modi pariatur distinctio delectus, quasi culpa. Odit, eos! Dolorem.</p>
                    <button className="bg-yellow-400 hover:bg-blue-400  button lg:ml-0">
                        Button
                    </button>

                    <div className='grid lg:grid-cols-2 lg:mt-10 gap-5 mt-5'>
                        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl w-[100%] pt-2  mx-auto flex flex-col items-center justify-center">
                            <img src="https://freeiconshop.com/wp-content/uploads/edd/android-flat.png" alt="Icon" className="w-10 h-10 lg:mr-2" />
                            <div className="text-center mt-4">
                                <h1 className="text-lg font-bold">Title</h1>
                                <p className=" text-[#3E3F41] text-[14px] w-[90%] mx-auto pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam architecto alias odio facilis dignissimos voluptate obcaecati feos! Dolorem.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl w-[100%] pt-2  mx-auto flex flex-col items-center justify-center">
                            <img src="https://freeiconshop.com/wp-content/uploads/edd/android-flat.png" alt="Icon" className="w-10 h-10 lg:mr-2" />
                            <div className="text-center mt-4">
                                <h1 className="text-lg font-bold">Title</h1>
                                <p className=" text-[#3E3F41] text-[14px] w-[90%] mx-auto pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam architecto alias odio facilis dignissimos voluptate obcaecati feos! Dolorem.</p>
                            </div>
                        </div>


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