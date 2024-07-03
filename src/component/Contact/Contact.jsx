import React from 'react'
import "./Contact.css"

import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"

import white_arrow from "../../assets/white-arrow.png"

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d0f6fa0c-3c7a-404b-b081-249576f4dba1");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium, re
                    pudiandae accusamus reprehenderit suscipit libero recusandae soluta. Cum in
                    placeat ea maxime. Molestiae assumenda nihil neque autem consequatur tempora dolorem?
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" /> jayamalt398@gmail.com</li>
                    <li><img src={phone_icon} alt="" /> +94 75 9622397</li>
                    <li><img src={location_icon} alt="" /> Lorem ipsum dolor sit amet <br />consectetur adipisicing elit.<br /> Reprehenderit, nobis.</li>
                </ul>
            </div>

            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required />
                    <label>Phone Number</label>
                    <input type="tel" placeholder='Enter your phone number' name='phone' required />
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder='write your message here...' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact