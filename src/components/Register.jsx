import React, { useContext, useState } from 'react';
import ava from '../assets/avataaars.svg'
import {Button, Input, Select, SelectItem} from "@heroui/react";
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import { CounteContext } from '../Context';
export default function Register() {
  let { setusertoken } = useContext(CounteContext)
  

  let navigat = useNavigate()
  let [isLoading , setisLoading] = useState(false)

  let [apierror , setapierror]= useState("")
   
    let schema = zod.object
    ({
      name:zod.string().nonempty("name is required").min(3 , "name is min 3 char").max(5 , "name is max 5 char"),
      email:zod.string().nonempty("email is requi").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "invaled email"),
      password:zod.string().nonempty("password is required").regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-]).{8,}/ , "invalid password"),
      rePassword:zod.string().nonempty("repassword is required"),
      gender:zod.string().nonempty("gender is required"),
      dateOfBirth:zod.coerce.date("date is required")
      .refine((value)=>{
        let year = value.getFullYear()
         let datenew = new Date().getFullYear()
         let userage = datenew - year
         return userage >= 20
       }, 'age less than 20')
    }).refine((data)=>data.password=== data.rePassword , {path:["rePassword"] , message:"repassword is required"})

  let {handleSubmit , register , formState:{errors , touchedFields }} = useForm({
    defaultValues:
    {
      name: "",
      email:"",
      password:"",
      rePassword:"",
      dateOfBirth:"",
      gender:""
    },
    resolver:zodResolver(schema)
  })
  async function submitform (userdata)
  {
    setisLoading(true)
    console.log("submit" , userdata)
    //call API 
    async function signup (userdata)
    {
     try {
       let {data} = await axios.post("https://linked-posts.routemisr.com/users/signup" , userdata)
     return data
     } catch (error) {
      return error.response.data
     }
    }
    let response = await signup(userdata)
    console.log(response)
    
    if(response.message==='success')
    {
      navigat('/')
      localStorage.setItem('token' , response.token)
      setusertoken(response.token)
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
        <Input isInvalid={Boolean(errors.name && touchedFields.name)} errorMessage={errors.name?.message} {...register("name")} label="User Name" type="text" />
        <Input isInvalid={Boolean(errors.email && touchedFields.email)} errorMessage={errors.email?.message} {...register("email")} label="Email" type="email" />
        <Input isInvalid={Boolean(errors.password && touchedFields.password)} errorMessage={errors.password?.message} {...register("password")}  label="Password" type="password" />
        <Input isInvalid={Boolean(errors.rePassword && touchedFields.rePassword)} errorMessage={errors.name?.message} {...register("rePassword")}  label="Repassword" type="password" />
       <div className="flex gap-3">
         <Input isInvalid={Boolean(errors.date && touchedFields.date)} errorMessage={errors.date?.message} {...register("dateOfBirth")}  label="Date" type="date" />
        <Select isInvalid={Boolean(errors.gender && touchedFields.gender)} errorMessage={errors.gender?.message}  {...register("gender")}className="max-w-xs" label="Select Gender">
          <SelectItem key={"male"}>male</SelectItem>
          <SelectItem key={"female"}>female</SelectItem>
        </Select>
       </div>
       {apierror? <p className='text-red-500 py-2 text-center'>{apierror}</p>:null}
       
        <Button isLoading={isLoading} type='submit' color="primary" variant="shadow">submit</Button>
        <p className='text-center'>Do you have an account?  <Link className='text-blue-500' to='/'> Sgin up</Link></p>
      </form>
    </div>
  </div>
  </>
}
  
