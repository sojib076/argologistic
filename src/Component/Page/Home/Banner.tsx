import React from 'react';

const iconimage = './money.png'

const Banner = () => {
    return (
        <div className='  '>
            <div className='bg-banner   '>
                <div className="overlay pb-20">
                    <div className='lg:p-20 p-10'>
                        <h6 className='text-[#FFCD06] lg:text-xl font-[Akshar] font-medium  leading-[28px] uppercase  lg:text-left text-center'>
                            We’re Providing Best Services
                        </h6>
                        <h1 className='lg:text-[65px] lg:leading-[80px] text-[38px] leading-10 font-bold text-white font-[Akshar]  lg:w-[70%] lg:text-left text-center'>
                            Worldwide  Shipping and Professional Solutions
                        </h1>
                        <p className='lg:w-[60%] my-3 text-white text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorum voluptas quam, maxime unde itaque earum magnam ab adipisci totam quibusdam, rem quae optio aperiam molestiae, facilis libero explicabo? Aut?</p>
                        <button className=" bg-blue-400 hover:bg-yellow-400   ml-[20%] button lg:ml-0">
                            Button
                        </button>

                    </div>

                </div>

            </div>

            {/* threre services name  */}

            <div className='w-[90%] mx-auto mb-10   '>
                <div className=' grid lg:grid-cols-3 grid-cols-1 shadow-2xl  mt-[-10%] '>
                    <div className="bg-white hover:bg-[#FFCD06] transition duration-300 ease-in-out lg:border-b-0 border-b-8 border-blue-900 ">
                        <div className="py-16 px-10">
                         <img src={iconimage} alt="" className="w-20 h-20 mr-4"  />
                            <div>
                                <h1 className="text-lg font-bold hover:text-blue-700 transition-colors duration-300">Service 1</h1>
                                <p className="text-sm hover:text-blue-700 transition-colors duration-300">Description of Service 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white hover:bg-[#FFCD06] transition duration-300 ease-in-out ">
                        <div className="py-16 px-10">
                         <img src={iconimage} alt="" className="w-20 h-20 mr-4"  />
                            <div>
                                <h1 className="text-lg font-bold hover:text-blue-700 transition-colors duration-300">Service 1</h1>
                                <p className="text-sm hover:text-blue-700 transition-colors duration-300">Description of Service 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white hover:bg-[#FFCD06] transition duration-300 ease-in-out ">
                        <div className="py-16 px-10">
                         <img src={iconimage} alt="" className="w-20 h-20 mr-4"  />
                            <div>
                                <h1 className="text-lg font-bold hover:text-blue-700 transition-colors duration-300">Service 1</h1>
                                <p className="text-sm hover:text-blue-700 transition-colors duration-300">Description of Service 1</p>
                            </div>
                        </div>
                    </div>
             

                </div>
            </div>
        </div>
    );
};

export default Banner;