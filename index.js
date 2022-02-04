//(function() {
  //  'use strict';
  const stopButton = document.getElementById("stopButton");
  const stopLight = document.getElementById("stopLight");
  
  const slowButton = document.getElementById("slowButton");
  const slowLight = document.getElementById("slowLight");
  
  const goButton = document.getElementById("goButton");
  const goLight = document.getElementById("goLight");
  
  //toggle stopButton on/off
  toggleColor(stopButton, stopLight, 'stop');
  //stopButton.addEventListener('click', function() {
  //  stopLight.classList.toggle('stop');
  //});
  //mouse enter stopButton
  toggleMouseEnter(stopButton)
  //stopButton.addEventListener("mouseenter", function() {
  //  console.log("Entered stop button")
  //});
  //mouse leave stopButton
  toggleMouseLeave(stopButton)
  //stopButton.addEventListener("mouseleave", function() {
  // console.log("Left stop button")
  //});
  //toggle slowButton on/off
  toggleColor(slowButton, slowLight, 'slow');
 // slowButton.addEventListener('click', function() {
 //   slowLight.classList.toggle('slow');
 // });
  //mouse enter slowButton
  toggleMouseEnter(slowButton)
  //slowButton.addEventListener("mouseenter", function() {
  //   console.log("Entered slow button")
  //});
  //mouse leave slowButton
  toggleMouseLeave(slowButton)
  //slowButton.addEventListener("mouseleave", function() {
  //  console.log("Left slow button")
  //});
  
  //toggle go button on/off
  toggleColor(goButton, goLight, 'go')
  //goButton.addEventListener('click', function() {
  //  goLight.classList.toggle('go');
  //});

  //mouse enter goButton
  toggleMouseEnter(goButton)
  //goButton.addEventListener("mouseenter", function() {
  //  console.log("Entered go button");
  //});
  //mouse leave goButton
  toggleMouseLeave(goButton)
  //goButton.addEventListener("mouseleave", function() {
  //  console.log("Left go button");
  
    
  function toggleColor(button, colorElement, color) {
    const buttonText = button.textContent;
    button.addEventListener('click', function(){
      colorElement.classList.toggle(color);
      const className = colorElement.getAttribute('class');
      console.log(className);
      console.log(className === `bulb ${color}` ? `${buttonText} bulb on`: `${buttonText} bulb off`);
    })
  }
  
  function toggleMouseEnter(button){
    const buttonText = button.textContent;
    button.addEventListener("mouseenter", function() {
      console.log("Entered " + buttonText);
    })
  }

  function toggleMouseLeave(button) {
    const buttonText = button.textContent;
    button.addEventListener("mouseleave", function() {
      console.log("Left " + buttonText);
    })
  }

