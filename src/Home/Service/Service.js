import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, img, description } = props.service;
    return (
        <div className='col-md-3 col-sm-6 col-12'>
            <div className="service">
                <img className='img-fluid' src={img} alt="" />
                <h2> {name}</h2>
                <p>{description}</p>
                <Link to={`/Booking/${_id}`}>
                    <button className='btn btn-primary'>Appointment on {name.toLowerCase()}</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;