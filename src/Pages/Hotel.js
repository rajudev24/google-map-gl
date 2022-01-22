import React from 'react';

const Hotel = (props) => {
    const { baths, beds, city, estimatePrice, images, sqft, state, street } = props.hotel;

    return (
        <div className='flex py-5 px-2 pr-4 border-b cursor-pointer  hover:shadow-lg transition duration-200 ease-out first:border-t'>
            <div>
                <div className='relative'>
                    <img src={images} alt="img"
                        className='rounded-xl h-64 w-80  flex-shrink-0'
                    />
                </div>
                <div className='absolute -mt-10 p-2 w-[320px] bg-slate-400 flex justify-center'>
                    <p > ${estimatePrice} </p>
                </div>
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <div className='flex items-center '>
                        <i className="fas fa-street-view pr-2"></i>
                        <p className='pr-2'>{street} </p>
                        <span className='pr-2'>{city}, </span>
                        <span> {state} </span>
                    </div>
                    <div>
                        <i className="far fa-heart fa-2x"></i>
                    </div>
                </div>
                <div>
                    <span>{baths} bath |</span>
                    <span> {beds} bath |</span>
                    <span> {sqft} sq.ft</span>
                </div>
            </div>
        </div>
    );
};

export default Hotel;