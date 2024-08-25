import React from 'react'
import KqWidget from './KqWidget';

const CartItem = ({ item, updateQuantity, removeItem }) => {

  const handleQuantityUpdate = (ItemId, UpdatedQty) => {
    if (UpdatedQty == 0) removeItem(ItemId);
    else updateQuantity(ItemId, UpdatedQty);
  }

  return (
    <div className="flex items-center justify-between border-b pb-4 mb-4">
      <img src={item.image} alt={item.title} className="h-20 w-20 object-cover" />
      <div className="flex-1 ml-4">
        <h3 className="text-lg">{item.title}</h3>
        <p className="text-gray-500">{item.currencySymbol}{item.price}</p>
        <KqWidget
          item={item}
          handleQuantityUpdate={handleQuantityUpdate}
        />
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;