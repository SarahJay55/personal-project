import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contactpage">
                <div className='contactheader'>
                    <h1>Contact</h1>
                    <h3>Let's Chat</h3>
                </div>
                <div className="contactinfo">
                    <p className="email"><a href="https://www.instagram.com/braydonbphotography/" target="_blank"><img className="imginsta" src="https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png" alt="instagram" height="80px" width="80px"  /></a><br></br>@braydonbphotography</p>
                    <br></br>
                    <br></br>
                    <p className="email">Email: ballbraydon@gmail.com</p>
                </div>
            </div>
        )
    }
}

export default Contact;