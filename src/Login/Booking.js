// import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Booking.css'
import React, { useEffect, useState } from 'react';

const Booking = () => {
    const { ServiceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const singledata = services.find(service => service?.id == ServiceId)
    console.log(singledata)

    // const { name } = props.service;
    return (
        <div>
            <div className='booking'>
                {/* <h2>This is booking {ServiceId}</h2> */}
                {/* <h1>Name: {name}</h1> */}
                <img style={{ height: '300px', width: '300px' }} src={singledata?.img} alt="" />
                <h1>{singledata?.name}</h1>
                <p>{singledata?.description}</p>

                <Link to='/'>
                    <button className='btn btn-primary'>Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Booking;