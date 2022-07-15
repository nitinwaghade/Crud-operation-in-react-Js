import React,{useState} from 'react'
import { Form } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import axios from 'axios'
import {  useNavigate } from 'react-router'

function Adduser() {
    let Navigate = useNavigate()
    const[addUser,setAddUser]=useState({
        firstname:"",
        lastname:"",
        email:"",
        emp_id:""
    })
    const{firstname,lastname,email,emp_id}=addUser
    const handleUser = (e)=>{
        setAddUser({...addUser,[e.target.name]:e.target.value})
    }
    const submitData = async (e)=>{
        e.preventDefault()
        await axios.post("http://localhost:3002/users",addUser)
        Navigate("/")
    }
    return (
        <div>
            <h1 id="h1">Add User </h1>
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
    <Form.Control type="text" placeholder="emp id" required autoComplete="off" value={emp_id} name="emp_id" onChange={e=>{handleUser(e)}}  />
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

export default Adduser
