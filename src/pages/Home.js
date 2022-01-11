import React, { useState, useMemo, useRef } from "react";
import "../Styles/homestyles.css";
import TinderCard from "react-tinder-card";
import { Close, Heart } from "react-ionicons";
import FooterComponent from "../components/FooterComponent";

const Home = () => {
    const db = [
        {
          name: "Cake",
          url: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
        },
        {
          name: "Potato",
          url: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
        },
      ];
      /* cards methods */
      const [currentIndex, setCurrentIndex] = useState(db.length - 1);
      const [lastDirection, setLastDirection] = useState();
      // used for outOfFrame closure
      const currentIndexRef = useRef(currentIndex);
    
      const childRefs = useMemo(
        () =>
          Array(db.length)
            .fill(0)
            .map((i) => React.createRef()),
        []
      );
    
      const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
      };
      const canGoBack = currentIndex < db.length - 1;
      const canSwipe = currentIndex >= 0;
      // set last direction and decrease current index
    
      const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction);
        updateCurrentIndex(index - 1);
      };
      const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
      };
    
      const swipe = async (dir) => {
        if (canSwipe && currentIndex < db.length) {
          await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
        }
      };
    
      // increase current index and show card
      const goBack = async () => {
        if (!canGoBack) return;
        const newIndex = currentIndex + 1;
        updateCurrentIndex(newIndex);
        await childRefs[newIndex].current.restoreCard();
      };
     /*  end of swipe card methods */
  return (
    <div>
    <div className="home-container">
      {db.map((character, index) => (
        <TinderCard
          ref={childRefs[index]}
          className="swipe"
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name, index)}
          onCardLeftScreen={() => outOfFrame(character.name, index)}
        >
          <div className="card-area cardTD">
          <img className='img' src={character.url} alt=""  />
              <h2 className='title-card'>{character.name}</h2>  
          </div>
        </TinderCard>
      ))}
    </div>
    <div className="buton-container">
      <span>
        <button className={"rounded-button whiteb"} onClick={()=>swipe('left')}>
          <Close color={"#D36060"} />
        </button>
        <button className={"rounded-button blueb"} onClick={()=>swipe('right')}>
          <Heart color={"#ffffff"} />
        </button>
      </span>
    </div>
    <FooterComponent></FooterComponent>
  </div>
  );
};

export default Home;
