import { useState } from "react";
import { ModalDialog } from "../modal dialog/ModalDialog";
import classes from "./flightBooker.module.scss";

const cities = [
  "New York",
  "Jacksonville",
  "Washington",
  "Las Vegas",
  "Los Angeles",
];

type TripType = "one-way" | "round-trip";

export const FlightBooker = () => {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [departureCity, setDepartureCity] = useState<string>(cities[0]);
  const [destinationCity, setDestinationCity] = useState<string>(cities[0]);

  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripType(e.target.value as TripType);
  };

  const handleChooseDeparture = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartureCity(e.target.value);
  };

  const handleChooseDestination = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDestinationCity(e.target.value);
  };

  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedToday = `${today.getFullYear()}-${month}-${day}`;

  const handleDepartureDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDepartureDate(e.target.value);
  };

  const handleReturnDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReturnDate(e.target.value);
  };

  const handleAdultPassengerChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAdult(Number(e.target.value));
  };

  const handleChildPassengerChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChild(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (departureCity === destinationCity) {
      setError("Departure and destination cities must be different!");
      return;
    }

    if (
      departureDate &&
      returnDate &&
      new Date(returnDate) <= new Date(departureDate)
    ) {
      setError("Return date must be after the departure date!");
      return;
    }
    setError("");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    alert("Booking confirmed!");
    setShowModal(false);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formGrid}>
      <h3>Flight Booking</h3>

      <div className={classes.tripType}>
        <label>
          <input
            type="radio"
            name="tripType"
            value="one-way"
            onChange={handleChange}
            checked={tripType === "one-way"}
          />
          one-way
        </label>

        <label>
          <input
            type="radio"
            name="tripType"
            value="round-trip"
            onChange={handleChange}
            checked={tripType === "round-trip"}
          />
          round-trip
        </label>
      </div>

      <div className={classes.flightInfo}>
        <div className={classes.cityInfo}>
          <label>
            Leaving from
            <select onChange={handleChooseDeparture}>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>

          <label>
            Going to
            <select onChange={handleChooseDestination}>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={classes.dates}>
          <label>
            Departure Date
            <input
              type="date"
              min={formattedToday}
              onChange={handleDepartureDateChange}
            />
          </label>
          {tripType === "round-trip" && (
            <label>
              Returning Date
              <input
                type="date"
                min={formattedToday}
                onChange={handleReturnDateChange}
              />
            </label>
          )}
        </div>
      </div>

      <div className={classes.flightInfo}>
        <p className={classes.subTitle}>Number of passengers:</p>
        <div className={classes.passengers}>
          <label>
            Adults
            <input
              type="number"
              value={adult}
              min={1}
              onChange={handleAdultPassengerChange}
            />
          </label>
          <label>
            Children
            <input
              type="number"
              value={child}
              min={0}
              onChange={handleChildPassengerChange}
            />
          </label>
        </div>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input type="submit" value="Review Booking" className={classes.submit} />
      {showModal && (
        <div>
          <ModalDialog onClose={handleCloseModal} title="Booking Summary">
            <p>
              Booking a {tripType === "one-way" ? "one-way" : "round-trip"}{" "}
              flight
              {tripType === "one-way"
                ? ` from ${departureCity} to ${destinationCity}`
                : ` from ${departureCity} to ${destinationCity} and back to ${departureCity}`}{" "}
              for {adult} {adult === 1 ? "adult" : "adults"}
              {child > 0 &&
                ` and ${child} ${child === 1 ? "child" : "children"}`}
              , departing on {departureDate}{" "}
              {tripType === "one-way" ? "." : `and returning on ${returnDate}.`}
            </p>

            <button onClick={handleConfirm} type="button">
              Confirm
            </button>
          </ModalDialog>
        </div>
      )}
    </form>
  );
};
