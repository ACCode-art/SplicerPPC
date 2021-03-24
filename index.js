const input = document.querySelector("input");
const deals = document.querySelector(".deals");
const locations = document.querySelector(".locations");
const select = document.querySelector("select");
const main = document.querySelector(".main");
const offer = document.querySelector(".offer");

const offerValues = [
  "sale",
  "sales",
  "deals",
  "deal",
  "bundle",
  "buy",
  "instock",
  "compare",
  "offer",
];

const locationValues = ["near", "near my location", "near me", "my area"];

const loopArray = () => {
  const HTML = offerValues.map((element) => {
    return `${element} ${input.value},${input.value} ${element}`;
  });

  main.innerHTML = HTML;
};

const loopLocationArray = () => {
  const HTML = locationValues.map((element) => {
    return `${element} ${input.value},${input.value} ${element}`;
  });

  main.innerHTML = HTML;
};

deals.addEventListener("click", loopArray);
locations.addEventListener("click", loopLocationArray);
