import React from 'react';
import leftimg from '../../../assets/left.jpg';


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
                    <p className='text-justify my-3'> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <button className="bg-yellow-400 hover:bg-blue-400  button">
                        Read More
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Habout;