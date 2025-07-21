// context/Shopcontext.js
import React, { createContext } from 'react'
import all_product from '../components/img/all_product.js'

export const Shopcontext = createContext(null)

const ShopContextProvider = (props) => {
  const contextValue = { all_product }

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  )
}

export default ShopContextProvider
