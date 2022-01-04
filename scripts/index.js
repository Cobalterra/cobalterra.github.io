// ensure content is loaded before scripts
document.addEventListener("load", () => {

  // fancy background movement handler
  document.querySelectorAll(".pbg").forEach((element) => {
    document.addEventListener("mousemove", (e) => {
      let moving_value = element.getAttribute("data-value");
      let x = (e.clientX * moving_value) / 100;
      let y = (e.clientY * moving_value) / 100;
      element.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  });
});