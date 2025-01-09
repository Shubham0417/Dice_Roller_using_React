import { useState } from "react";
import "./styles.css";

export default function App() {
  const [dice, setDice] = useState({ die1: 1, die2: 1 });
  const [history, setHistory] = useState([]);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const die1 = Math.floor(Math.random() * 6) + 1;
      const die2 = Math.floor(Math.random() * 6) + 1;
      setDice({ die1, die2 });
      setHistory((prev) => [...prev, { die1, die2 }]);
      setRolling(false);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h1>Dice Roller</h1>
      <div style={styles.diceContainer}>
        <div style={styles.die}>{dice.die1}</div>
        <div style={styles.die}>{dice.die2}</div>
      </div>
      <button style={styles.button} onClick={rollDice}>
        Roll Dice
      </button>
      <div style={styles.history}>
        <ul>
          {history.map((roll, index) => {
            <li key={index}>
              Roll {index + 1} : {roll.die1} and {roll.die2}
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  diceContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "20px 0",
  },
  die: {
    fontSize: "2rem",
    border: "2px solid #000",
    borderRadius: "5px",
    padding: "20px",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    marginBottom: "20px",
  },
  history: { textAlign: "left", margin: "20px auto", maxWidth: "400px" },
};
