import React from 'react';

const WeAreinNumbers = () => {

    const growupnumber: {
        title: number;
        description: string;
    }[] = [{
        title: 25,
        description: "Year Of experience"
    },
    {
        title: 100,
        description: "Happy Clients"
    },
    {
        title: 1000,
        description: "Project Completed"
    },
    {
        title: 100,
        description: "Expert Members"
    },

        ]
    return (
        <div className='color-overlay-number'>
            <div className='pt-[100px] pb-[50px]  numberbg'>

                <div className=''>
                    <h2 className='section-subtitle text-center  text-[#FFCD06]'> We Are in Numbers  </h2>
                    <h1 className='section-title   text-center text-white   '> Global Achievements</h1>

                    <div className='grid lg:grid-cols-4 grid-cols-1 mt-10 gap-5'>
                        {
                            growupnumber.map((service, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-3xl shadow-xl w-[90%]  mx-auto  
                                    pt-10">
                                    <div className="text-center">
                                        <h1 className="text-5xl font-bold text-blue-900 "> {service.title} +</h1>
                                        <p className=" text-[black] text-[24px] pb-10 font-['Akshar']  "> {service.description} </p>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>

            </div>
        </div>
    );
};

export default WeAreinNumbers;