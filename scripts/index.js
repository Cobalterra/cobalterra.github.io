// ensure content is loaded before scripts
document.addEventListener("DOMContentLoaded", () => {

  // fancy background movement handler
  document.querySelectorAll(".pbg").forEach((element) => {
    document.addEventListener("mousemove", (e) => {
      let moving_value = element.getAttribute("data-value");

      let xc = (window.innerWidth / 2) - e.clientX;
      let yc = (window.innerHeight / 2) - e.clientY;

      let x = (-xc * moving_value) / 100;
      let y = (-yc * moving_value) / 100;

      element.style.transform = "scale(1.1) translateX(" + x + "px) translateY(" + y + "px)";
    });
  });
});