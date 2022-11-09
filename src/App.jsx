import React,{useState,useRef} from 'react';
import '../src/App.css';



function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
  	setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = '';
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
  	setResult(0);
    
  }; 
  function startCalc(e) {
    e.preventDefault(); 
    setResult(Number(inputRef.current.value));
  }

 
  return ( 
    <div className="App"> 
      <div> 
        <h1 className='text-center' style={{marginTop:"30vh"}}>Simplest Working Calculator</h1> 
      </div>
      <div className="container">
        <div className="col d-flex justify-content-center">
        <p ref={resultRef} style={{fontSize:25}} > 
          {result} 
        </p>

        </div>
      </div>
      &nbsp; 
      <form className='d-flex justify-content-center' 
      style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}> 
        <input
          style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a numero" 
        />
      </form>
      <div className="container d-flex justify-content-center">
        <button className='space-btn' onClick={startCalc}>Base Number</button>
        <button className='space-btn' onClick={plus}>add</button>
        <button className='space-btn' onClick={minus}>subtract</button> 
        <button className='space-btn' onClick={times}>multiply</button>
        <button className='space-btn' onClick={divide}>divide</button> 
        <button className='space-btn' onClick={resetInput}>clear</button>
        <button className='space-btn' onClick={resetResult}>reset</button> 
      </div> 
        
         
        
         
        
         
        
         
        {/* Add the subtract button */} 
        {/* Add the multiply button */} 
        {/* Add the divide button */} 
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
    </div> 
  ); 
} 
 
export default App; 