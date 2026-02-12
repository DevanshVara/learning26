import React from 'react'
import { useForm } from 'react-hook-form'

const Formvalid1 = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    console.log("errors",errors);

    const validationSchema = {
        
        ageValidator:{
            required:{
                value:true,
                message:"Age is Required*"
            },
            min:{
                value:18,
                message:"min age should be 18"
            },
            max:{
                value:60,
                message:"max age should be 60*"
            }
        },
        addressValidator:{
            required:{
                value:true,
                message:"address is required"
            },
            minLength:{
                value:5,
                message:"min 5 char is required"
            },
            maxLength:{
                value:20,
                message:"max 20 char is accepted"
            }
        }
    }

    const submitHandler = (data) => {
        alert("form submitted")
        console.log(data);
        
    }
    
  return (
    <div style={{textAlign:'center'}}>
        <h1>FORM VALID 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type="text" {...register("name", {required:{value:true, message:"Name is required"}})} />
                {errors.name && errors.name.message}
            </div>
            <div>
                <label>AGE</label>
                <input type="text" {...register("age", validationSchema.ageValidator)} />
                {errors.age && errors.age.message}
            </div>
            <div>
                <label>ADD</label>
                <input type="text" {...register("add", validationSchema.addressValidator)} />
                {errors.add?.message}
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}

export default Formvalid1
