import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://shielded-spire-53735.herokuapp.com/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('add succed')

                }
                reset()
            })
    }

    return (
        <div className='add-service'>
            <h2>This is addservice</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <textarea {...register("description")} placeholder='Description' />
                <input type="number" {...register("number")} placeholder='Phone number' />
                <input {...register("img")} placeholder='Image' />
                <input className='submit-btn' type="submit" />
            </form>
        </div>
    );
};

export default AddService;