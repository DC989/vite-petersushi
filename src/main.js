import "flowbite";
import "./index.css";
import { throttle } from "lodash";

const runOnScroll = () => {
  console.log("function fired!");

  if (
    document.body.scrollTop > 132 ||
    document.documentElement.scrollTop > 132
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

let mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", throttle(runOnScroll, 250));

mybutton.addEventListener("click", topFunction);
