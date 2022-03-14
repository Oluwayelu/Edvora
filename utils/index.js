export const createStateCity = (rides) => {
  return rides.reduce((prev, curr) => {
    if (
      prev[curr.state] !== undefined &&
      !prev[curr.state].includes(curr.city)
    ) {
      prev[curr.state].push(curr.city);
    } else {
      prev[curr.state] = [curr.city];
    }

    return prev;
  }, {});
};

export const filterByState = (rides, state) => {
  return rides.filter((ride) => {
    return ride.state === state;
  });
};

export const filterByCity = (rides, city) => {
  return rides.filter((ride) => {
    return ride.city === city;
  });
};
