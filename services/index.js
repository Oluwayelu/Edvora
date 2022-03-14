import { createStateCity } from "../utils";

export class Rides {
  constructor(rides, code) {
    this.rides = rides
      .reduce((prev, cur) => {
        const val = cur.station_path.filter((d) => d >= code)[0];
        prev.push({ ...cur, distance: val - code });
        return prev;
      }, [])
      .sort((a, b) => (a.distance > b.distance ? 1 : -1));
    this.stateCity = createStateCity(rides);
  }

  upcomingRides() {
    return this.rides.filter((ride) => {
      return new Date(ride.date).getTime() > new Date().getTime();
    });
  }

  pastRides() {
    return this.rides.filter((ride) => {
      return new Date(ride.date).getTime() <= new Date().getTime();
    });
  }
}
