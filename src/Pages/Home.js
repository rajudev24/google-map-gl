import React, { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();


    const handleInput = e =>{
        const value = e.target.value;
        setInputValue(value)
    }
    const handleSearch = e =>{
        navigate({
            pathname: '/hotels',
            search: `?${createSearchParams(inputValue)}`
        })

        e.preventDefault();
    }
    
    return (
        <div className='flex justify-center items-center h-[100vh]  bg-gradient-to-r from-violet-500 to-fuchsia-500'>
            <form onSubmit={handleSearch} className='w-2/4 flex justify-center'>
            <input  type="text"
            className=' p-4 rounded-l-lg w-3/4'
             placeholder='Search here' 
             onBlur={handleInput}
             />
                <button type='submit' 
                className='px-4 py-2 border  rounded-r-lg cursor-pointer  transition transform duration-100 ease-out  bg-cyan-600 text-white font-semibold text-lg'
                >Search</button>
            </form>
        </div>
    );
};

export default Home;