import React from 'react'
// import Fun from './Fun';

const Card = () => {

    const ProductDetails = () => {
       
        // Fun()

        }

    return (
        <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl" onClick={ProductDetails}>

            {/* Product Image */}
            <div className="relative bg-gray-100 p-5" >
                <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                    20% OFF
                </span>

                <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
                    alt="Headphones"
                    className="h-52 w-full object-contain" 
                   
                />
            </div>

            {/* Product Details */}
            <div className="p-5">

                <p className="text-sm font-medium text-blue-600">
                    Electronics
                </p>

                <h2 className="mt-2 text-xl font-bold text-gray-800">
                    Premium Headphones
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                    Experience high-quality sound with comfortable design
                    and powerful bass.
                </p>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-gray-500">(4.8 / 5)</span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900">
                        ₹1,999
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                        ₹2,499
                    </span>
                </div>

                {/* Button */}
                {/* <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95">
                    Add to Cart
                </button> */}

            </div>
        </div>
    );
};

export default Card
