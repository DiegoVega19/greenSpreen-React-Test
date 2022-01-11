import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import "../Styles/landingStyles.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const images = [
    "1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  ];
  useEffect(() => {
    setInterval(() => {
      setpostion((index) => (index + 1) % images.length);
    }, 2000);
  }, []);
  const [postion, setpostion] = useState(0);
  const transition = useTransition(postion, {
    from: { opacity: 0.5 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
  });
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="row-container">
      <div className="text-divider">
        <span>
          <h2 className="title">Discover Your Best Meals With Us</h2>
          <p className="sub-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button onClick={handleClick} className="login-button">
            <span>Login</span>
          </button>
        </span>
      </div>
      <div className="img-divider">
        {transition((style, index) => (
          <animated.div
            style={{
              ...style,
              position: "absolute",
              backgroundImage:`url(https://images.pexels.com/photos/${images[index]})`,
              width: "70%" /* or any custom size */,
              height: "520px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            {" "}
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
