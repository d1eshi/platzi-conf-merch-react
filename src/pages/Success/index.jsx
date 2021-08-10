import React from 'react'
import { useList } from '@/context/ListContext'
import MapFleat from '@/components/MapFleat'
import './Success.css'
import usePositionStack from '@/hooks/usePositionStack'

export default function Success() {
  const {
    state: { buyer },
  } = useList()

  const location = usePositionStack(buyer[0].address)

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{buyer[0].name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <MapFleat location={location} />
      </div>
    </div>
  )
}
