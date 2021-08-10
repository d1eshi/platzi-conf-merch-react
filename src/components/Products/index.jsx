import React from 'react'
import { useList } from '@/context/ListContext'

import ProductItem from '../ProductItem'

import './Products.css'

export default function Products() {
  const {
    state: { products },
    dispatch,
  } = useList()

  const handleAddToCart = product => {
    console.log('hola')
    dispatch({
      type: '@cart/add__to-cart',
      payload: product,
    })
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products?.map(item => (
          <ProductItem key={item.id} handleAddToCart={handleAddToCart} item={item} />
        ))}
      </div>
    </div>
  )
}
