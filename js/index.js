const form = document.getElementById("formid");
const btn = document.getElementById("btn");
const qrcode = document.getElementById("qrcode");

const generate_on_click = (e) => {
  const size = document.getElementById("size");
  const url = document.getElementById("url");

  if (url === "") {
    alert("Please Enter URL");
  } else {
    showSpinner();
  }
};

const showSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";
};

const hideSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "none";
};

hideSpinner();

btn.addEventListener("click", generate_on_click);
