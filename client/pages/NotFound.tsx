import * as React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return <div>
        <h1>Not found </h1>
        <div>
        <Link to="/">Go Home</Link>
        </div>
        <div>
        <Link to="/about">Go About</Link>
        </div>
    </div>
}