import KqWidget from "./KqWidget";

 const ProductCard = ({ product, cartItems, addToCart, updateItemQty }) => {
  const currentItem = cartItems.find(item => item.id === product.id)

  return (
    <div className="bg-white shadow-md rounded-lg text-gray-500 p-4">
      <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-4" />
      <h2 className="text-lg font-semibold ">{product.title}</h2>
      <p>{product.currencySymbol}{product.price}</p>
      {currentItem && currentItem.quantity > 0 ?
        <KqWidget
          item={currentItem}
          handleQuantityUpdate={updateItemQty}
        />
        :
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      }
    </div>
  );
}

export default ProductCard;