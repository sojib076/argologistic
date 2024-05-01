import React from 'react';
import Header from '../Header/Header';
import { Link, Outlet } from 'react-router-dom';
import { FaHouse, FaUser,FaOutdent, FaBoxesPacking, FaDebian} from 'react-icons/fa6';






const DashboardLayout = () => {

    const [isadmin , setIsAdmin] = React.useState(true);

    return (
        <div>
            <Header />

            <div className='flex justify-normal bg '>
                <div className="w-[72px] h-[100vh] p-5   shadow">
                   {
                     isadmin ? ( <div className="flex-col justify-between items-center flex gap-10">
                     <div className="w-5 h-5 " >
                         <Link to="/dashboard/"> <FaHouse /> </Link>
                     </div>
                     <div className="w-5 h-5 " >
                         <Link to="/dashboard/admin"> <FaUser/> </Link>
                     </div>
                     <div className="w-5 h-5 " >
                         <Link to="/dashboard/adorder"> <FaBoxesPacking /></Link>
                     </div>
                     {/* <div className="w-5 h-5 " >
                         <Link to="/dashboard/details"> <FaDebian /></Link>
                     </div> */}
                     <div className="w-5 h-5 " >
                         <> <FaOutdent/> </>
                     </div>
                     
                 </div>) : " You are a seller " 
                   }
                </div>
                <div className=' ml-[2%] p-5'>
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;