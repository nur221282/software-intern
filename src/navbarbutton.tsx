import React,{useState} from 'react'
import Select, { Option } from 'react-button-navbar';
 


    function App(){
        const [current, setCurrent] = useState("opt1")
        return (
          <Select currentValue={current} onSelect={(value)=>{setCurrent(value)}} >
            <Option value="opt1">Search</Option>
            <Option value="opt2">Option 2</Option>
            
          </Select>
        )
      }
       
      export default App
 
 
