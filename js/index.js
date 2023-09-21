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
  document.querySelector(".data.javascript.off").className =
    "data javascript on";
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
      setJavaScript(event.target.value);
      break;
    case sufferingInputElement:
      // Invoca a la función para poner el grado de sufrimiento

      break;
  }
});
