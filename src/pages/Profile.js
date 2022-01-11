import React, { useContext } from "react";
import { Moon, Sunny } from "react-ionicons";
import FooterComponent from "../components/FooterComponent";
import { ThemeContext } from "../context/themeContext";
const Profile = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(darkMode);
  const enableDarkMode = () => {
    theme.dispatch({ type: "DARKMODE" });
  };
  const enableLigthMode = () => {
    theme.dispatch({ type: "LIGHTMODE" });
  };
  return (
    <div className={darkMode ? "App-Black" : "App"}>
      <div className="home-container">
        <div className="card-area">
          <img
            className="img"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
          <h2 className="title-card">Carl Cj Johnson</h2>
          <div className="buton-container">
            <button onClick={enableDarkMode} className={"rounded-button blueb"}>
              <Moon color={"#ffffff"} />
            </button>
            <button
              onClick={enableLigthMode}
              className={"rounded-button whiteb"}
            >
              <Sunny color={"#D36060"} />
            </button>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Profile;
