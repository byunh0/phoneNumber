import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import '../App.css'
const Numberbox = ({item}) => {
  return (
    <Row className="numberbox-container">
        
        <Col  lg={2}>
        <img src="https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp" className="img-size"/>
        </Col>

        <Col  lg={10}>
        <div>{item.name}</div>
         <div>{item.phoneNumber}</div> 
         </Col>
        
    </Row>
  )
}

export default Numberbox