import React from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = () => {

    }
    return (
        <div style={{maxWidth: '600px', background: '#172A45'}} className="container text-center mb-5 p-5 rounded">
            <h1>Get In Touch</h1>
            <p className="py-2">I'd love to hear from you. Whether you have a question or just want to say hi, feel free to drop a message. I'll try my best to get </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Your Name" name="name" {...register("name")} className="form-control" required />
                <br/>
                <input className="form-control" name="email" {...register("email")} placeholder="Your Email" required/>
                <br/>
                <textarea className="form-control" name="message" placeholder="Enter Message" cols="30" rows="5" {...register("message")} required></textarea>
                <br/>
                <input className="form-control" style={{background: '#2053C9', color: '#fff'}} type="submit" value="sent"/>
            </form>
        </div>
    );
};

export default Contact;