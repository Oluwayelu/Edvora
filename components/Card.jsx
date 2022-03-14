/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

const Cards = ({ ride }) => {
  return (
    <div className="bg-dark-200 w-full p-3 lg:p-5 rounded-lg flex flex-col lg:flex-row items-start justify-between space-y-3 lg:space-y-0">
      <div className="w-full lg:w-2/3 inline-flex flex-col lg:flex-row items-stretch space-y-3 lg:space-y-0 lg:space-x-5">
        <img
          alt="img"
          src={ride.map_url}
          className="w-full lg:w-1/3 h-44 rounded-lg object-cover object-center"
        />
        <div className="flex flex-col items-start lg:text-xl text-gray lg:space-y-2">
          <p>
            Ride Id: <span className="text-white">{ride.id}</span>
          </p>
          <p>
            Origin Station:{" "}
            <span className="text-white">{ride.origin_station_code}</span>
          </p>
          <p>
            station_path:{" "}
            <span className="text-white">[{ride.station_path.join(",")}]</span>
          </p>
          <p>
            Date: <span className="text-white">{ride.date}</span>
          </p>
          <p>
            Distance: <span className="text-white">{ride.distance}</span>
          </p>
        </div>
      </div>

      <div className="self-end lg:self-start text-sm inline-flex items-center space-x-2 lg:space-x-5">
        <div className="bg-black px-5 py-2 rounded-full">{ride.city}</div>
        <div className="bg-black px-5 py-2 rounded-full">{ride.state}</div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  ride: PropTypes.object.isRequired,
};

export default Cards;
