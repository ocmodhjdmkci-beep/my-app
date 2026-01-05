import React, { useState } from 'react';
import ava from '../assets/avataaars.svg'
import {Button, Input, Select, SelectItem} from "@heroui/react";
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {

  let navigat = useNavigate()
  let [isLoading , setisLoading] = useState(false)

  let [apierror , setapierror]= useState("")
   
    let schema = zod.object
    ({
      email:zod.string().nonempty("email is requi").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "invaled email"),
      password:zod.string().nonempty("password is required").regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-]).{8,}/ , "invalid password"),
    })

  let {handleSubmit , register , formState:{errors , touchedFields }} = useForm({
    defaultValues:
    {
      email:"",
      password:"",
    },
    resolver:zodResolver(schema)
  })
  async function submitform (userdata)
  {
    setisLoading(true)
    console.log("submit" , userdata)
    //call API 
    async function signin (userdata)
    {
     try {
       let {data} = await axios.post("https://linked-posts.routemisr.com/users/signin" , userdata)
     return data
     } catch (error) {
      return error.response.data
     }
    }
    let response = await signin(userdata)
    console.log(response)
    
    if(response.message==='success')
    {
      localStorage.setItem('token' , response.token)
      navigat('/home')
    }
    else
    {
      setapierror(response.error)
    }
    setisLoading(false)
  }


  return <>
  <div className='bg-gray-300 min-h-screen flex justify-center items-center'>
    <div className="input w-1/3 bg-white rounded-2xl py-5  px-4">
      <h1 className='text-blue-700 text-center font-bold text-3xl pb-5'>Register</h1>
      <form onSubmit={handleSubmit(submitform)} className='flex flex-col gap-4'>
        <Input isInvalid={Boolean(errors.email && touchedFields.email)} errorMessage={errors.email?.message} {...register("email")} label="Email" type="email" />
        <Input isInvalid={Boolean(errors.password && touchedFields.password)} errorMessage={errors.password?.message} {...register("password")}  label="Password" type="password" />
       
       {apierror? <p className='text-red-500 py-2 text-center'>{apierror}</p>:null}
       
        <Button isLoading={isLoading} type='submit' color="primary" variant="shadow">submit</Button>
        <p className='text-center'>Dosn't you have an account?  <Link className='text-blue-500' to='/register'> Sgin In</Link></p>
      </form>
    </div>
  </div>
  </>
}
  

