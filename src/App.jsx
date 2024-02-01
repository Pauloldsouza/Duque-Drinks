import { useState } from "react";
import recipes from "./components/recipes";
import Card from "./components/Card";
import React from "react";
import styles from "./styles.module.css";

export default function App() {
  const [display, setDisplay] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [showUl, setShowUl] = useState(true);
  function handleClick(recipe) {
    setShowCard(true);
    setShowUl(false);
    setDisplay(<pre>{recipe}</pre>);
  }

  function hideCard() {
    setShowCard(false);
    setShowUl(true);
  }

  const drinksList = (
    <div>
      <ul>
        <strong>Drinks</strong>
        {recipes.map((selected, index) => (
          <li key={index} onClick={() => handleClick(selected.recipe)}>
            {selected.title}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className={styles.body}>
      <h1>Restaurante Duque</h1>
      {showUl && drinksList}
      {showCard && (
        <div className={styles.Card}>
          <button onClick={hideCard}>X</button>
          <Card recipe={display} />
        </div>
      )}
    </div>
  );
}
