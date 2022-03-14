import React from "react";

const Filter = ({ close, stateCity, data, handleChange }) => {
  return (
    <div className="relative">
      <div
        onClick={close}
        className="bg-transparent fixed inset-0 h-full w-full z-20"
      />
      <div className="bg-[#131313] absolute w-60 lg:w-80 px-5 py-3 rounded-lg shadow-xl flex flex-col divide-y-2 divide-gray -right-1  z-50">
        <h1>Filters</h1>

        <div className="space-y-2 lg:text-xl">
          <select
            name="state"
            value={data.state}
            onChange={handleChange}
            className="w-full bg-transparent  outline-none"
          >
            <option className="text-black" value={""}>
              State
            </option>
            {stateCity &&
              Object.keys(stateCity).map((state, index) => (
                <option key={index} className="text-black" value={state}>
                  {state}
                </option>
              ))}
          </select>
          <select
            name="city"
            value={data.city}
            onChange={handleChange}
            className="w-full bg-transparent outline-none"
          >
            <option className="text-black" value={""}>
              City
            </option>
            {stateCity &&
              data.state !== "" &&
              stateCity[data.state].map((city, index) => (
                <option key={index} className="text-black" value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
