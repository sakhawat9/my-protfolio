import React from 'react';

const Contact = () => {
    return (
        <div style={{width: '600px', background: '#172A45'}} className="container text-center mb-5 p-5 rounded">
            <h1>Get In Touch</h1>
            <p className="py-2">I'd love to hear from you. Whether you have a question or just want to say hi, feel free to drop a message. I'll try my best to get </p>
            <from>
                <input type="text" className="form-control" name="name" id="" placeholder="Your Name" />
                <br/>
                <input type="email" className="form-control" name="email" id="" placeholder="Your Email"/>
                <br/>
                <textarea name="textarea" className="form-control" id="" cols="30" rows="5" placeholder="Massage" />
                <br/>
                <input className="form-control" style={{background: '#2053C9', color: '#fff'}} type="submit" value="sent"/>
            </from>
        </div>
    );
};

export default Contact;