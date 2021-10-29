import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Order.css'

const Order = () => {
    return (
        <>
            <div className='container mb-5 p-3' style={{ backgroundColor: 'lightblue' }}>
                <h1 className='mt-5 mb-5 ' id='order'>Your Curier Destination</h1>
                <div className='row'>
                    <div className='col-md-4 col-sm-6 col-12 mb-3'>
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid" label="Picup Point">
                                    <Form.Select aria-label="Floating label select example">
                                        <option value="1">Rangpur</option>
                                        <option value="2">Jashore</option>
                                        <option value="3">Satkhira</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12 mb-3'>
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid" label="Delevery Location">
                                    <Form.Select aria-label="Floating label select example">
                                        <option value="1">Rangpur</option>
                                        <option value="2">Jashore</option>
                                        <option value="3">Satkhira</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12 mb-3'>
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid" label="Product Type">
                                    <Form.Select aria-label="Floating label select example">
                                        <option value="1">Rangpur</option>
                                        <option value="2">Jashore</option>
                                        <option value="3">Satkhira</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12 mb-3'>
                        <input className='input' type="email" name="" id="" placeholder='Your Email' />
                    </div>
                    <div className='col-md-4 col-sm-6 col-12 mb-3'>
                        <input className='input' type="number" name="" id="" placeholder='Your Number' />
                    </div>
                    <div className='col-md-4 col-sm-6 col-12 mb-3'>
                        <input className='input bg-secondary' type="submit" value="Place Your Order" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;