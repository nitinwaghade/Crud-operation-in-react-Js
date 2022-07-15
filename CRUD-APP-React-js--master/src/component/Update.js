import React,{useEffect, useState} from 'react'
import { Form } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import axios from 'axios'
import {  useNavigate, useParams } from 'react-router-dom'

function Update() {
    let Navigate = useNavigate()
    const{id}= useParams()
    const[addUser,setAddUser]=useState({
        firstname:"",
        lastname:"",
        email:"",
        emp_id:""
    })
    const{firstname,lastname,email,emp_id}=addUser
    const handleUser = async (e)=>{
        setAddUser({...addUser,[e.target.name]:e.target.value})
    }
   
    const submitData = async (e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:3002/users/${id}`,addUser)
        Navigate("/")
    }
    const loaduser1 = async()=>{
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        setAddUser(result.data)
    }
    useEffect(()=>{
        loaduser1()
    },[])
   
    return (
        <div>
            <h1 id="h1">Edit User </h1>
            <Form onSubmit={e=>{submitData(e)}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   
  <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" required autoComplete="off" value={firstname} name="firstname" onChange={e=>{handleUser(e)}} />
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter last name" required autoComplete="off" value={lastname} name="lastname" onChange={e=>{handleUser(e)}}  />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required autoComplete="off" value={email} name="email" onChange={e=>{handleUser(e)}} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Emp Id</Form.Label>
    <Form.Control type="text" placeholder="emp id" autoComplete="off" required value={emp_id} name="emp_id" onChange={e=>{handleUser(e)}}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" className="btn btn-primary mb-3">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default Update
