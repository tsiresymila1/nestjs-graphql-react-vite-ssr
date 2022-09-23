import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      Page d'accueil <Link to="/about">te</Link>
      <img
        alt=""
        className="logo"
        src="client/assets/logo.svg" 
        width="125"
        height="125"
      />
    </div>
  );
};
