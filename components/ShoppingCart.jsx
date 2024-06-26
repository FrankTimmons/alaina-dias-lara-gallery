import React from 'react'
import CartItem from "./CartItem";
import { useShoppingCart } from "use-shopping-cart";
import CheckoutButton from './CheckoutButton';

const ShoppingCart = () => {
  const { shouldDisplayCart, cartCount, cartDetails } = useShoppingCart();

  return (
    <div className={`bg-orange-100/80 flex flex-col absolute lg:right-9 right-[10%] top-16 w-80 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] transition-opacity duration-200 ${ shouldDisplayCart ? "opacity-100" : "opacity-0"}`}>

      {cartCount && cartCount > 0 ? (
        <>
          {Object.values(cartDetails ?? {}).map((entry) => (            
            <CartItem key={entry.id} item={entry} />
          ))}
          <CheckoutButton/>
        </>
      ) : (
        <div className="p-5">You have no items in your cart</div>
      )}
    </div>
  )
}

export default ShoppingCart