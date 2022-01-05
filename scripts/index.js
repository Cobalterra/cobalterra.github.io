// ensure content is loaded before scripts
document.addEventListener("DOMContentLoaded", () => {

  // fancy background movement handler
  document.querySelectorAll(".pbg").forEach((element) => {
    // update position when cursor moves
    document.addEventListener("mousemove", (e) => {
      let moving_value = element.getAttribute("data-value");

      let xc = (window.innerWidth / 2) - e.clientX;
      let yc = (window.innerHeight / 2) - e.clientY;

      let x = (-xc * moving_value) / 100;
      let y = (-yc * moving_value) / 100;

      element.style.transform = "scale(1.1) translateX(" + x + "px) translateY(" + y + "px)";
    });

    // reset position if cursor leaves window
    document.addEventListener("mouseout", (e) => {
      console.log("fired")
      element.style.transform = "scale(1.1) translateX(0px) translateY(0px)";
    });
  });
});