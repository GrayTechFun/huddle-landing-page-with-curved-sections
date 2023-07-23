const input = document.querySelector(".input");
const error = document.querySelector(".error");

input.addEventListener("click", (e) => {
  if (input.value == "" || input.value == null) {
    error.classList.add("show");
  } else {
    error.classList.remove("show");
  }
});
