import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './actions/counter';
import { addNewNumber, inputIcrement, inputDecrement, inputDelete, removeAll } from './actions/inputAction';
function App() {
  const [input, setInput] = useState('');
  // useSelector select the store read redux store 
  const store = useSelector((store) => store)

  // use dispatch return dispatrcher function 
  const dispatch = useDispatch();
  const handleIncrement = () => {
    return dispatch(increment(2));
  }

  const handleInput = (e) => {
    // Default input type value always string
    // console.log(typeof (e.target.value));
    setInput(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formInput = {
      id: Number(new Date()),
      value: input,
    }
    // passing form data to action
    dispatch(addNewNumber(formInput));
    setInput('');
  }

  return (
    <div className="App">
      <header className="container mx-auto">
        <form onSubmit={handleSubmit}>
          <input type='number' className=' border border-teal-700' value={input} onChange={handleInput} />
          <button className='bg-teal-800 p-1 text-white text-3xl' onClick={() => setInput(Math.round(Math.random() * 100))} type='submit'>Add Random</button>
        </form>
        <button className='bg-teal-800 p-1 text-white text-3xl mx-1' onClick={() => dispatch(removeAll())}>Remove All</button>

        <button className='bg-teal-800 p-1 text-white text-3xl' onClick={handleIncrement}>+</button>
        <p className='inline-block text-2xl p-1'>{store.counterReducer}</p>
        <button className=' bg-red-800 p-1 text-white text-3xl' onClick={() => dispatch(decrement())}>-</button>
        <button className=' bg-gray-800 p-1 text-white text-3xl' onClick={() => dispatch(reset())}>Reset</button>
      </header>
      <ul>
        {
          store.listNumbers.map(
            (listItem) => {
              return <li className=' borrder border-b-2 px-2' key={listItem.id}>
                <button className='bg-teal-800 p-1 text-white text-3xl' onClick={() => dispatch(inputIcrement(listItem.id))}>+</button>
                <p className='inline-block text-2xl p-1'>{listItem.value}</p>
                <button className=' bg-red-800 p-1 text-white text-3xl' onClick={() => dispatch(inputDecrement(listItem.id))}>-</button>
                <button className=' bg-gray-800 p-1 text-white text-3xl' onClick={() => dispatch(inputDelete(listItem.id))} >Delete</button></li>
            }
          )
        }
      </ul>
    </div>
  );
}

export default App;
