import React, { useRef, useState } from 'react'

export default function Listform () {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  const handleDelete = index => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <div className='w-[80%] bg-white h-[75vh] flex flex-col items-center  rounded-t-md shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/60'>
      <div className='mt-2 text-lg font-semibold'>Shopping List</div>
      <form className='w-full flex justify-center realtive mt-3'>
        <input
          ref={inputRef}
          onChange={e => setInput(e.target.value)}
          type='text'
          placeholder='add an item'
          className='bg-green-200 p-2 rounded-l-md border-emerald-400 border w-[55%] focus:outline-none focus:bg-green-300'
        />
        <button
          onClick={e => {
            e.preventDefault()
            setItems([...items, input])
            setInput('')
            inputRef.current.value = ''
          }}
          className='bg-emerald-400 px-3 rounded-r-md text-white'
        >
          Add
        </button>
      </form>
      <div className='w-full flex flex-col items-center mt-5'>
        {items.map((item, index) => (
          <ListItem
            key={index}
            text={item}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  )
}

function ListItem ({ text, onDelete }) {
  return (
    <div className='w-[80%] rounded bg-emerald-200 mb-2 relative'>
      <div className='p-2'>
        {text}
        <span className='text-red-500 ml-20' onClick={onDelete}>
          X
        </span>
      </div>
    </div>
  )
}
