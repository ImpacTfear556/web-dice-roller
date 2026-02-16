"use strict";

function rollDie(sides = 6) {
  // Random integer from 1..sides
  return Math.floor(Math.random() * sides) + 1;
}

function setDice(values) {
  const ids = ["die1", "die2", "die3", "die4", "die5"];
  let sum = 0;

  for (let i = 0; i < ids.length; i++) {
    const v = values[i];
    sum += v;
    document.getElementById(ids[i]).value = v;
  }

  document.getElementById("sum").value = sum;
}

function rollAll() {
  const values = Array.from({ length: 5 }, () => rollDie(6));
  setDice(values);

  // ✅ keep Roll button focused so Enter rolls again
  document.getElementById("rollBtn").focus();
}

function resetAll() {
  setDice([0, 0, 0, 0, 0]);
  document.getElementById("rollBtn").focus();
}

// ✅ auto-roll on first load (Requirement 2: onload hint)
window.onload = () => {
  const rollBtn = document.getElementById("rollBtn");
  const resetBtn = document.getElementById("resetBtn");

  rollBtn.addEventListener("click", rollAll);
  resetBtn.addEventListener("click", resetAll);

  rollAll(); // first automatic roll
};
