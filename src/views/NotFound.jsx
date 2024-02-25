import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link to="/dashboard">Go back to Dashboard</Link>
    </div>
  );
};

export default NotFoundPage;
