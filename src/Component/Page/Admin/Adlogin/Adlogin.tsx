import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Adlogin = () => {
  const navigate = useNavigate();
    const [Usermail, setUserEmail] = React.useState('');
  const handleLogin = (e) => {
  
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data ={
      email,
      password
    }
    axios.post(`http://localhost:3000/api/v1/user/login`,data)
      .then((response) => {
    
        if (response.status === 200) {
          navigate('/dashboard')
          
          // set the user email in local storage
          localStorage.setItem('userEmail', email)
         
        }

        
      }).catch((error) => {
        if (error.response.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Email or Password!',
          }) 
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      });
  }

  return (
    <div className=''>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin} >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required
                  className="w-full rounded-md border-1  bg-slate-400 py-2 px-3 text-white focus:outline-none
                 focus:border-indigo-600  sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" required
                  className=" w-full rounded-md border-1  bg-slate-400 py-2 px-3 text-white focus:outline-none
                 focus:border-indigo-600  sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" className=" w-full justify-center button bg-yellow-500 hover:scale-90 transform ">Sign in</button>
            </div>
          </form>


        </div>
      </div>

    </div>
  );
};

export default Adlogin;