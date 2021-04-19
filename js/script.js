const assignButton = document.querySelector(".assign");

const assignedItems = document.querySelector(".assigned-items");
// invite button
let addGuestButton = document.querySelector(".invite");
// label for the invite button
let guestInputLabel = document.querySelector(".add-guest label");
// text input box
let guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
let guestList = document.querySelector(".guest-list");
// span class for number of guests attending
let guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
let guestFull = document.querySelector(".alert");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
  }
  clearInput();
  updateGuestCount();
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  let listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "3-Bean Israeli Couscous Salad",
    "Chilled Cucumber Noodles with Sesame Dressing",
    "Kiwi-Jalapeño Salsa",
    "Potato Salad",
    "Flan",
    "Arroz con Pollo",
    "Arroz chaufa",
    "Peruvian Ceviche",
    "Spagetthi",
    "McDonalds",
    "Cookies",
    "Burger King"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
