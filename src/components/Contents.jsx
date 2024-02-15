import React from 'react';
import { Link } from 'react-router-dom';

function Contents() {
    return (
        <div className='bg-gray-200 text-black py-60'>
        <div className='container mx-auto text-center'>
            <div className="flex justify-center">
            <h1 className='text-5xl font-extrabold mb-20'>
                Generation Thailand<br />
                React-Assessment
            </h1>
            </div>

            <ul className='flex justify-center space-x-10'>
            <li>
                <Link to="/user" className='bg-blue-500 text-white font-semibold text-xl px-8 py-4 rounded-lg shadow-md mt-8 inline-block hover:bg-blue-600'>User Home Sector</Link>
            </li>
            <li>
                <Link to="/admin" className='bg-blue-500 text-white font-semibold text-xl px-8 py-4 rounded-lg shadow-md mt-8 inline-block hover:bg-blue-600'>Admin Home Sector</Link>
            </li>
            </ul>
        </div>
        </div>
    );
}

export default Contents;
