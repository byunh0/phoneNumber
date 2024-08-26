import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css' ;
const Searchbox = () => {
  return (
    <div >
        <div className="Searchbox-Style">
        <Form.Control placeholder="Name" width={100} />
    <Button variant="primary" className="Create-buttonStyle">Search</Button>
    </div>
    <div>num:</div>
    </div>
  )
}

export default Searchbox