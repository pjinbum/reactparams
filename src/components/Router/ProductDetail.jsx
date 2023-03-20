import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  // console.log 찍었을 때  key, value object를 반환한다.
  // id라는 key이 있고, 01이라는 value 값이 있다.
  // id라는 key값은 path='/products/:id' 여기서 온다.
  // useParams라는 리액트 훅을 사용하면 URL id값을 가져올 수 있다.
  const params = useParams();
  console.log(params)

  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail