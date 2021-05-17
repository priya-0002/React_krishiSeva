import React from 'react'
import {useState} from 'react'

const Cal = () => {
    const [input, setInput] = useState({firstName:'',lastName:'',number:0,city:'',state:'',loanAmount:0,purpose:'',interest:0,interestInstallment:''})
    const ans =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
       

    }
    return (
        <div>
        <form >
        <label>First Name</label>
        <input name='firstName'
         type="text" onChange={ans}
         required
        />
        <label>Rate</label>
        <input 
         type="number" onChange={ans}
         required
        />
        
        <label>Interest</label>
        <input 
         type="number" onChange={ans}
         required
        />
        <label>Blog author:</label>
        <select>
          
        
          <option value="Robin">Robin</option>
          <option value="Shenoy">Shenoy</option>
        </select>
       
      </form>
        </div>
    )
}

export default Cal
