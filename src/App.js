import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css' ;

import Create from './component/Create'

import Information from './component/Information'
const App = () => {
  //1.이름과 폰번호를 입력하고 create버튼을 누르면 왼쪽에 번호와 이름이 뜸
  //2.왼쪽에 번호와 이름이 생길때마다 num:0이 저장된 숫자만큼 뜸
  //3.이름을 서치하면 이름에 해당하는 값이 나옴.

  //=>유저의 입장
  //1. 번호와 전화번호를 입력할 수 있음.
  //2. create버튼을 누르면 왼쪽으로 저장된 값이 보임.
  //3. 왼쪽 공간에서 이름을 검색하면 검색이 가능함.
  return (
   <Container className="container">
    <Row>
    <Col >
    <h1 className="title">Phone Book</h1>
    </Col>
    </Row>
    <Row>
    <Col>
    <Create/>
    </Col>
   
      
    <Col >
   
    <Information/>
    </Col>
    
    
    </Row>
    </Container>
  )
}

export default App