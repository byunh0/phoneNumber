import React from 'react'
import Form from 'react-bootstrap/Form';
import '../App.css'
import Button from 'react-bootstrap/Button';
import {useDispatch}from 'react-redux'
import {useState}from 'react'
const Create = () => {
    const [name,setName]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    //모든 이벤트 핸들러는 event라는 매개변수를 남김
    const dispatch=useDispatch();
    const add_contact=(event)=>{
          event.preventDefault();
        dispatch({type:"add_contact",payload:{name, phoneNumber}})
        //여기서 payload에 보내줄 객체를 알려주는데 name:name,phoneNumber:phoneNumber일경우 위에 처럼 보낼 수 있음.
    }
  return (
    <div>
        
         <Form onSubmit={add_contact}>
        < div>
      <Form.Group className="mb-3" controlId="formGroupEmail" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" onChange={(event)=>{setName(event.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number" onChange={(event)=>{setPhoneNumber(event.target.value)}}/>
      </Form.Group>
      </div>
      <div>
      <Button variant="primary" type="submit">Create</Button>
      </div>
    </Form>
    
    </div>
  )
}

export default Create