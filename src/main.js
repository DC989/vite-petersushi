import "./index.css";
import { Carousel } from "flowbite";
import { throttle } from "lodash";
import $ from "jquery";

const runOnScroll = () => {
  if (
    document.body.scrollTop > 132 ||
    document.documentElement.scrollTop > 132
  ) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }

  if (
    document.body.scrollTop > header + sectionCarousel - 1 ||
    document.documentElement.scrollTop > header + sectionCarousel - 1
  ) {
    headerFixed.style.transform = "translate3d(0, 0, 0)";
  } else {
    headerFixed.style.transform = "translate3d(0, -100%, 0)";
  }
};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const myButton = document.getElementById("btn-top");

window.addEventListener("scroll", throttle(runOnScroll, 250));
myButton.addEventListener("click", topFunction);

let headerFixed = document.querySelector(".headerFixed");
let header = $(".header").length ? $(".header").outerHeight(true) : 0;
let sectionCarousel = $("#section-carousel").length
  ? $("#section-carousel").outerHeight(true)
  : 0;

const mediaQuery = window.matchMedia("(max-width: 767px)");
if (mediaQuery.matches) {
  // If the viewport-width is < 768px terminate the function
  //return;
} else {
  // If the viewport-width is >= 768px set .dropdown-menu top property
  //return;
}
