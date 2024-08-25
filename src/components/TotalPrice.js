import React, { useState } from 'react'

const TotalPrice = ({currencySymbol, cartItems}) => {
    const [discountCode, setDiscountCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [validCode, setValidCode] = useState(false);
    const [applied, setApplied] = useState(false);

    const handleApplyDiscount = () => {
        if (discountCode === 'Profile.fyi') {
            setDiscount(0.5);
            setValidCode(true);
            setApplied(true);
        } else {
            setDiscount(0);
            setValidCode(false);
            setApplied(true);
        }
    };

    const calculateSubtotal = () => {
        return cartItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return subtotal - subtotal * discount;
    };


    return (
        <div className="p-6 border rounded mx-[25%]">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>{currencySymbol}{calculateSubtotal()}</span>
            </div>
            {applied && (
                <div className={`mb-2 ${validCode ? 'text-green-600' : 'text-red-600'}`}>
                    {validCode ? `Discount Applied: ${discount * 100}%` : 'Invalid Discount Code'}
                </div>
            )}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter discount code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="w-full p-2 border rounded text-black"
                />
                <button
                    onClick={handleApplyDiscount}
                    className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Apply Discount
                </button>
            </div>
            <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>{currencySymbol}{calculateTotal().toFixed(2)}</span>
            </div>
            <button className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                Proceed to Checkout
            </button>
        </div>
    )
}

export default TotalPrice