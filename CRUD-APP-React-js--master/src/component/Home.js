import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  const [users,setUsers]=useState([])
  const [searchUser,setSearchUser]=useState("")

  const loaduser = async ()=>{
    const result = await axios.get("http://localhost:3002/users")
    setUsers(result.data.reverse())

  }
  const deleteUser = async(id)=>{
    await axios.delete(`http://localhost:3002/users/${id}`)
    loaduser()
  }
  const handleSearch = (e)=>{
    setSearchUser(e.target.value)
  }
  useEffect(()=>{
    loaduser()
  },[])
    return (
        <div>
        <input type="search" name="" id="search" placeholder="search here" value={searchUser} autoComplete="off" onChange={handleSearch} />
      
          <h1>Employee Details</h1> 

          <Table striped bordered hover>
  <thead>
    <tr>
      <th>No.</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Emp Id</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {
    users.filter((value)=>{
if(value.firstname === ""){
  return true
}
else if(value.firstname?.toLowerCase().includes(searchUser?.toLowerCase()) || value.lastname?.toLowerCase().includes(searchUser?.toLowerCase()) || value.email?.toLowerCase().includes(searchUser?.toLowerCase()) ){
  return true
}

    })
    .map((emp,index)=>{
      return  <tr>
      <td>{index+1}</td>
      <td>{emp.firstname}</td>
      <td>{emp.lastname}</td>
      <td>{emp.email}</td>
      <td>{emp.emp_id}</td>
      <td><Link className="btn btn-primary mr-4 " id="mr-4" to={`/edit/${emp.id}`}>EDIT</Link>
      <button className="btn btn-danger" onClick={e=>{deleteUser(emp.id)}}>DELETE</button></td>
    </tr>
    })
  }
   
    
  </tbody>
</Table>
        </div>
    )
}

export default Home
