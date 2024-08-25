import React from 'react'

const ShimmerCard = () => {
    return (
        <div class="relative">
            <div class="p-4 w-72 h-64 bg-gray-300 animate-pulse rounded-md overflow-hidden flex-col ">
                <div class="h-24 bg-gray-200"></div>
                <div class="mt-2 h-4 bg-gray-200 w-3/4"></div>
                <div class="mt-2 h-4 bg-gray-200 w-1/2"></div>
            </div>
        </div>
    )
}

export default ShimmerCard