import React from 'react'
import {useState} from 'react'

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
        <form >
        <label>First Name</label>
        <input name='firstName'
         type="text" onChange={ans}
         required
        />
        <label>Last Name</label>
        <input name='lasttName'
         type="text" onChange={ans}
         required
        />
        <label>First Name</label>
        <input name='firstName'
         type="text" onChange={ans}
         required
        />
        <label>Contact Number</label>
        <input name='number'
         type="number" onChange={ans}
         required
        />
        <label>City</label>
        <input name='city'
         type="text" onChange={ans}
         required
        />
        <label>State</label>
        <input name='state'
         type="text" onChange={ans}
         required
        />
         <label>Loan Amount</label>
        <input name='loanAmount'
         type="number" onChange={ans}
         required
        />
       
       <label>purpose</label>
        <input name='purpose'
         type="text" onChange={ans}
         required
        />
        <button onClick={res}>Submit</button>
      
       
      </form>
        </div>
    )
}

export default Cal
