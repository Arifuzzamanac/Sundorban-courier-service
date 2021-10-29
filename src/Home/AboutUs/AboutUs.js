import React from 'react';
import './AboutUs.css'
import img from '../../images/Banner/b2.jpg'

const AboutUs = () => {
    return (
        <div className='container mt-5 mb-5 p-4' style={{ backgroundColor: 'lightblue' }}>
            <h1 className='mb-4'>About us</h1>
            <div className='row'>
                <div className='col-md-4 col-sm-6 col-12 effect' style={{ backgroundColor: 'limegreen' }}>
                    <div className='row'>
                        <div className='col-6 counter'>
                            <h1 >1786</h1>
                            <h4>Country Cover</h4>
                        </div>
                        <div className='col-6 counter'>
                            <h1>25</h1>
                            <h4>Years Experience</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 counter'>
                            <h1 >486</h1>
                            <h4>Office Worldwide</h4>
                        </div>
                        <div className='col-6 counter'>
                            <h1>258</h1>
                            <h4>Expert Member</h4>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12 effect about-us'>
                    <h2>Konw more about us</h2>
                    <ul>
                        <li>
                            <a href="#">Our Mission</a>
                            <a href="#">Our Vission</a>
                            <a href="#">Our Value</a>
                        </li>
                    </ul>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ipsum maxime quam, corporis quo asperiores autem deserunt dignissimos eligendi a odio aut ex reprehenderit illo quos optio ea aperiam.</p>
                    <button className='btn btn-secondary'>Read More</button>
                </div>
                <div className='col-md-4 col-sm-6 col-12 effect'>
                    <img className='img-fluid' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;