import React, { useState } from 'react';
import bgimg from '../../../assets/Design-Element-2.png'
import { IoStar } from "react-icons/io5";

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Jenny',
            role: 'Strategist',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 1,
            name: 'Sojib',
            role: 'Strategist',
            content: 'Lorem ipsum dolor sit amet,'
        },
        {
            id: 1,
            name: 'Sunny',
            role: 'Funny',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 1,
            name: 'Jenny',
            role: 'Strategist',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },

        // Add more testimonials as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);



    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };
    return (
        <div>
            <div className='lg:py-1 py-5'>
                <h1 className='section-subtitle text-blue-600 text-center '> Testimonial</h1>
                <h1 className='section-title text-center text-[#3E3F41]'> What Our Customers Say About Us Excellence</h1>
                <p className='section-para lg:w-[50%] text-center mx-auto '> Our customers rave about our commitment to excellence. From streamlined logistics solutions to personalized service, we're dedicated to surpassing expectations at every turn. Join us and experience the difference for yourself. </p>
              
                <div className='lg:w-[50%] mx-auto relative mt-10'>

                    <div className=" w-[100%] mx-auto">
                        <div className="overflow-hidden lg:py-0 ">
                            <div className="flex">

                                <div key={testimonials[currentIndex].id} 
                                className="flex flex-col items-center justify-center space-y-1 shadow-md p-4 mx-auto rounded-3xl w-[100%] lg:h-[250px]  h-[200px] bg-[#F1F1F1]">
                                    <div className="flex gap-3 mt-2">

                                    <IoStar className='text-2xl text-yellow-500'  />
                                    <IoStar className='text-2xl text-yellow-500'  />
                                    <IoStar className='text-2xl text-yellow-500'  />
                                    <IoStar className='text-2xl text-yellow-500'  />
                                    <IoStar className='text-2xl text-yellow-500'  />
                                    </div>
                                  <div className='p-5 mt-3'> 
                                  <p className=" text-[15px] font-normal text-[#000000] w-[90%] mx-auto text-justify">{testimonials[currentIndex].content}</p>
                                    <h3 className="text-center font-Akshar text-blue-800">{testimonials[currentIndex].name}</h3>
                                    <h6 className="text-center font-Akshar">{testimonials[currentIndex].role}</h6>
                                  </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="absolute bottom-1 top- left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`h-3 w-3 rounded-full bg-blue-500 ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;