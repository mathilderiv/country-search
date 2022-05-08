import React from "react";

function Card({ country }) {
  return (
    <div className="card col-12 col-md-4 mt-4 mx-auto">
      <img
        src={country.flags.png}
        className="card-img-top"
        alt={country.name.common}
      />
      <div className="card-body">
        <h5 className="card-title">{country.name.common}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Capital : {country.capital}</li>

        <li className="list-group-item">Continent : {country.continents}</li>
      </ul>
      <div className="card-body">
        <a href={country.maps.googleMaps} className="card-link">
          Maps link
        </a>
      </div>
    </div>
  );
}

export default Card;
