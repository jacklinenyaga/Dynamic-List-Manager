import { useState } from 'react'
import './App.css'

export default function ListManager() {
  const [Item, setItem] = useState([])
  const [Input, setInput] = useState("")

  const addItem = (e) => {
    e.preventDefault()
    if (Input.trim() !== "") {
      setItem([...Item, Input])
      setInput("")
    }
  }

  return (
      <div className='container'>
        <h1>Dynamic List Manager</h1>
        <div className='input-field'>
          <input 
          type='text'
          placeholder='Enter an Item'
          value={Input}
          className='input'
          onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit"
          onClick={addItem} className='btn'>
          Add Item
          </button>
        </div>

        <div className='listWrapper'>
          <ul>
            {Item.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>

        </div>


      </div>  
  )
}
