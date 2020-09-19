import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import {  Button, Label } from 'reactstrap';
import { Form, Col, Container } from 'react-bootstrap';
import {  MDBBox } from 'mdbreact';

 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <Container className="w-50 mb-5" >
       
        <h1>Выберите форму оплаты</h1>
             <div id="PaymentForm" className="mt-5">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <MDBBox  className="bg-info d-flex-inline-block align-content-center mt-3">
          <h3 style={{textAlign:"center"}}>Введите данные</h3>
       
            <Form className="mb-3">
              <Form.Row className="d-flex justify-content-center mt-3">
                <Col md={3}>
                <Label>Введите номер карты</Label>
                  <Form.Control type="tel"
                                name="number"
                                placeholder="Card Number"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus} />
                </Col>
                <Col md={3}>
                <Label>Дата истечение</Label>
                  <Form.Control type="number"
                                name="expiry"
                                placeholder="Valid"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus} />
                </Col>
                
                
              </Form.Row>

              <Form.Row className="d-flex justify-content-center mt-3 mb-3">
                <Col md={6}>
                <Label>ФИО</Label>
                  <Form.Control type="text"
                                name="name"
                        
                                placeholder="enter your name"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus} />
                </Col>
                
              </Form.Row>

              <div className="d-flex justify-content-center">

              <Button  className="mt-3 mb-3 bg-primary" type="submit'">Отправить</Button>
              </div>
             
              
            </Form>
            
        </MDBBox>
       
      </div>
      </Container>
      
    );
  }
}


