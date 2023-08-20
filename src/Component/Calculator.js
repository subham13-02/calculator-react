import React,{useState} from "react"

const Calculator=()=>{
    const [input1,setInput1]=useState("");
    const [input2,setInput2]=useState("");

    const[success,setSuccess]=useState(null)
    const[error,setError]=useState(null);

    const validateInput=()=>{
        if(input1===""||input2==="" || isNaN(input1)|| isNaN(input2)){
            setError("Please Enter The Valid Numbers");
            return false;
        }
        setError(null);
        return true;
    }

    const add=()=>{
        if(validateInput()){
            setSuccess(parseFloat(input1) + parseFloat(input2));
        }
    }

    const substract=()=>{
        if(validateInput()){
            setSuccess(parseFloat(input1) - parseFloat(input2));
        }
    }

    const multiply=()=>{
        if(validateInput()){
            setSuccess(parseFloat(input1) * parseFloat(input2));
        }
    }
    const division=()=>{
        if(validateInput()){
            if(input2!=="0"){
                setSuccess(parseFloat(input1) / parseFloat(input2));
            }
            else{
                setError("Input 2 cannot be 0")
            }
        }
    }
    
    return(
        <div class="container" id="container">
            <div>
                <h1>React Calculator</h1>
            </div>
            <div class="inputs">
                <input type="text" id="ip1" placeholder="Input 1" onChange={(e) => setInput1(e.target.value)}/>
                <input type="text" id="ip2" placeholder="Input 2" onChange={(e) => setInput2(e.target.value)}/>
            </div>
            <div class="buttons">
                <button class="btn" onClick={add}>+</button>
                <button class="btn" onClick={substract}>-</button>
                <button class="btn" onClick={multiply}>*</button>
                <button class="btn" onClick={division}>/</button>
            </div>
            {error&&<div class="red">{error}</div>}
            {!error&&<div>Result : {success}</div>}
        </div>
    )
    
}

export default Calculator