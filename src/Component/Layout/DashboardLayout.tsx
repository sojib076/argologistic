import React from 'react';
import Header from '../Header/Header';
import { Link, Outlet } from 'react-router-dom';
import { FaHouse, FaUser } from 'react-icons/fa6';
import { MdAddTask } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';



const DashboardLayout = () => {

    return (
        <div>
            <Header />

            <div className='flex   '>

                <div className="w-[72px] h-[120vh]  p-5  shadow-xl     shadow-black ">
                    <div className=" grid  grid-cols-1 gap-[100%] justify-between items-center  ">

                        <Link to="/dashboard/" className="w-5 h-5  text-2xl hover:scale-125 ease-linear  transition " > <FaHouse /> </Link>

                        <Link to="/dashboard/admin" className="w-5 h-5  text-2xl hover:scale-125 ease-linear  transition  "> <FaUser /> </Link>

                        <Link to="/dashboard/adorder" className="w-5 h-5  text-2xl hover:scale-125 ease-linear  transition  "> <MdAddTask /> </Link>

                        <Link to="/dashboard/adorder" className="w-5 h-5  text-2xl hover:scale-125 ease-linear  transition  "> <CiLogout /></Link>
                      
                    </div>

                </div>
                <div className=' lg:ml-[1%] lg:p-5'>
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;