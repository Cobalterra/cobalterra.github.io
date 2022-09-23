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
function fancyBoombox(){
  var element1 = document.getElementById("audioBox");
  element1.classList.toggle("ON")
  if(document.getElementById("audioBox").classList.contains("ON")){
    document.getElementById("image").src="images/boombox ON.gif";
      }
  else{
    document.getElementById("image").src="images/boombox.png";
      }
}
function tunes(){
  var tunies = document.getElementsByName("tune");
  for(i=0; i<tunies.length; i++){
    if(tunies[i].duration > 0 && !tunies[i].paused)
    {
      tunies[i].pause();
      return
    }
  }
  var j = Math.round(Math.random()*(tunies.length-1))
  tunies[j].play();
}
document.addEventListener("input", (e) => {
  var tunies = document.getElementsByName("tune");
  for(k=0; k<tunies.length; k++){
    var bruh = e.target.value;
  tunies[k].volume = parseFloat(bruh/100);
}});

