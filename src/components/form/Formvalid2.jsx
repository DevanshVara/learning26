import React from 'react'
import { useForm } from 'react-hook-form'

const Formvalid2 = () => {
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
                value:15,
                message:"Maximum 15 characters allowed"
            },
            validate:(value)=>{
                if(/\d/.test(value)){
                    return "Numbers are not allowed in name"
                }
                return true
            }
        },

        ageValidator:{
            required:{
                value:true,
                message:"Age is required"
            },
            min:{
                value:5,
                message:"Minimum age is 5"
            },
            max:{
                value:25,
                message:"Maximum age is 25"
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
        }
    }
    const submitHandler = (data) =>{
        alert("Student Form Submitted")
        console.log(data);
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Student Form</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name</label>
                    <input {...register("name", validationSchema.nameValidator)} />
                    <p>{errors.name?.message}</p>
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" {...register("age", validationSchema.ageValidator)} />
                    <p>{errors.age?.message}</p>
                </div>
                <div>
                    <label>Email</label>
                    <input {...register("email", validationSchema.emailValidator)} />
                    <p>{errors.email?.message}</p>
                </div>
                <input type="submit"/>
            </form>
    </div>
  )
}

export default Formvalid2
