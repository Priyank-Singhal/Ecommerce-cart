import React from 'react'

const KqWidget = ({item, handleQuantityUpdate}) => {
    return (
        <div className="flex items-center mt-2">
            <button
                onClick={() => handleQuantityUpdate(item.id, item.quantity - 1)}
                className="px-2 bg-blue-500 text-white font-bold rounded"
            >
                -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
                onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}
                className="px-2 bg-blue-500 text-white font-bold rounded"
            >
                +
            </button>
        </div>
    )
}

export default KqWidget