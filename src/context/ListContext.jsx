import React from 'react'
import initialState from '@/initialState'

const ListContext = React.createContext({})

function ListReducer(state, action) {
  const { payload } = action

  switch (action.type) {
    case '@cart/request__all-products':
      return { ...state.cart }
    case '@cart/add__to-cart':
      return {
        ...state,
        cart: [...state.cart, payload],
      }
    case '@cart/remove__from-cart':
      // ez solution for now after inplement backend with id uniq
      return {
        ...state,
        cart: state.cart.filter(
          (item, indexCurrent) => item.id !== payload.id || indexCurrent !== payload.index
        ),
      }
    case '@buyer/add_buyer':
      return {
        ...state,
        buyer: [...state.buyer, payload.data],
      }
    case '@orders/add_order':
      return {
        ...state,
        orders: [...state.orders, payload],
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function ListProvider({ children }) {
  const [state, dispatch] = React.useReducer(ListReducer, initialState)
  const value = { state, dispatch }

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>
}

function useList() {
  const context = React.useContext(ListContext)

  if (context === undefined) {
    throw new Error('useList must be used within a ListProvider')
  }

  return context
}

export { ListProvider, useList }
