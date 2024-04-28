import React, { useState } from 'react';
import bgimg from '../../../assets/Design-Element-2.png'

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
                <p className='section-para lg:w-[50%] text-center mx-auto '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequatur dignissimos provident ad quisquam sed et molestias ex nostrum </p>
                <img src={bgimg} alt="" className='w-[95%] h-[300px] mt-[-12%] mx-auto lg:block hidden' />
                <div className='lg:w-[50%] mx-auto relative'>

                    <div className=" w-[80%] mx-auto">
                        <div className="overflow-hidden lg:py-0 py-10">
                            <div className="flex">

                                <div key={testimonials[currentIndex].id} 
                                className="flex flex-col items-center justify-center space-y-1 shadow-md p-4 mx-auto rounded-3xl w-[100%] lg:h-[150px] h-[200px] bg-[#F1F1F1]">
                                    <div className="flex">

                                        <svg

                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-yellow-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c-.3 0-.5.1-.7.3l-4.1 3.9-6 .6c-.3 0-.6.2-.8.4-.2.2-.3.5-.2.8l3.7 9-1 5.9c0 .3 0 .7.3.9.2.1.5.1.7 0l4.6-2.4 4.6 2.4c.2.1.5.1.7 0 .3-.2.3-.6.3-.9l-1-5.9 3.7-9c.1-.2 0-.6-.2-.8-.2-.2-.5-.4-.8-.4l-6-.6-4.1-3.9c-.2-.2-.4-.3-.7-.3zM12 18.2l-3.7 1.9.7-4.1-3-2.9 4.1-.6 1.6-3.7 1.6 3.7 4.1.6-3 2.9.7 4.1-3.7-1.9z" />
                                        </svg>
                                    </div>
                                  <div className='pb-5'> 
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