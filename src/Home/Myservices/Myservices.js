import React, { useEffect, useState } from 'react';
import './Myservices.css'
const Myservices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://shielded-spire-53735.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        console.log(id)
        const url = `https://shielded-spire-53735.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            {
                services.map(service => <div className='myservice'>
                    <ul>
                        <li><h5>{service.name}</h5></li>
                    </ul>
                    <button className='btn bg-secondary text-white mx-5' onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)

            }

        </div>
    );
};

export default Myservices;

