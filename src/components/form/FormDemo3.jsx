import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormDemo3 = () => {
    const { register, handleSubmit } = useForm();
    const [employeeData, setEmployeeData] = useState(null);

    const submitHandler = (data) => {
        console.log("Employee:", data);
        setEmployeeData(data);
    }
    return (
        <div style={{textAlign:'center'}}>
            <h2>Employee Form</h2>

            <form onSubmit={handleSubmit(submitHandler)}>

                <input placeholder="Employee Name" {...register("empName")} />
                <br /><br />

                <input placeholder="Department" {...register("department")} />
                <br /><br />

                <input placeholder="Salary" {...register("salary")} />
                <br /><br />

                <input placeholder="Experience" {...register("experience")} />
                <br /><br />

                <input placeholder="Location" {...register("location")} />
                <br /><br />

                <input type="submit" />

            </form>

            {employeeData && (
                <div>
                    <h3>Output</h3>
                    <p>{employeeData.empName} | {employeeData.department}</p>
                </div>
            )}
        </div>
    )
}

export default FormDemo3
