import React from 'react';
import { Carousel } from 'react-bootstrap';
import img3 from './../../images/Banner/b3.jpg'
import img1 from './../../images/Banner/b5.jpg'
import img2 from './../../images/Banner/b6.jpg'

const Banner = () => {
    return (
        <>
            <Carousel className='mt-1' id='home'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                    />
                    <Carousel.Caption className='border border-1 border-dark rounded-pill bg-light '>
                        <h3 className="text-danger fs-1">We Are The Best</h3>
                        <p className="text-danger fs-4">Update meterial an update tecnology is our main priority, we all time ready to help you from our hart</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='border border-1 border-dark rounded-pill bg-light'>
                        <h3 className="text-danger fs-1">We Are The Best</h3>
                        <p className="text-danger fs-4">Update meterial an update tecnology is our main priority, we all time ready to help you from our hart</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='border border-1 border-dark rounded-pill bg-light'>
                        <h3 className="text-danger fs-1 inline-block">We Are The Best</h3>
                        <p className="text-danger fs-4">Update meterial an update tecnology is our main priority, we all time ready to help you from our hart</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;