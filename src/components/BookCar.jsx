import { useState } from "react";
import { useEffect } from "react";
import { CAR_DATA } from "./CarData";
import { LOCATION_DATA } from "./LocationData";

const BookCar = () => {
  // booking modal
  const [isModal, setIsModal] = useState(false);

  // modal info
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostCode] = useState("");

  // handle modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handlePostcode = (e) => {
    setPostCode(e.target.value);
  };

  // toggle modal
  const toggleModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUpLocation === "" ||
      dropOffLocation === "" ||
      pickUpTime === "" ||
      dropOffTime === "" ||
      carSelection === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setIsModal(!isModal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (isModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setIsModal(!isModal);
    const doneMsg = document.querySelector(".booking-completed");
    doneMsg.style.display = "flex";
  };

  // book car info
  const [carSelection, setCarSelection] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // handle book car form inputs
  const handleCarSelection = (e) => {
    setCarSelection(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePickUpLocation = (e) => {
    setPickUpLocation(e.target.value);
  };

  const handleDropOffLocation = (e) => {
    setDropOffLocation(e.target.value);
  };

  const handlePickUpTime = (e) => {
    setPickUpTime(e.target.value);
  };

  const handleDropOffTime = (e) => {
    setDropOffTime(e.target.value);
  };

  // based on car value name show car img in modal

  let carModalImg = CAR_DATA.filter((item) => {
    // console.log(item.id);
    return item.name === carImg;
  }).map(({ img }) => {
    return img;
  });

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-completed");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="book-car" className="book-car-section">
        {/* modal overlay */}
        <div
          onClick={toggleModal}
          className={`modal-overlay ${isModal ? "active-modal" : ""}`}
        ></div>
        {/* search box (book car) */}
        <div className="container">
          <div className="book-car-content">
            <div className="book-car-content-box">
              <h2>Book Car</h2>

              <p className="error-message">
                All fields are required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-completed">
                Check your email to confirm an order.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="book-form">
                <div className="book-form-select-car">
                  <label>
                    <i className="fa-solid fa-car"></i> Select Your Car
                  </label>
                  <select
                    value={carSelection}
                    onChange={handleCarSelection}
                    placeholder="Select your car"
                  >
                    <option value="" disabled selected hidden>
                      Select your car
                    </option>
                    {CAR_DATA.map(({ name }) => {
                      return <option value={name}>{name}</option>;
                    })}
                  </select>
                </div>

                <div className="book-form-pick-up-location">
                  <label>
                    <i className="fa-solid fa-location-dot"></i>Pick-Up Location
                  </label>
                  <select
                    value={pickUpLocation}
                    onChange={handlePickUpLocation}
                  >
                    <option value="" disabled selected hidden>
                      Select pick-up location
                    </option>
                    {LOCATION_DATA.map(({ location }) => {
                      return <option>{location}</option>;
                    })}
                  </select>
                </div>

                <div className="book-form-drop-off-location">
                  <label>
                    <i className="fa-solid fa-location-dot"></i>Drop-Off
                    Location
                  </label>
                  <select
                    value={dropOffLocation}
                    onChange={handleDropOffLocation}
                  >
                    <option value="" disabled selected hidden>
                      Select drop-off location
                    </option>
                    {LOCATION_DATA.map(({ location }) => {
                      return <option>{location}</option>;
                    })}
                  </select>
                </div>

                <div className="book-form-pick-up-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i>
                    Pick-up
                  </label>
                  <input
                    id="picktime"
                    value={pickUpTime}
                    onChange={handlePickUpTime}
                    type="date"
                  ></input>
                </div>

                <div className="book-form-drop-off-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i>
                    Drop-Off
                  </label>
                  <input
                    id="droptime"
                    value={dropOffTime}
                    onChange={handleDropOffTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={toggleModal} type="submit">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal (complete reservation)*/}
      <div className={`booking-modal ${isModal ? "active-modal" : ""}`}>
        <div className="booking-modal-title">
          <h2>Complete Reservation</h2>
          <i onClick={toggleModal} className="fa-solid fa-xmark"></i>
        </div>

        <div className="booking-modal-info">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>

        {/* car info */}
        <div className="booking-modal-car-info">
          <div className="dates-div">
            <div className="booking-modal-car-info-dates">
              <h5>Location & Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickUpTime}{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal-car-info-dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropOffTime}{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal-car-info-dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUpLocation}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal-car-info-dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropOffLocation}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal-car-info-model">
            <h5>
              <span>Car -</span> {carSelection}
            </h5>
            <img src={carModalImg} alt={carSelection} />
          </div>
        </div>

        {/* person info */}
        <div className="booking-modal-person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form-2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form-col-1">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form-col-2">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Postcode <b>*</b>
                </label>
                <input
                  value={postcode}
                  onChange={handlePostcode}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <span className="info-form-checkbox">
              <input type="checkbox"></input>
              <p>Please send me the latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default BookCar;
