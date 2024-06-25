import React, { useState } from "react";
import './Contact.css'
const Contact = () => {
    const [inputval, setinputdata] = useState({
        'fname': '',
        'lname': '',
        'email': '',
        'textarea': '',
    })
    const inputfunction = (e) => {
        const { name, value } = e.target
        setinputdata((olddata) => {
            return {
                ...olddata,
                [name]: value
            }

        })

    }


    const formfunc = (event) => {
        event.preventDefault()

    }
    const Contactsubmit = () => {
        // if (!inputval.fname) {
        //     return alert('U must Write Something')
        // }
        setinputdata({
            'fname': '',
            'lname': '',
            'email': '',
            'textarea': '', 
        })
    }
    return (
        <div id="Contact-form-Container" className=" container-fluid d-flex mt-5 justify-content-around align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
            <div className="contact-us">
                <h3> <span className='text-primary'>Contact</span> Us</h3>
                <p>While Contact Us pages are meant to be helpful to users, it's important not to bombard them with too much information.</p>
            </div>
            <form className="mt-lg-5 ms-lg-5 ms-sm-0 d-flex flex-column gap-1 pt-4 pb-4 " onClick={formfunc} id="Contact-form">
                <div className="d-flex flex-column flex-sm-row gap-3  ms-3 me-3">
                    <div className="d-flex flex-column gap-1" id='form-inputs'>
                        <label>First Name</label>
                        <input type="text" className='py-2 px-2' value={inputval.fname} name="fname" placeholder="FirstName" onChange={inputfunction} />
                    </div>
                    <div className="d-flex flex-column gap-1">
                        <label>Last Name</label>
                        <input type="text" className='py-2 px-2' value={inputval.lname} name='lname' placeholder="LastName" onChange={inputfunction} />
                    </div>
                </div>
                <div className="d-flex flex-column ms-3 me-3">
                    <label>Email</label>
                    <input type="text" className='py-2 px-2' name='email' value={inputval.email} placeholder="Email" onChange={inputfunction} />
                    <label>What can we help you with?</label>
                    <textarea rows='5' value={inputval.textarea} name="textarea" onChange={inputfunction}></textarea>
                    <button className="btn btn-primary mt-2" id="submit" onClick={Contactsubmit}>Submit</button>
                </div>




            </form>


        </div>
    )
}
export default Contact