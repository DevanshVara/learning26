import React from 'react'
import { useForm } from 'react-hook-form'

const Formvalid5 = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const submitHandler = (data) => {
        console.log(data);
    }
    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message: "name is required",
            },
            minLength:{
                value:3,
                message: "min 3 char required",
            },
            maxLength:{
                value:20,
                message: "max 20 char required",
            },
        },
        ageValidator:{
            required:{
                value:true,
                message: "age is required",
            },
            min:{
                value:18,
                message: "min 18 is required",
            },
            max:{
                value:60,
                message: "max 60 is required",
            },
        },
        emailValidator:{
            required:{
                value:true,
                message:"email is required",
            },
            pattern:{
                value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "invalid email"
            },
        },
        hobbiesValidator:{
            required:{
                value:true,
                message: "please select appropriate hobbies"
            },
        },
        phoneValidator:{
            required:{
                value:true,
                message: "number is required",
            },
            validate:(params) => {  
                return params.length === 10 || "min 10 digits are required"
            }
        },
    }
  return (
    <div style={{textAlign:'center'}}>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>NAME:</label>
            <input type="text" {...register("name", validationSchema.nameValidator)}/>
            {errors.name?.message}
        </div>
        <div>
            <label>AGE:</label>
            <input type="number" {...register("age", validationSchema.ageValidator)}/>
            {errors.age?.message}
        </div>
        <div>
            <label>Email:</label>
            <input type="email" {...register("email", validationSchema.emailValidator)}/>
            {errors.email?.message}
        </div>
        <div>
            <label>Phone:</label>
            <input type="tel" {...register("phone", validationSchema.phoneValidator)}/>
            {errors.phone?.message}
        </div>
        <div>
            <label>Hobbies:</label><br />
            Cricket:<input type="checkbox" {...register("hobbies", validationSchema.hobbiesValidator)} value="cricket"/>
            Coding:<input type="checkbox" {...register("hobbies", validationSchema.hobbiesValidator)} value="coding"/>
            Tennis:<input type="checkbox" {...register("hobbies", validationSchema.hobbiesValidator)} value="tennis"/>
            {errors.hobbies?.message}
        </div>
        <div>
            <input type="submit" />
        </div>
        </form>
    </div>
  )
}

export default Formvalid5
