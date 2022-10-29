const form = document.getElementById("formid");
const qr = document.getElementById("qrcode");



const generate_on_click = (e) => {
  e.preventDefault();
  clearUI();
  const size = document.getElementById("size").value;
  const url = document.getElementById("url").value;

  if (url === "") {
    delete window.alert; // true
    alert('Please enter a URL');
  } else {
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);
    }, 1000);
  }
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  });
};

const clearUI = () => {
  qr.innerHTML = '';
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

form.addEventListener("submit", generate_on_click);
