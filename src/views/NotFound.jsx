import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Oops! Cette page n'existe pas !</p>
      <Link to="/dashboard">Retourner au dashboard</Link>
    </div>
  );
};

export default NotFoundPage;
