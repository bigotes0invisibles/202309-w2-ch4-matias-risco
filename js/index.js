const formElement = document.querySelector(".form-data");
const nameInputElement = formElement.querySelector("#name");
const birthdateInputElement = formElement.querySelector("#birthdate");
const pictureInputElement = formElement.querySelector("#picture");
const javascriptInputElement = formElement.querySelector("#javascript");
const sufferingInputElement = formElement.querySelector("#suffering");

const setName = (name) => {
  document.querySelector(".name").textContent = name;
  document.querySelector(".greeting.off").className = "greeting on";
};

const setAge = (age) => {
  document.querySelector(".age-number").textContent =
    new Date().getFullYear() - age.split("-")[0];
  document.querySelector(".data.age.off").className = "data age on";
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

      break;
    case javascriptInputElement:
      // Invoca a la función para poner si ha programado previamente JS o no

      break;
    case sufferingInputElement:
      // Invoca a la función para poner el grado de sufrimiento

      break;
  }
});
