import React, { useState } from 'react'

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return (
    <div>
      <ul className='rating'>
        <li>
          <input
            type='radio'
            onChange={handleChange}
            value='1'
            name='rating'
            checked={selected === 1}
            id='num1'
          />
          <label htmlFor='num1'>1</label>
        </li>
        <li>
          <input
            type='radio'
            onChange={handleChange}
            value='2'
            name='rating'
            checked={selected === 2}
            id='num2'
          />
          <label htmlFor='num2'>2</label>
        </li>
        <li>
          <input
            type='radio'
            onChange={handleChange}
            value='3'
            name='rating'
            checked={selected === 3}
            id='num3'
          />
          <label htmlFor='num3'>3</label>
        </li>
        <li>
          <input
            type='radio'
            onChange={handleChange}
            value='4'
            name='rating'
            checked={selected === 4}
            id='num4'
          />
          <label htmlFor='num4'>4</label>
        </li>
        <li>
          <input
            type='radio'
            onChange={handleChange}
            value='5'
            name='rating'
            checked={selected === 5}
            id='num5'
          />
          <label htmlFor='num5'>5</label>
        </li>
        <li>
          <input
            type='radio'
            onChange={handleChange}
            value='6'
            name='rating'
            checked={selected === 6}
            id='num6'
          />
          <label htmlFor='num6'>6</label>
        </li>
        <li>
          <input
            type='radio'
            onChange={handleChange}
            value='7'
            name='rating'
            checked={selected === 7}
            id='num7'
          />
          <label htmlFor='num7'>7</label>
        </li>
        <li>
          <input
            type='radio'
            onChange={handleChange}
            value='8'
            name='rating'
            checked={selected === 8}
            id='num8'
          />
          <label htmlFor='num8'>8</label>
        </li>
        <li>
          <input
            type='radio'
            onChange={handleChange}
            value='9'
            name='rating'
            checked={selected === 9}
            id='num9'
          />
          <label htmlFor='num9'>9</label>
        </li>
        <li>
          <input
            type='radio'
            onChange={handleChange}
            value='10'
            name='rating'
            checked={selected === 10}
            id='num10'
          />
          <label htmlFor='num10'>10</label>
        </li>
      </ul>
    </div>
  )
}

export default RatingSelect
