import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

export default function ErrorFallback() {
  return (
    <section className="">
      <p className="">Ooops! Looks like something went wrong!</p>
      <Link to={routes.mainPage()}>
        <button type="button" className="btn btn-steelblue">Go to Main Page</button>
      </Link>
    </section>
  );
}
