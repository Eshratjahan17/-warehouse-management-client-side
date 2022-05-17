import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png';

const NotFound = () => {
  return (
    <div className="d-flex flex-column">
      <img className="w-50 mx-auto" src={notfound} alt="" />
      <Link className="text-decoration-none bg-success p-3 mx-auto text-light rounded-pill " to="/">
        Go To Home
      </Link>
    </div>
  );
};

export default NotFound;