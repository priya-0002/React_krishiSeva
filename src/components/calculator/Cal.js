import React from 'react'
import {useState} from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
 import "./cal.css"
 import m from "../../assets/m.png"
const Cal = () => {
    const [input, setInput] = useState({firstName:'',lastName:'',gender:'',number:0,city:'',state:'',zip:0,address:'',loanAmount:0,purpose:'',rate:0,month:0})
    const [final, setFinal] = useState(0)
    const result =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
       

      }
      const submit =(event)=>{
      
        event.preventDefault()
        const x=Number(input.loanAmount)
        const y=Number(input.rate)
        const z=Number(input.month)
       
       const interest = (x * (y * 0.01))/z;
        setFinal(interest)
        
        console.log(final)

      }
     
    return (
        
           <div className="cal__display">
           
       <Card className="text-center">
  <Card.Header>Loan application and instant interest calculator</Card.Header>
 
  
  <Card.Body>
   
  <Form className="p">
  
    <Form.Group as={Col} controlId="formGridEmail">
    
      <Form.Label style={{color:"darkgreen",border:'2px blue'}}>First Name</Form.Label>
      <Form.Control style={{color:"darkgreen",border:'2px blue'}} name="firstName" type="text" placeholder="your name" onChange={result} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control name="lastName"type="text" placeholder="your last name"  onChange={result} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Gender</Form.Label>
      <Form.Control as="select"  name="gender"defaultValue="Choose..."  onChange={result}>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </Form.Control>
    </Form.Group>

   
  
  <Form.Group controlId="formGridAddress2">
    <Form.Label>Contact Number</Form.Label>
    <Form.Control name="number" placeholder="your number"  onChange={result} />
  </Form.Group>


  
   
    
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>City</Form.Label>
      <Form.Control as="select" name="city" defaultValue="Choose..."  onChange={result}>
        <option>....</option>
        <option></option>
      </Form.Control>
    </Form.Group>

      
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select"  name="state" defaultValue="Choose..."  onChange={result}>
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control  name="zip"  onChange={result}/>
    </Form.Group>
 

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control  name="address" placeholder="textarea"  onChange={result} />
  </Form.Group>
  
   
  <Form.Row>
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Total Amount</Form.Label>
      <Form.Control  name="loanAmount"  type="number" placeholder=""  onChange={result} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Rate</Form.Label>
      <Form.Control  name="rate"  type="number" placeholder=""  onChange={result} />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Month</Form.Label>
      <Form.Control  name="month"  type="number" placeholder=""  onChange={result} />
    </Form.Group>
 </Form.Row>
   
  
  <Form.Group controlId="formGridAddress2">
    <Form.Label>Purpose of loan</Form.Label>
    <Form.Control  name="purpose" placeholder="Apartment, studio, or floor"  onChange={result} />
  </Form.Group>
  
 

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Agree to terms and conditions" />
  </Form.Group>

  <Button variant="primary" type="submit" onSubmit={submit}>
    Submit
  </Button>
</Form>


  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
 
</Card>
<img src={m} alt="" className="cal__img" />
        </div>
    )
}

export default Cal
