'use client';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { setCurrency } from '@/app/slices/currencySlice';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const currency = useSelector(state => state.currency.selectedCurrency);

  const dispatch = useDispatch();

  const handleCurrencyChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };

  return (
    <nav className="sticky top-0 z-10 bg-blue-500 shadow-md p-4 flex justify-between items-center">
      
      <Link href="/" className="text-white text-2xl font-bold">
        Profile.fyi
      </Link>

      <div className='flex'>
        <div className='mr-3'>
          <select
            value={currency}
            onChange={handleCurrencyChange}
            className="mr-2 p-2 rounded text-black bg-blue-300"
          >
            <option value="USD">🇺🇸</option>
            <option value="EUR">🇪🇺</option>
            <option value="INR">🇮🇳</option>
          </select>
        </div>

        <div className="relative">
          <Link href="/cart" className="text-white flex">
            <ShoppingCartIcon className="h-8 w-8" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 right-8 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
            <p className='font-bold p-2'>Cart</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;