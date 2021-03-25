const input = document.querySelector("input");
const deals = document.querySelector(".deals");
const locations = document.querySelector(".locations");
const electricalStoresElement = document.querySelector(".electricalStores");
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
  "on sale",
  "low-priced",
  "lowpriced",
  "low price",
];

const locationValues = [
  "near",
  "near my location",
  "near me",
  "my area",
  "in my area",
  "around my area",
  "around my location",
];

const electricalStores = [
  "Amazon",
  "Currys PC World",
  "John Lewis & Partners",
  "John Lewis",
  "Very",
  "AO",
  "ebay",
  "Littlewoods",
];

const loopArrayUniversal = (array) => {
  const HTML = array.map((element) => {
    return `${element} ${input.value},${input.value} ${element}`;
  });

  main.innerHTML = HTML;
};

// event listeners

deals.addEventListener("click", () => {
  loopArrayUniversal(offerValues);
});

locations.addEventListener("click", () => {
  loopArrayUniversal(locationValues);
});
electricalStoresElement.addEventListener("click", () => {
  loopArrayUniversal(electricalStores);
});

//show overlay

packs.addEventListener("click", () => {
  packOverlay.classList.toggle("packOverlayShow");
  console.log("click");
});

exitOverlay.addEventListener("click", () => {
  packOverlay.classList.toggle("packOverlayShow");
  console.log("click");
});

//mouse over

packs.addEventListener("mouseover", () => {
  packs.textContent = "go!";
});

packs.addEventListener("mouseout", () => {
  packs.textContent = "search";
});

// copy to clipboard

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
