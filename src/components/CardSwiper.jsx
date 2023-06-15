import "../styles/Card.css";
import TinderCard from "react-tinder-card";
import { useRef, useState } from "react";

export default function Card(props) {
  const card = useRef();
  const [name, setName] = useState("Vivi");
  const [image, setImage] = useState(
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F16%2F15%2Ffc%2F1615fc2712ed887184d8c37565b1f858.jpg&f=1&nofb=1&ipt=0c25b32015481622801c024dfb70586a078a1f3e8a375fc0b1911e5c82c1267f&ipo=images"
  );
  const [smashes, setSmashes] = useState(69);
  const [passes, setPasses] = useState(69);

  const onSwipe = (direction) => {
    switch (direction) {
      case "left":
        console.log("Pass");
      case "right":
        console.log("Smash");
        break;
    }
  };

  const onCardLeftScreen = (direction) => {
    card.current.restoreCard();
  };

  return (
    <>
      <section class="left">
        <h2>{name}:</h2>
        <hr />
        <ul>
          <li>
            {" "}
            <b>{smashes}</b> smashers
          </li>
          <li>
            <b>{passes}</b> passers
          </li>
          <li>
            <b>{Math.round((smashes / (smashes + passes)) * 100)}%</b> would
            smash
          </li>
        </ul>
      </section>

      <TinderCard
        ref={card}
        onSwipe={onSwipe}
        onCardLeftScreen={onCardLeftScreen}
        preventSwipe={["up", "down"]}
      >
        <img src={image} />
      </TinderCard>

      <section className="button_container">
        <button
          className="pass"
          onClick={() => {
            card.current.swipe("left");
          }}
        >
          Pass
        </button>
        <button
          className="smash"
          onClick={() => {
            card.current.swipe("right");
          }}
        >
          Smash
        </button>
      </section>

      <h2>{name}</h2>
    </>
  );
}
