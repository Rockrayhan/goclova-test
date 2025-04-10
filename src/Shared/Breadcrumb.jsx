import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Function to capitalize the first letter
    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <div className='page-header-cumbread'  data-aos="fade-right"  data-aos-delay="800">
            <Link to="/">Home</Link>
            {pathnames.map((name, index) => (
                <span key={index}>
                    <span className='mx-1'>{' / '}</span>
                    <Link to={`/${pathnames.slice(0, index + 1).join('/')}`}>
                        {capitalizeFirstLetter(name)}
                    </Link>
                </span>
            ))}
        </div>
    );
};

export default Breadcrumb;
