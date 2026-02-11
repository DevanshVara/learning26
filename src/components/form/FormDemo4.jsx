import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormDemo4 = () => {
    const { register, handleSubmit } = useForm();
    const [contactData, setContactData] = useState(null);

    const submitHandler = (data) => {
        console.log("Contact:", data);
        setContactData(data);
    }
    return (
        <div style={{textAlign:'center'}}>
            <h2>Contact Form</h2>

            <form onSubmit={handleSubmit(submitHandler)}>

                <input placeholder="Full Name" {...register("fullName")} />
                <br /><br />

                <input placeholder="Phone" {...register("phone")} />
                <br /><br />

                <input placeholder="Email" {...register("email")} />
                <br /><br />

                <input placeholder="Subject" {...register("subject")} />
                <br /><br />

                <input placeholder="Message" {...register("message")} />
                <br /><br />

                <input type="submit" />

            </form>

            {contactData && (
                <div>
                    <h3>Output</h3>
                    <p>{contactData.fullName} | {contactData.subject}</p>
                </div>
            )}
        </div>
    )
}

export default FormDemo4
