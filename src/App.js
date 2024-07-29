import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux';
import { plus, minus, mult, divide } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changenumber);
  const myotherState = useSelector((state) => state.othernumber);
  const dispatch = useDispatch();
  return (
    <>
    <div className='container'>
    <h1>Increment / Decrement Counter</h1>
      <div className="counter">
        <button className='btn' onClick={() => dispatch(minus())}>DECREMENT</button>
        <h2>{myState}</h2>
        <button className='btn'  onClick={() => dispatch(plus(5))} >INCREMENT</button>    
      </div>
    </div>

    <div className='container'>
    <h1>Multiplication / Division Counter</h1>
      <div className="counter">
        <button className='btn' onClick={() => dispatch(divide())}>DIVISION</button>
        <h2>{myotherState}</h2>
        <button className='btn'  onClick={() => dispatch(mult(5))} >MULTIPLICATION</button>
      </div>
    </div>
    </>
  )
}

export default App
