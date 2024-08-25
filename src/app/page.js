'use client'
import ProductCard from '@/components/ProductCard';
import products from '@/data/product.js';
import { useSelector, useDispatch } from 'react-redux';
import Toast from '@/components/Toast';
import { addItem, removeItem, updateQuantity } from './slices/cartSlice';
import { hideToast, showToast } from './slices/toastSlice';
import { useEffect, useState } from 'react';
import { GET_ALL_PRODUCTS_API } from '@/utils/constants'
import { selectConversionRate } from './slices/currencySlice';
import Shimmer from '@/components/Shimmer';

export default function Home() {
  const [Items, setItems] = useState([]);
  const [displayShimmer, setDisplayShimmer] = useState(true);

  useEffect(() => {
    fetchItems()
  }, []);

  const fetchItems = async () => {
    const data = await fetch(GET_ALL_PRODUCTS_API);
    if (data.status == 200) {
      const json = await data.json();
      setItems(json)
      setDisplayShimmer(false)
    }
    else {
      setItems(products) // populate static data in case of API failure
      setDisplayShimmer(false)
    }
  }

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const toast = useSelector(state => state.toast);
  const conversionRate = useSelector(selectConversionRate);


  const handleCloseToast = () => {
    dispatch(hideToast());
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    dispatch(showToast(`${product.title.split(' ').slice(0, 2).join(' ')} added to cart!`));
  };

  const handleUpdateQty = (id, quantity) => {
    if (quantity <= 0) dispatch(removeItem(id));
    else dispatch(updateQuantity({ id, quantity }));
    dispatch(showToast(`Updated Quantity to ${quantity}`));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
      {displayShimmer ?
        <Shimmer /> :
        <div className="grid grid-cols-4 gap-6">
          {Items.map((product) => (
            <ProductCard
              key={product.id}
              product={{ ...product, currencySymbol: conversionRate.symbol, price: (product.price * conversionRate.value).toFixed(2) }}
              cartItems={cartItems}
              addToCart={handleAddToCart}
              updateItemQty={handleUpdateQty}
            />
          ))}
        </div>
      }
      <Toast message={toast.message} show={toast.show} onClose={handleCloseToast} />
    </div>
  );
}
