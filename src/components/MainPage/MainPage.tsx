import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
// import PopularMovies from "./PopularMovies";
import Searching from "./SearchingBlock/Searching";

const PopularMovies = React.lazy(() => import("./PopularMovies"));

export default function MainPage() {
  return (
    <div className="col">
      <Searching />
      <Suspense fallback={(
        <div className="row d-flex justify-content-center align-items-center h-100">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      >
        <PopularMovies />
      </Suspense>
    </div>
  );
}
