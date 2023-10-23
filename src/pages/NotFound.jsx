import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <h2>Not Found</h2>
            <Link to={'/'}>Back to main</Link>
        </>
    );
};

export default NotFound;
