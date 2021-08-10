import React from 'react'
import './Checkout.css'
import { Link } from 'react-router-dom'
import { useList } from '@/context/ListContext'
import CheckoutItem from '@/components/CheckoutItem'
import { sumTotal } from '@/utils/index.js'

export default function Checkout() {
  const {
    state: { cart },
    dispatch,
  } = useList()

  const handleRemoveToCart = (id, index) => {
    console.log('removing')
    dispatch({
      type: '@cart/remove__from-cart',
      payload: { id, index },
    })
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de Pedidos:</h3>
        ) : (
          <h3>
            Agregar Productos <Link to="/">Aquí</Link>
          </h3>
        )}

        {cart?.map((item, index) => (
          <CheckoutItem
            key={index}
            handleRemoveToCart={handleRemoveToCart}
            index={index}
            item={item}
          />
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: ${sumTotal(cart)}</h3>
          <Link to="/checkout/information">
            <button className="btn" type="button">
              Continuar pedido
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
