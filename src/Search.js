import React from "react";

export default function Search() {
  return (
    <form className="mb-3">
      <div className="row">
        <div className="input-group col-3">
          <input
            type="search"
            placeholder="Search for a city ..."
            className="form-control border-end-0 border"
            autoComplete="off"
          />
          <span className="input-group-append">
            <button className="btn btn-large" type="submit">
              <i className="fas fa-search fa-2x"></i>
            </button>
          </span>
          <div className="col-2">
            <button
              type="button"
              className="btn current-location"
              id="current-button"
            >
              <i className="fas fa-map-marked-alt fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
