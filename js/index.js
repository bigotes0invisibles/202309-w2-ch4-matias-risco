const formElement = document.querySelector(".form-data");
const nameInputElement = formElement.querySelector("#name");
const birthdateInputElement = formElement.querySelector("#birthdate");
const pictureInputElement = formElement.querySelector("#picture");
const javascriptInputElement = formElement.querySelector("#javascript");
const sufferingInputElement = formElement.querySelector("#suffering");

const setName = (name) => {
  document.querySelector(".name").textContent = name;
  document.querySelector(".greeting").className = "greeting on";
};

const setAge = (age) => {
  document.querySelector(".age-number").textContent =
    new Date().getFullYear() - age.split("-")[0];
  document.querySelector(".data.age").className = "data age on";
};

const setJavaScript = (isProgramerJavascript) => {
  if (
    document.querySelector(".javascript-yes").className.split(" ")[1] != "on"
  ) {
    document.querySelector(".javascript-yes").className = "javascript-yes on";
    document.querySelector(".javascript-no").className = "javascript-no off";
  } else {
    document.querySelector(".javascript-yes").className = "javascript-yes off";
    document.querySelector(".javascript-no").className = "javascript-no on";
  }
  document.querySelector(".data.javascript").className = "data javascript on";
};

const setImg = (img) => {
  document.querySelector(".avatar").src = img;
  document.querySelector(".avatar").className = "avatar on";
};

const setSuffering = (sufferingQuantity) => {
  const classSufferingQuantity = document.querySelector(".suffering-quantity");
  if (sufferingQuantity < 5) {
    classSufferingQuantity.textContent = "poco";
    classSufferingQuantity.className = "suffering-quantity suffering-danger";
  } else if (sufferingQuantity < 8) {
    classSufferingQuantity.textContent = "normal";
    classSufferingQuantity.className = "suffering-quantity suffering-warning";
  } else {
    classSufferingQuantity.textContent = "mucho";
    classSufferingQuantity.className = "suffering-quantity suffering-ok";
  }
  document.querySelector(".data.suffering").className = "data suffering on";
};

formElement.addEventListener("change", (event) => {
  switch (event.target) {
    case nameInputElement:
      // Invoca a la función para poner el nombre
      setName(event.target.value);
      break;
    case birthdateInputElement:
      // Invoca a la función para poner la edad
      setAge(event.target.value);
      break;
    case pictureInputElement:
      // Invoca a la función para poner la imagen
      setImg(event.target.value);
      break;
    case javascriptInputElement:
      // Invoca a la función para poner si ha programado previamente JS o no
      setJavaScript(event.target.value);
      break;
    case sufferingInputElement:
      // Invoca a la función para poner el grado de sufrimiento
      setSuffering(event.target.value);
      break;
  }
});
