import React from 'react';

const Contact = () => {
    return (
        <section style={{width: '600px', background: '#172A45'}} className="container text-center p-5 rounded">
            <h1 className="pb-5 text-brand">Get In Touch</h1>
            <from >
                <input type="text" className="form-control" name="name" id="" placeholder="Your Name" />
                <br/>
                <input type="email" className="form-control" name="email" id="" placeholder="Your Email"/>
                <br/>
                <textarea name="textarea" className="form-control" id="" cols="30" rows="5" placeholder="Massage" />
                <br/>
                <input className="form-control" style={{background: '#2053C9', color: '#fff'}} type="submit" value="sent"/>
            </from>
            <p className="pt-3">Designed & Built by <a target="_blank" href="https://github.com/SakhawatHossain55">Sakhawat Hossain</a></p>
        </section>
    );
};

export default Contact;