import React from "react";

export function Main() {
  return (
    <div className="container bg-dark p-5 text-center rounded shadow mt-5">
      <h1 className="mb-4">Welcome to Our Store</h1>
      <button className="btn btn-dark px-4 py-2 fs-5 shadow-sm">
        Show Products
      </button>
      <hr className="my-4" />

      <div className="container bg-white p-4 text-center rounded shadow-sm mt-4">
        <p className="text-muted">Browse through our amazing collection!</p>
      </div>
    </div>
  );
}
