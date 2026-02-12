import React from 'react'
import { useForm } from 'react-hook-form'

const Formvalid3 = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const validationSchema = {

        nameValidator:{
            required:{
                value:true,
                message:"Name is required"
            },
            minLength:{
                value:3,
                message:"Minimum 3 characters required"
            },
            maxLength:{
                value:20,
                message:"Maximum 20 characters allowed"
            }
        },

        emailValidator:{
            required:{
                value:true,
                message:"Email is required"
            },
            pattern:{
                value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:"Invalid email format"
            }
        },

        ageValidator:{
            required:{
                value:true,
                message:"Age is required"
            },
            min:{
                value:18,
                message:"Age must be at least 18"
            },
            max:{
                value:65,
                message:"Age must be below 65"
            }
        },

        messageValidator:{
            required:{
                value:true,
                message:"Message is required"
            },
            validate:(value)=>{
                if(value.includes("spam")){
                    return "Spam words are not allowed"
                }
                return true
            }
        }
    }
    const submitHandler = (data) =>{
        alert("Contact Form Submitted")
        console.log(data);
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Contact Form</h1>
            <form onSubmit={handleSubmit(submitHandler)}>

                <div>
                    <label>Name</label>
                    <input {...register("name", validationSchema.nameValidator)} />
                    <p>{errors.name?.message}</p>
                </div>
                <div>
                    <label>Email</label>
                    <input {...register("email", validationSchema.emailValidator)} />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" {...register("age", validationSchema.ageValidator)} />
                    <p>{errors.age?.message}</p>
                </div>
                <div>
                    <label>Message</label>
                    <textarea {...register("message", validationSchema.messageValidator)} />
                    <p>{errors.message?.message}</p>
                </div>
                <input type="submit"/>
            </form>
    </div>
  )
}

export default Formvalid3
