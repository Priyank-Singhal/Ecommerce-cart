import React from 'react'
import ShimmerCard from '@/components/ShimmerCard';

const Shimmer = () => {
    return (
        <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 20 }).map((_, index) => (
            <ShimmerCard key={index} />
        ))}
    </div>
    )
}

export default Shimmer