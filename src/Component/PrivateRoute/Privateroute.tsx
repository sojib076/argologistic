import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Privateroute = ({children}) => {
    const userEmail = localStorage.getItem('userEmail');
    const [isAdmin, setIsAdmin] = useState(false);

        useEffect(() => {
            axios.get(`http://localhost:3000/api/v1/user/verifyadmin?email=${userEmail}`).then((response) => {
                console.log(response);
                if (response) {
                    setIsAdmin(true);
                }
            });
        }, [userEmail]);

        return (
            <div>
                
                 {
                   isAdmin ? children  : <h1> You are not authorized to view this page</h1>
                 }  
                
            </div>
        );
    };

    export default Privateroute;