import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaShoppingBasket } from 'react-icons/fa'
import { useList } from '@/context/ListContext'

export default function Header() {
  const {
    state: { cart },
  } = useList()

  return (
    <>
      <div className="Header">
        <Link to="/">
          <h1>PlatziConf Merch</h1>
        </Link>
        <div className="Header-checkout">
          <Link to="/checkout">
            <FaShoppingBasket size="2rem" title="Checkout" />
          </Link>
          {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
        </div>
      </div>
    </>
  )
}
