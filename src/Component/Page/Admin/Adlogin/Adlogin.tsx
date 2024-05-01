import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Adlogin = () => {
   
    return (
        <div>
         <Link to='/dashboard' > 
         <button className='button bg-black my-20'> Cliclk here </button>
         </Link>
        </div>
    );
};

export default Adlogin;