'use client'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../components/CartItem';
import { updateQuantity, removeItem } from '../slices/cartSlice';
import { selectConversionRate } from '../slices/currencySlice';
import TotalPrice from '../../components/TotalPrice'

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const conversionRate = useSelector(selectConversionRate);
    const dispatch = useDispatch();

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={{ ...item, currencySymbol: conversionRate.symbol, price: item.price }}
                            updateQuantity={handleUpdateQuantity}
                            removeItem={handleRemoveItem}
                        />
                    ))}
                    <TotalPrice
                        currencySymbol={conversionRate.symbol}
                        cartItems={cartItems}
                    />

                </div>
            )}
        </div>
    );
}

export default Cart;