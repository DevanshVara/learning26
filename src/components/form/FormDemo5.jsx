import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo5 = () => {
    const {register, handleSubmit, formState: { errors }, watch} = useForm({mode: "onChange"})
    const submitHandler = (data) => {
        console.log(data);
    }

    const password = watch("password")
    console.log("watching...", password);
    

    const validationSchema = {
        passwordValidator:{
            required:{
                value:true,
                message: "password is required",
            },
        },
        confirmpasswordValidator:{
            required:{
                value:true, 
                message: "confirm password is required",
            },
            validate:(params) => {
                return params == password || "confirm pssword is not matched"
            },
        },
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>FORM WATCH DEMO</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>PASSWORD</label>
                    <input type="password" {...register("password", validationSchema.passwordValidator)} />
                    {errors.password?.message}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" {...register("confirmpassword", validationSchema.confirmpasswordValidator)} />
                    {errors.confirmpassword?.message}
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>

        </div>
    )
}

export default FormDemo5
