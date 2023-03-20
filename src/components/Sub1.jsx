import React from 'react'
import {Link} from 'react-router-dom'

const Sub1 = () => {
  return (
    <div>
      <h1>Sub1</h1>
      <li>
        <Link to='/sub1'>서브페이지</Link>
      </li>
    </div>
  )
}

export default Sub1