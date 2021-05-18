import React from 'react'
import {useState} from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
 import "./cal.css"
const Cal = () => {
    const [input, setInput] = useState({firstName:'',lastName:'',number:0,city:'',state:'',loanAmount:0,purpose:'',interest:0,interestInstallment:''})
    const ans =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
      }
      const res=()=>{
        console.log(input)
       }
    return (
        <div>
       <Card className="text-center">
  <Card.Header>Loan application and instant interest calculator</Card.Header>
  <Card.Body>
  <Form className="p">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="your name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="your last name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Gender</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </Form.Control>
    </Form.Group>

   
  </Form.Row>
  
  <Form.Group controlId="formGridAddress2">
    <Form.Label>Contact Number</Form.Label>
    <Form.Control placeholder="your number" />
  </Form.Group>


  <Form.Row>
   
    
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>City</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>....</option>
        <option></option>
      </Form.Control>
    </Form.Group>

      
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="textarea" />
  </Form.Group>
  
  <Form.Row>
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Total Amount</Form.Label>
      <Form.Control type="text" placeholder="" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Rate</Form.Label>
      <Form.Control type="text" placeholder="" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Monthly installments</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>6 </option>
        <option>12</option>
      </Form.Control>
    </Form.Group>
    </Form.Row>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Purpose of loan</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>
  
 

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Agree to terms and conditions" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
        </div>
    )
}

export default Cal
