import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'



const GoogleMap = ({ hotels }) => {
    const [hotelLocation, setHotelLocation] = useState({})


    // Transfrom the search result object into the 
    //  { latitude: 52.516272, longitude: 13.377722 } object
    const corodinates = hotels.map(hotel => ({
        longitude: hotel.lng,
        latitude: hotel.lat
    }))

    const center = getCenter(corodinates)


    const [viewPort, setViewPort] = useState({
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/rajudeb/ckya467fz1l6p14qsmepgwxko'
            mapboxApiAccessToken='pk.eyJ1IjoicmFqdWRlYiIsImEiOiJja3lhM3h2bmIwMXUzMnBxdXV2aXRvOTJuIn0.2WhRYJ3pReuUNBdMcA6lzQ'
            {...viewPort}
            width='100%'
            height='100%'
            onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
        >
            {hotels.map(hotel => (
                <div key={hotel._id}>
                    <Marker
                        longitude={hotel.lng}
                        latitude={hotel.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            role="img"
                            onClick={() => setHotelLocation(hotel)} className='cursor-pointer text-2xl animate-bounce'
                            aria-label='push-pin'

                        > <i class="fas fa-map-marker-alt text-red-400"></i> </p>
                    </Marker>
                    {/* show pop up */}
                    {hotelLocation.lng === hotel.lng ? (
                        <Popup
                            onClose={() => setHotelLocation({})}
                            closeOnClick={true}
                            latitude={hotel.lat}
                            longitude={hotel.lng}
                        >
                            <div className='flex flex-col flex-grow p-2 '>
                                <div className='flex justify-between'>
                                    <div className='flex items-center '>
                                        <i className="fas fa-street-view pr-2"></i>
                                        <p className='pr-2'>{hotel.street} </p>
                                        <span className='pr-2'>{hotel.city}, </span>
                                        <span> {hotel.state} </span>
                                    </div>

                                </div>
                                <div>
                                    <span>{hotel.baths} bath |</span>
                                    <span> {hotel.beds} bath |</span>
                                    <span> {hotel.sqft} sq.ft</span>
                                </div>
                                <div>
                                    <p>${hotel.estimatePrice} </p>
                                </div>
                            </div>
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
        </ReactMapGL >

    );
};

export default GoogleMap;