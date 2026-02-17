import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo6 = () => {
    const {register, handleSubmit, formState:{errors}, watch} = useForm({mode: "onChange"})
    const submitHandler = (data) => {
        console.log(data);
    }

    const password = watch("password")
    console.log("watching...", password);
    

    const validationSchema = {
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

    const passwordRules = [
        {
            id: 1,
            label: "Minimum 1 Capital Character",
            isValid: /[A-Z]/.test(password)
        },
        {
            id: 2,
            label: "Minimum 1 Small Character",
            isValid: /[a-z]/.test(password)
        },
        {
            id: 3,
            label: "Minimum 1 Digit",
            isValid: /[0-9]/.test(password)
        },
        {
            id: 4,
            label: "Minimum 1 Special Character",
            isValid: /[!@#$%^&*(),.?":{}|<>_]/.test(password)
        },
        {
            id: 5,
            label: "Minimum 8 Characters Length",
            isValid: password.length >= 8
        }
    ]
  return (
    <div style={{textAlign:'center'}}>
        <h1>FORM DEMO 6</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>PASSWORD</label>
                <input type="password" {...register("password", {required: "Password is required"})}/>
                <p>{errors.password?.message}</p>
            </div>
            <ul style={{ textAlign:'left', display: "inline-block" }}>
                    {passwordRules.map((rule) => (
                        <li
                            key={rule.id}
                            style={{color:password.length === 0 ? "black": rule.isValid ? "green": "red"}}>
                            {rule.label}
                        </li>
                    ))}
            </ul>
            <div>
                <label>Confirm Password</label>
                <input type="password" {...register("confirmpassword", validationSchema.confirmpasswordValidator)}/>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}

export default FormDemo6
