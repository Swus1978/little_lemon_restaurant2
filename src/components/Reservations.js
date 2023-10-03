import React, { useState, useRef, useEffect } from "react";
import fetchAPI from "./Fetch.json";
import "./Reservations.css";
import { bookingConfirmed } from "./booking.js";
import Field from './Field'; 



const Reservations = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [role, setRole] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const timeOptions = fetchAPI.formOptions.timeOptions;
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const occasionRef = useRef(null);
  const inputRef = React.createRef();
  const selectRef = React.createRef();
 
 
 
  console.log('Event:', event);



  const resetFormFields = () => {
    // Set selectedIndex to 0 for each ref
    if (dateRef.current) {
      dateRef.current.value = "";
    }
    if (timeRef.current) {
      timeRef.current.selectedIndex = 0;
    }
    if (occasionRef.current) {
      occasionRef.current.selectedIndex = 0;
    }
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    console.log("Selected Time:", selectedTime);
    setSelectedTime(selectedTime);
  };

  const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return phoneNumber.length === 10;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const isEmailValid = validateEmail(email);
    const isPhoneNumberValid = validatePhoneNumber(phoneNumber);
  
    setEmailError(!isEmailValid);
    setPhoneError(!isPhoneNumberValid);
  
    if (inputRef.current) {
      inputRef.current.focus();
    }
  
    if (!isEmailValid) {
      window.alert("Invalid email. Please enter a valid email address.");
    }
  
    if (!isPhoneNumberValid) {
      window.alert("Invalid phone number. Please enter a valid phone number.");
    }
  
    if (isEmailValid && isPhoneNumberValid) {
      console.log("Form submitted:", {
        date,
        time,
        occasion,
        firstName,
        lastName,
        email,
        phoneNumber,
        specialInstructions,
        agreeToTerms,
      });
  
      resetFormFields();
  
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setSpecialInstructions("");
      setAgreeToTerms(false);
      setSelectedTime("");
      setGuests("");
      setRole("");
  
      // Call bookingConfirmed
      alert("About to call bookingConfirmed()");
      bookingConfirmed("About to call bookingConfirmed()");; // Call the function

  
      window.alert("Form submitted successfully!");
    }
  };
  
  

  const handleCheckboxChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const getIsFormValid = () => {
    return true;
  };

  const initializeTimes = async () => {
    try {
      const today = new Date();
      const availableTimes = await fetchAPI(today);
      setAvailableTimes(availableTimes);
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <div className="reservations">
      <div>
        <img className="chef" src="/restaurant chef B.jpg" alt="restaurant" />
      </div>
      <div>
        <h1 className="form-title">
          To book a reservation, please fill out this form.
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="reservation-form">
        <fieldset>
          <br />
          <div className="Field">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="res-date"
              ref={dateRef}
              onChange={handleTimeChange}
            />
          </div>
          <div className="Field">
            <label htmlFor="res-time">Choose time</label>
            <select  id="res-time" name="rest-time" ref={selectRef}>
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className="Field">
            <label htmlFor="occasion">Occasion</label>
            <select
              ref={selectRef}
              id="occasion"
              name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
          <div className="Field">
            <label>
              Role <span>*</span>
            </label>
            <select ref={selectRef} value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select a location</option>
              <option value="mall of asia">Mall of Asia</option>
              <option value="greek mall">Greek Mall</option>
            </select>
          </div>
          <div className="Field">
            <label>
              Number of guests:
              <input
                id="numberOfGuests"
                name="numberOfGuests"
                type="number"
                ref={inputRef}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
              />
            </label>
          </div>
          <div className="Field">
            <label>
              Select time:
              <input
                id="lunchTime"
                name="lunchTime"
                type="radio"
                ref={inputRef}
                value="Lunch"
                checked={selectedTime === "Lunch"}
                onChange={handleTimeChange}
              />
              Lunch
            </label>
            <label>
              <input
                id="dinner-time"
                name="dinner-time"
                type="radio"
                ref={inputRef}
                value="Dinner"
                checked={selectedTime === "Dinner"}
                onChange={handleTimeChange}
              />
              Dinner
            </label>
          </div>
          <div className="Field">
            <label>First name</label>
            <input
              id="firstName"
              name="firstName"
              value={firstName}
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="* First name"
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              id="lastName"
              name="lastName"
              value={lastName}
              type="text"
              ref={inputRef}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
          <Field emailError={emailError} phoneError={phoneError} data-testid="emailField" className="error">
        <label>Email address</label>
        <input
          id="emailAddress"
          name="emailAddress"
          value={email}
          type="email"
          ref={inputRef}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="* Email address"
        />
      </Field>

      <Field emailError={phoneError} data-testid="phoneField" className="error">
        <label>Phone number</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          type="number"
          ref={inputRef}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="* Phone number"
          min="10"
        />
      </Field>
          <div className="Field">
            <label>Special instructions</label>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="* Special instructions"
            />
          </div>
          <div className="Field">
            <label htmlFor="agreeCheckbox" className="terms-label">
              I agree with terms and conditions, and privacy policy.
              <input
                id="checkbox-agreeCheck"
                name="checkbox-agreeCheck"
                className="terms-input"
                type="checkbox"
                ref={inputRef}
                checked={agreeToTerms}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
          <button
           type="submit"
           disabled={!getIsFormValid()}
           aria-label="Reserve"
         >
            Reserve
         </button>
         
        </fieldset>
      </form>
    </div>
  );
};

export default Reservations;
