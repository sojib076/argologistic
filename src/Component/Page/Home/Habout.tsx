import React from 'react';
import leftimg from '../../../assets/left.jpg';


const Habout = () => {
    return (
        <div className='pt-[100px] pb-[50px] p-5 bg-[#F7F8FF] '>
            <div className='grid lg:grid-cols-2 '>

                <div className='lg:grid lg:grid-cols-2 w-[60%] mx-auto '>
                    <div className=''>
                        <img src={leftimg} className='lg:w-[89%] lg:h-32 mb-6   rounded-xl'  alt="" />
                        <img src={leftimg} className='lg:w-[90%] lg:h-96    rounded-xl '  alt="" />

                    </div>
                    <div>
                        <img src={leftimg} className='lg:w-[90%] lg:block hidden 
                        rounded-xl
                        ' alt="this image can be found" />
                
                    </div>
                </div>
                <div>
                    <h1>
                        About Us
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Habout;