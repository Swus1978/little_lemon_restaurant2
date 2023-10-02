import React from "react";
import { useNavigate } from 'react-router-dom';

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleOrderButtonClick = () => {
    navigate("/order");
  };
  const handleReservationsButtonClick = () => {
    navigate("/reservations");
  };
  const handleClick = () => {
    navigate('/another-route');
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1 className="title">Little Lemon Restaurant's</h1>
          <h2 className="state">Chicago</h2>
          <p className="hero-text">
            We are a family-owned Mediterranean restaurant,
            <br />
            focused on traditional recipes served with a modern twist.
          </p>
          <section className="main-button">
            <button
              className="hero-button"
              onClick={handleReservationsButtonClick}
              type="button"
            >
              Reservations
            </button>
          </section>
        </div>
        <div className="order-container">
          <img className="main-pic" src="/restauranfood.jpg" alt="restaurant" />
          <section className="order-button-section">
            <button
              className="order-button"
              onClick={handleOrderButtonClick}
              type="button"
            >
              Order Online
            </button>
          </section>
        </div>
      </section>

      <section className="main-card">
        <div className="card">
          <img
            className="card-img"
            src="/greeksalad.jpg"
            alt="salad"
            height="100px"
          />
          <h2>
            Greek Salad <span className="price">$12.99</span>
          </h2>
          <p>
            The famous Greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnishment with crunchy garlic and
            rosemary croutons. Order and delivery
          </p>
          <p>
            Order and Delivery
            <svg
              width="24px"
              height="24px"
              viewBox="-19 -19 138.00 138.00"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              stroke="#000000"
              stroke-width="2"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="2"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>Ecommerce copia 3</title>
                <path
                  d="M22.94,46.38h-5v-5a3,3,0,0,1,3-3h25a2,2,0,0,1,2,2v4a2,2,0,0,1-2,2"
                  fill="#e1f6fa"
                ></path>
                <path
                  d="M45.88,47.38v-2a1,1,0,0,0,1-1v-4a1,1,0,0,0-1-1h-25a2,2,0,0,0-2,2v4h4v2h-5a1,1,0,0,1-1-1v-5a4,4,0,0,1,4-4h25a3,3,0,0,1,3,3v4A3,3,0,0,1,45.88,47.38Z"
                  fill="#000000"
                ></path>
                <polygon
                  points="35.38 20.53 35.38 30.53 30.88 26.36 26.38 30.53 26.38 20.53 35.38 20.53"
                  fill="#5ca1ad"
                ></polygon>
                <path
                  d="M76.88,35.37c-3.24,0-7-2.62-7-6s3.76-6,7-6a1,1,0,0,1,1,1v10A1,1,0,0,1,76.88,35.37Zm-1-9.89c-2,.43-4,2-4,3.89s2,3.46,4,3.89V25.48Z"
                  fill="#000000"
                ></path>
                <path
                  d="M43.88,39.12h-2V20.62h-22v18.5h-2V19.62a1,1,0,0,1,1-1h24a1,1,0,0,1,1,1v19.5Z"
                  fill="#000000"
                ></path>
                <path
                  d="M45.88,47.38v-2a1,1,0,0,0,1-1v-4a1,1,0,0,0-1-1h-25a2,2,0,0,0-2,2v4h4v2h-5a1,1,0,0,1-1-1v-5a4,4,0,0,1,4-4h25a3,3,0,0,1,3,3v4A3,3,0,0,1,45.88,47.38Z"
                  fill="#000000"
                ></path>
                <rect
                  x="73.91"
                  y="30.95"
                  width="2"
                  height="22.84"
                  transform="translate(-11.15 41.48) rotate(-28.9)"
                  fill="#000000"
                ></rect>
                <rect
                  x="30.88"
                  y="70.38"
                  width="42"
                  height="2"
                  fill="#000000"
                ></rect>
                <rect
                  x="30.46"
                  y="65.38"
                  width="0.43"
                  height="2"
                  fill="#000000"
                ></rect>
                <path
                  d="M9.3,67.38H3.88a1,1,0,0,1-1-1.24L4.5,59.76A19,19,0,0,1,22.93,45.38h23a1,1,0,0,1,1,1.17L44.64,59.88a3,3,0,0,0,3,3.5H58.46a3,3,0,0,0,2.86-2.09l4.51-14.08L61,30.81l-3.62-5.43H51.88v-2h6a1,1,0,0,1,.83.45l4,6a1,1,0,0,1,.13.27l5,16.84a1,1,0,0,1,0,.59L63.23,61.9a5,5,0,0,1-4.76,3.47H47.61a5,5,0,0,1-4.94-5.82l2-12.18H22.93A17,17,0,0,0,6.44,60.25L5.17,65.38H9.3v2Z"
                  fill="#000000"
                ></path>
                <path
                  d="M83.88,75.38a6,6,0,1,1,6-6A6,6,0,0,1,83.88,75.38Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,83.88,65.38Z"
                  fill="#000000"
                ></path>
                <path
                  d="M72.38,33.38H62.47a1.08,1.08,0,0,1-1.09-1v-6a1,1,0,0,1,1-1h10v2h-9v4h9v2Z"
                  fill="#000000"
                ></path>
                <path
                  d="M65.6,70.69a18,18,0,0,1,14.7-19,18.46,18.46,0,0,1,1.91-.24,17.9,17.9,0,0,1,14.65,5.82,1,1,0,0,1,0,1.36l-3.71,4-1.46-1.36,3.06-3.29a16,16,0,0,0-12.38-4.52,16.89,16.89,0,0,0-1.7.22A16,16,0,0,0,67.59,70.54Z"
                  fill="#000000"
                ></path>
                <path
                  d="M83.88,81.38a12,12,0,0,1-11.8-9.85,11.71,11.71,0,0,1-.2-2.15A12,12,0,0,1,92.76,61.3h0A12,12,0,0,1,83.88,81.38Zm0-22a10,10,0,0,0-10,10A9.71,9.71,0,0,0,74,71.16a10,10,0,1,0,17.24-8.51h0A10,10,0,0,0,83.88,59.38Z"
                  fill="#000000"
                ></path>
                <path
                  d="M19.88,81.38A12,12,0,0,1,8.34,66.1a1,1,0,0,1,1-.73h6.6v2H10.09a10,10,0,1,0,19.63,3.79,9.67,9.67,0,0,0,.16-1.79,9.78,9.78,0,0,0-.21-2H23.86v-2h6.6a1,1,0,0,1,1,.73,12,12,0,0,1,.47,3.27,11.68,11.68,0,0,1-.2,2.15A12,12,0,0,1,19.88,81.38Z"
                  fill="#000000"
                ></path>
                <path
                  d="M19.88,75.38a6,6,0,0,1-6-6,5.92,5.92,0,0,1,1.22-3.6,1,1,0,0,1,.8-0.4h8a1,1,0,0,1,.79.39,5.87,5.87,0,0,1,1.24,3.61A6,6,0,0,1,19.88,75.38Zm-3.45-8a3.91,3.91,0,0,0-.55,2,4,4,0,0,0,8,0,3.86,3.86,0,0,0-.56-2H16.44Z"
                  fill="#000000"
                ></path>
                <rect width="100" height="100" fill="none"></rect>
              </g>
            </svg>
          </p>
        </div>

        <div className="card">
          <img
            className="card-img"
            src="/bruchetta.svg"
            alt="bread"
            height="100px"
          />
          <h2>
            Bruchetta <span className="price">$5.99</span>
          </h2>
          <p>
            Our Bruchetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil with a touch of fresh
            tomatoes.
          </p>
          <p>
            Order and Delivery
            <svg
              width="24px"
              height="24px"
              viewBox="-19 -19 138.00 138.00"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              stroke="#000000"
              stroke-width="2"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>Ecommerce copia 3</title>
                <path
                  d="M22.94,46.38h-5v-5a3,3,0,0,1,3-3h25a2,2,0,0,1,2,2v4a2,2,0,0,1-2,2"
                  fill="#e1f6fa"
                ></path>
                <path
                  d="M45.88,47.38v-2a1,1,0,0,0,1-1v-4a1,1,0,0,0-1-1h-25a2,2,0,0,0-2,2v4h4v2h-5a1,1,0,0,1-1-1v-5a4,4,0,0,1,4-4h25a3,3,0,0,1,3,3v4A3,3,0,0,1,45.88,47.38Z"
                  fill="#000000"
                ></path>
                <polygon
                  points="35.38 20.53 35.38 30.53 30.88 26.36 26.38 30.53 26.38 20.53 35.38 20.53"
                  fill="#5ca1ad"
                ></polygon>
                <path
                  d="M76.88,35.37c-3.24,0-7-2.62-7-6s3.76-6,7-6a1,1,0,0,1,1,1v10A1,1,0,0,1,76.88,35.37Zm-1-9.89c-2,.43-4,2-4,3.89s2,3.46,4,3.89V25.48Z"
                  fill="#000000"
                ></path>
                <path
                  d="M43.88,39.12h-2V20.62h-22v18.5h-2V19.62a1,1,0,0,1,1-1h24a1,1,0,0,1,1,1v19.5Z"
                  fill="#000000"
                ></path>
                <path
                  d="M45.88,47.38v-2a1,1,0,0,0,1-1v-4a1,1,0,0,0-1-1h-25a2,2,0,0,0-2,2v4h4v2h-5a1,1,0,0,1-1-1v-5a4,4,0,0,1,4-4h25a3,3,0,0,1,3,3v4A3,3,0,0,1,45.88,47.38Z"
                  fill="#000000"
                ></path>
                <rect
                  x="73.91"
                  y="30.95"
                  width="2"
                  height="22.84"
                  transform="translate(-11.15 41.48) rotate(-28.9)"
                  fill="#000000"
                ></rect>
                <rect
                  x="30.88"
                  y="70.38"
                  width="42"
                  height="2"
                  fill="#000000"
                ></rect>
                <rect
                  x="30.46"
                  y="65.38"
                  width="0.43"
                  height="2"
                  fill="#000000"
                ></rect>
                <path
                  d="M9.3,67.38H3.88a1,1,0,0,1-1-1.24L4.5,59.76A19,19,0,0,1,22.93,45.38h23a1,1,0,0,1,1,1.17L44.64,59.88a3,3,0,0,0,3,3.5H58.46a3,3,0,0,0,2.86-2.09l4.51-14.08L61,30.81l-3.62-5.43H51.88v-2h6a1,1,0,0,1,.83.45l4,6a1,1,0,0,1,.13.27l5,16.84a1,1,0,0,1,0,.59L63.23,61.9a5,5,0,0,1-4.76,3.47H47.61a5,5,0,0,1-4.94-5.82l2-12.18H22.93A17,17,0,0,0,6.44,60.25L5.17,65.38H9.3v2Z"
                  fill="#000000"
                ></path>
                <path
                  d="M83.88,75.38a6,6,0,1,1,6-6A6,6,0,0,1,83.88,75.38Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,83.88,65.38Z"
                  fill="#000000"
                ></path>
                <path
                  d="M72.38,33.38H62.47a1.08,1.08,0,0,1-1.09-1v-6a1,1,0,0,1,1-1h10v2h-9v4h9v2Z"
                  fill="#000000"
                ></path>
                <path
                  d="M65.6,70.69a18,18,0,0,1,14.7-19,18.46,18.46,0,0,1,1.91-.24,17.9,17.9,0,0,1,14.65,5.82,1,1,0,0,1,0,1.36l-3.71,4-1.46-1.36,3.06-3.29a16,16,0,0,0-12.38-4.52,16.89,16.89,0,0,0-1.7.22A16,16,0,0,0,67.59,70.54Z"
                  fill="#000000"
                ></path>
                <path
                  d="M83.88,81.38a12,12,0,0,1-11.8-9.85,11.71,11.71,0,0,1-.2-2.15A12,12,0,0,1,92.76,61.3h0A12,12,0,0,1,83.88,81.38Zm0-22a10,10,0,0,0-10,10A9.71,9.71,0,0,0,74,71.16a10,10,0,1,0,17.24-8.51h0A10,10,0,0,0,83.88,59.38Z"
                  fill="#000000"
                ></path>
                <path
                  d="M19.88,81.38A12,12,0,0,1,8.34,66.1a1,1,0,0,1,1-.73h6.6v2H10.09a10,10,0,1,0,19.63,3.79,9.67,9.67,0,0,0,.16-1.79,9.78,9.78,0,0,0-.21-2H23.86v-2h6.6a1,1,0,0,1,1,.73,12,12,0,0,1,.47,3.27,11.68,11.68,0,0,1-.2,2.15A12,12,0,0,1,19.88,81.38Z"
                  fill="#000000"
                ></path>
                <path
                  d="M19.88,75.38a6,6,0,0,1-6-6,5.92,5.92,0,0,1,1.22-3.6,1,1,0,0,1,.8-0.4h8a1,1,0,0,1,.79.39,5.87,5.87,0,0,1,1.24,3.61A6,6,0,0,1,19.88,75.38Zm-3.45-8a3.91,3.91,0,0,0-.55,2,4,4,0,0,0,8,0,3.86,3.86,0,0,0-.56-2H16.44Z"
                  fill="#000000"
                ></path>
                <rect width="100" height="100" fill="none"></rect>
              </g>
            </svg>
          </p>
        </div>

        <div className="card">
          <img
            className="card-img"
            src="/lemon dessert.jpg"
            alt="desert"
            height="100px"
          />
          <h2>
            Lemon Desert<span className="price">$5.00</span>
          </h2>

          <p>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <p>
            Order and Delivery
            <svg
              width="24px"
              height="24px"
              viewBox="-19 -19 138.00 138.00"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              stroke="#000000"
              stroke-width="2"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>Ecommerce copia 3</title>
                <path
                  d="M22.94,46.38h-5v-5a3,3,0,0,1,3-3h25a2,2,0,0,1,2,2v4a2,2,0,0,1-2,2"
                  fill="#e1f6fa"
                ></path>
                <path
                  d="M45.88,47.38v-2a1,1,0,0,0,1-1v-4a1,1,0,0,0-1-1h-25a2,2,0,0,0-2,2v4h4v2h-5a1,1,0,0,1-1-1v-5a4,4,0,0,1,4-4h25a3,3,0,0,1,3,3v4A3,3,0,0,1,45.88,47.38Z"
                  fill="#000000"
                ></path>
                <polygon
                  points="35.38 20.53 35.38 30.53 30.88 26.36 26.38 30.53 26.38 20.53 35.38 20.53"
                  fill="#5ca1ad"
                ></polygon>
                <path
                  d="M76.88,35.37c-3.24,0-7-2.62-7-6s3.76-6,7-6a1,1,0,0,1,1,1v10A1,1,0,0,1,76.88,35.37Zm-1-9.89c-2,.43-4,2-4,3.89s2,3.46,4,3.89V25.48Z"
                  fill="#000000"
                ></path>
                <path
                  d="M43.88,39.12h-2V20.62h-22v18.5h-2V19.62a1,1,0,0,1,1-1h24a1,1,0,0,1,1,1v19.5Z"
                  fill="#000000"
                ></path>
                <path
                  d="M45.88,47.38v-2a1,1,0,0,0,1-1v-4a1,1,0,0,0-1-1h-25a2,2,0,0,0-2,2v4h4v2h-5a1,1,0,0,1-1-1v-5a4,4,0,0,1,4-4h25a3,3,0,0,1,3,3v4A3,3,0,0,1,45.88,47.38Z"
                  fill="#000000"
                ></path>
                <rect
                  x="73.91"
                  y="30.95"
                  width="2"
                  height="22.84"
                  transform="translate(-11.15 41.48) rotate(-28.9)"
                  fill="#000000"
                ></rect>
                <rect
                  x="30.88"
                  y="70.38"
                  width="42"
                  height="2"
                  fill="#000000"
                ></rect>
                <rect
                  x="30.46"
                  y="65.38"
                  width="0.43"
                  height="2"
                  fill="#000000"
                ></rect>
                <path
                  d="M9.3,67.38H3.88a1,1,0,0,1-1-1.24L4.5,59.76A19,19,0,0,1,22.93,45.38h23a1,1,0,0,1,1,1.17L44.64,59.88a3,3,0,0,0,3,3.5H58.46a3,3,0,0,0,2.86-2.09l4.51-14.08L61,30.81l-3.62-5.43H51.88v-2h6a1,1,0,0,1,.83.45l4,6a1,1,0,0,1,.13.27l5,16.84a1,1,0,0,1,0,.59L63.23,61.9a5,5,0,0,1-4.76,3.47H47.61a5,5,0,0,1-4.94-5.82l2-12.18H22.93A17,17,0,0,0,6.44,60.25L5.17,65.38H9.3v2Z"
                  fill="#000000"
                ></path>
                <path
                  d="M83.88,75.38a6,6,0,1,1,6-6A6,6,0,0,1,83.88,75.38Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,83.88,65.38Z"
                  fill="#000000"
                ></path>
                <path
                  d="M72.38,33.38H62.47a1.08,1.08,0,0,1-1.09-1v-6a1,1,0,0,1,1-1h10v2h-9v4h9v2Z"
                  fill="#000000"
                ></path>
                <path
                  d="M65.6,70.69a18,18,0,0,1,14.7-19,18.46,18.46,0,0,1,1.91-.24,17.9,17.9,0,0,1,14.65,5.82,1,1,0,0,1,0,1.36l-3.71,4-1.46-1.36,3.06-3.29a16,16,0,0,0-12.38-4.52,16.89,16.89,0,0,0-1.7.22A16,16,0,0,0,67.59,70.54Z"
                  fill="#000000"
                ></path>
                <path
                  d="M83.88,81.38a12,12,0,0,1-11.8-9.85,11.71,11.71,0,0,1-.2-2.15A12,12,0,0,1,92.76,61.3h0A12,12,0,0,1,83.88,81.38Zm0-22a10,10,0,0,0-10,10A9.71,9.71,0,0,0,74,71.16a10,10,0,1,0,17.24-8.51h0A10,10,0,0,0,83.88,59.38Z"
                  fill="#000000"
                ></path>
                <path
                  d="M19.88,81.38A12,12,0,0,1,8.34,66.1a1,1,0,0,1,1-.73h6.6v2H10.09a10,10,0,1,0,19.63,3.79,9.67,9.67,0,0,0,.16-1.79,9.78,9.78,0,0,0-.21-2H23.86v-2h6.6a1,1,0,0,1,1,.73,12,12,0,0,1,.47,3.27,11.68,11.68,0,0,1-.2,2.15A12,12,0,0,1,19.88,81.38Z"
                  fill="#000000"
                ></path>
                <path
                  d="M19.88,75.38a6,6,0,0,1-6-6,5.92,5.92,0,0,1,1.22-3.6,1,1,0,0,1,.8-0.4h8a1,1,0,0,1,.79.39,5.87,5.87,0,0,1,1.24,3.61A6,6,0,0,1,19.88,75.38Zm-3.45-8a3.91,3.91,0,0,0-.55,2,4,4,0,0,0,8,0,3.86,3.86,0,0,0-.56-2H16.44Z"
                  fill="#000000"
                ></path>
                <rect width="100" height="100" fill="none"></rect>
              </g>
            </svg>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;