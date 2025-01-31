/* eslint-disable react/prop-types */

import { createContext, useState } from 'react';

export const CartContext  = createContext(null)

const ContextProvider = ({children}) => {
    const [productId ,setProductId] = useState([])
   const vlue = {productId ,setProductId}
    return (
       <CartContext.Provider value={vlue}>
               {children}
       </CartContext.Provider>
    );
};

export default ContextProvider;