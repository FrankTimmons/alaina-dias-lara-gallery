import React, {useState} from 'react'
import { useShoppingCart } from 'use-shopping-cart';

const CheckoutButton = () => {
  const [status, setStatus] = useState("idle");

  const { redirectToCheckout, cartCount, totalPrice } = useShoppingCart();

  async function handleClick(event) {
    event.preventDefault();
    if (cartCount > 0) {
      setStatus("loading");
      try {
        const result = await redirectToCheckout();
        if (result?.error) {
          console.error(result);
          setStatus("redirect-error");
        }
      } catch (error) {
        console.error(error);
        setStatus("redirect-error");
      }
    } else {
      setStatus("no-items");
    }
  }

  return (
    <article className="mt-1 flex flex-col">
      <div className="text-red-700 text-xs mb-3 h-5 text-center">
      {totalPrice && totalPrice < 1000
          ? "You must have at least $10.00 in your basket"
          : cartCount && cartCount > 20
          ? "You cannot have more than 20 items"
          : status === "redirect-error"
          ? "Unable to redirect to Stripe checkout page"
          : status === "no-items"
          ? "Please add some items to your cart"
          : null}

      </div>
      <button 
        className="bg-blue-800 hover:bg-white hover:text-blue-800 border-blue-800 border-2 transition-colors duration-200 text-white py-3 px-5 rounded-md w-100"
        onClick={handleClick}
        disabled={
          (totalPrice && totalPrice < 1000) ||
          (cartCount && cartCount > 20) ||
          status == "no-items"
            ? true
            : false
        }
      >
        {status !== "loading" ? "Proceed to checkout" : "Loading..."}
      </button>
    </article>
  );
}

export default CheckoutButton