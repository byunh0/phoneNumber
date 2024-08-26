import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css' ;
import {useDispatch} from 'react-redux';
import {useState}from 'react'

const Searchbox = () => {
  const [keyword,setKeyword]=useState("");
  const dispatch=useDispatch();
  const submit_Name = (event)=>{
    event.preventDefault();
   dispatch({type:"Submit-Name",payload:{keyword}})

  }
  return (
    <div >
        <Form className="Searchbox-Style" onSubmit={submit_Name}>
        <Form.Control placeholder="Name" width={100} onChange={event=>setKeyword(event.target.value)} />
    <Button variant="primary" className="Create-buttonStyle" type="submit">Search</Button>
    </Form>
    <div>num:</div>
    </div>
  )
}

export default Searchbox