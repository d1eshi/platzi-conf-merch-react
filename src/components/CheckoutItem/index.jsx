import React from 'react'
import { BiTrash } from 'react-icons/bi'

export default function CheckoutItem({ item, index, handleRemoveToCart }) {
  const { id, title, price } = item

  return (
    <div className="Checkout-item">
      <div className="Checkout-element">
        <h4>{title}</h4>
        <span>${price}</span>
      </div>
      <button type="button" onClick={() => handleRemoveToCart(id, index)}>
        <BiTrash size="1.6rem" title="Eliminar" />
      </button>
    </div>
  )
}
