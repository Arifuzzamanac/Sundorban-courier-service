import { useParams, Link } from 'react-router-dom';
import './Booking.css'
import React, { useEffect, useState } from 'react';

const Booking = () => {
    const { ServiceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://shielded-spire-53735.herokuapp.com/services/${ServiceId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className='booking'>
                <img src={services.img} alt="" />
                <h2>Details of {services.name}</h2>
                <p>{services.description}</p>
                <Link to='/'>
                    <button className='btn btn-primary'>Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Booking;