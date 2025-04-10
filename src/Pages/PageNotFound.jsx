import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="bg-base-200 h-screen flex flex-col justify-center items-center text-center">
        <div className="max-w-lg">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-4xl font-semibold mt-4 text-secondary">Page Not Found</h2>
          <p className="text-lg mt-4 text-gray-600">
            Oops! The page you're looking for doesn't exist. It might have been removed, or the link is broken.
          </p>
          <div className="mt-6">
            <Link to="/">
              <button className="btn btn-primary btn-wide">Go Back Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default PageNotFound;