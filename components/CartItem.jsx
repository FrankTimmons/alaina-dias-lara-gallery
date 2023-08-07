import { useShoppingCart, formatCurrencyString  } from "use-shopping-cart";
import {FaTrash} from 'react-icons/fa'

export default function CartItem({ item }) {
  const { product, quantity, price } = item;

  const { removeItem } = useShoppingCart();

  const removeItemFromCart = () => {
    removeItem(item.id)
  }

  return (
    <div className="flex items-center gap-4 mb-3">
      <div>
        {product} <span className="text-xs">({quantity})</span>
      </div>
      <div className="ml-auto">{formatCurrencyString({value: price, currency: "USD"})}</div>
      <button 
        className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
        onClick={removeItemFromCart}
      >
        <FaTrash/>
      </button>
    </div>
  );
}