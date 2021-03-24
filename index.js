const input = document.querySelector("input");
const deals = document.querySelector(".deals");
const locations = document.querySelector(".locations");
const select = document.querySelector("select");
const main = document.querySelector(".main");
const offer = document.querySelector(".offer");
const copy = document.querySelector(".copy");
const packs = document.querySelector(".packs");
const packOverlay = document.querySelector(".packOverlay");
const exitOverlay = document.querySelector(".exit-overlay");

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

const locationValues = [
  "near",
  "near my location",
  "near me",
  "my area",
  "in my area",
];

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

const copyMyText = () => {
  let text = main.textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Text copied to clipboard");
    })
    .catch((err) => {
      alert("Error in copying text: ", err);
    });
};

deals.addEventListener("click", loopArray);
locations.addEventListener("click", loopLocationArray);
copy.addEventListener("click", copyMyText);

packs.addEventListener("click", () => {
  packOverlay.classList.toggle("packOverlayShow");
  console.log("click");
});

exitOverlay.addEventListener("click", () => {
  packOverlay.classList.toggle("packOverlayShow");
  console.log("click");
});
