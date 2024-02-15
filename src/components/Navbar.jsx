import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='bg-blue-500 p-4'>
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className='text-white text-2xl font-semibold'>Logo</Link>

                <ul className='flex space-x-10'>
                    <li><Link to="/" className='text-white text-2xl font-semibold'>Home</Link></li>
                    <li><Link to="/owner" className='text-white text-2xl font-semibold'>Owner</Link></li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;
