const body = document.querySelector("body");
const iceCreams = document.querySelectorAll(".card-ice-cream img");
const BigiceCreams = document.getElementById("img0");

iceCreams.forEach((item, index) => {
  item.addEventListener("mouseover", function add() {
    if (index === 0) {
      BigiceCreams.setAttribute("src", "img/big-img/big-red-icecream 1.png");
      body.style.background = "linear-gradient(40deg, #bf1342, #ffc9c9)";
    } else if (index === 1) {
      BigiceCreams.setAttribute(
        "src",
        "img/big-img/big-bleu-icecream 2@2x.png"
      );
      body.style.background = "linear-gradient(20deg, #3179E5, #b7b7f7)";
    } else if (index === 2) {
      body.style.background = "linear-gradient(20deg, #B1836E, #ffc9c9)";
      BigiceCreams.setAttribute("src", "img/big-img/big-maron-icecream 3.png");
    } else if (index === 3) {
      body.style.background = "linear-gradient(20deg, #39C95C, #c9ffb7)";
      BigiceCreams.setAttribute("src", "img/big-img/big-green-icecream 4.png");
    }
  });
});
