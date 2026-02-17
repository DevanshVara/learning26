import React from 'react'
import { useForm } from 'react-hook-form'

const Formvalid4 = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const submitHandler = (data) => {
        console.log(data);
    }
    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message: "name is required",
            }
        },
        contactValidator:{
            required:{
                value:true,
                message: "contact is required",
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}$/,
                message: "invalid contact",
            }
        },
        promocodeValidator:{
            required:{
                value:true,
                message: "promocode is required",
            },
            validate:(params)=>{
                return params == "2026" || "promocode is invalid"
            }
        },
        hobbiesValidator:{
            required:{
                value:true,
                message: "hobbies are required",
            },
            validate:(params)=>{
                return params?.length>=2 || "min 2 hobbies are required"
            }
        }
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
                <label>Contact:</label>
                <input type="text" {...register("contact", validationSchema.contactValidator)}/>
                {errors.contact?.message}
            </div>
            <div>
                <label>PROMO CODE</label>
                <input type="text" {...register("promocode", validationSchema.promocodeValidator)}/>
                {errors.promocode?.message}
            </div>
            <div>
                <label>HOBBIES</label><br />
                Cricket:<input type="checkbox" {...register("hobbies", validationSchema.hobbiesValidator)} value="cricket"/>
                Tennis:<input type="checkbox" {...register("hobbies", validationSchema.hobbiesValidator)} value="tennis"/>
                Scrolling:<input type="checkbox" {...register("hobbies", validationSchema.hobbiesValidator)} value="scrolling"/>
                {errors.hobbies?.message}
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}

export default Formvalid4
