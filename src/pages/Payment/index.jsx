import React from 'react'
import './Payment.css'
import { useList } from '@/context/ListContext'
import { PayPalButton } from 'react-paypal-button-v2'
import { sumTotal } from '@/utils/index.js'

export default function Payment({ history }) {
  const {
    state: { cart, buyer },
    dispatch,
  } = useList()

  const paypalOptions = {
    clientId: import.meta.env.PAYPAL_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handlePaymentSuccess = data => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      }

      dispatch({
        type: '@orders/add_order',
        payload: newOrder,
      })
    }
    history.push('/checkout/success')
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart?.map(item => (
          <div key={item.id} className="Payment-item">
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            amount={sumTotal(cart)}
            paypalOptions={paypalOptions}
            paypalStyles={buttonStyles}
            onError={error => console.log(error)}
            onPaymentCancel={data => console.log('Cancel Payment ' + data)}
            onPaymentStart={() => console.log('Start Payment')}
            onSuccess={handlePaymentSuccess}
          />
        </div>
      </div>
      <div />
    </div>
  )
}
