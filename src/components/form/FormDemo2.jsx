import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormDemo2 = () => {
    const { register, handleSubmit } = useForm();
    const [studentData, setStudentData] = useState(null);

    const submitHandler = (data) => {
        console.log("Student:", data);
        setStudentData(data);
    }
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Student Form</h2>

            <form onSubmit={handleSubmit(submitHandler)}>

                <input placeholder="Name" {...register("name")} />
                <br /><br />

                <input placeholder="Age" {...register("age")} />
                <br /><br />

                <input placeholder="Course" {...register("course")} />
                <br /><br />

                <input placeholder="City" {...register("city")} />
                <br /><br />

                <input placeholder="Email" {...register("email")} />
                <br /><br />

                <input type="submit" />

            </form>

            {studentData && (
                <div>
                    <h3>Output</h3>
                    <p>{studentData.name} | {studentData.course}</p>
                </div>
            )}
        </div>
    )
}

export default FormDemo2
