import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const signleloaderdata = useLoaderData();
    console.log(signleloaderdata?.BuyerName );
    console.log(signleloaderdata);
    return (
        <div>
             
             hi from details
        </div>
    );
};

export default Details;