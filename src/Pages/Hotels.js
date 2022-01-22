import React, { useEffect, useState } from 'react';
import GoogleMap from './GoogleMap';
import Hotel from './Hotel';

const Hotels = () => {
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-mountain-40498.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])
    console.log(hotels)
    return (
        
            <main className='flex max-w-7xl mx-auto'>
                <section className='mt-14'>
                    {
                        hotels?.map(hotel =>
                            <Hotel
                                key={hotel._id}
                                hotel={hotel}
                            />

                        )
                    }
                </section>
                <section className='min-w-[600px]'>
                    <GoogleMap hotels={hotels}>

                    </GoogleMap>
                </section>
            </main>
        
    );
};

export default Hotels;