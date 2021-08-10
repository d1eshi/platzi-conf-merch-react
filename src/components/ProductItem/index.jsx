import React from 'react'

export default function ProductItem({ item, handleAddToCart }) {
  const { title, image, price, description } = item

  return (
    <div className="Products-item">
      <img alt={title} src={image} />
      <div className="Product-item-info">
        <h2>
          {title} <span>${price}</span>
        </h2>
        <p>{description}</p>
      </div>
      <button type="button" onClick={() => handleAddToCart(item)}>
        Comprar
      </button>
    </div>
  )
}
