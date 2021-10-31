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

// Here we delever your service in a few hour. for this service you have to pay little bit more. On here we delever your desired service as soon as possible ass firster. When ever the weather is support us for delever your product but we do our best try for your this service.


// https://i.ibb.co/PCtTQT2/img5.jpg


// https://i.ibb.co/0GgpZh8/img4.jpg
// https://i.ibb.co/vqrvvd8/img6.jpg
// https://i.ibb.co/tHrZ2F8/img2.png
// https://i.ibb.co/r3F4XWw/img3.jpg
// https://i.ibb.co/BzNcgy1/img1.png