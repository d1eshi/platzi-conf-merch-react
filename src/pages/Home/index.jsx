import React from 'react'
import Products from '@/components/Products'
import MetaHead from '@/components/MetaHead'
import initialState from '@/initialState.js'

export default function Home() {
  const meta = (
    <MetaHead
      description="Encuentra todos los productos de Platzi Conf Merch"
      title="Productos"
      url="https://platzi-conf-merch-react.vercel.app/"
    />
  )

  return (
    <>
      {meta}
      <Products products={initialState.products} />
    </>
  )
}
