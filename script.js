// Write your JavaScript code here!
window.addEventListener("load", function () {
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
   response.json().then(function (json) {
      let div = document.getElementById("missionTarget");
      //setting the value of inner html to this template literal
      div.innerHTML = `              
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[2].name}</li>
                  <li>Diameter: ${json[2].diameter}</li>
                  <li>Star: ${json[2].star}</li>
                  <li>Distance from Earth: ${json[2].distance}</li>
                  <li>Number of Moons: ${json[2].moons}</li>
               </ol>
               <img src="${json[2].image}">
               `;
   });
})
let form = document.getElementById("inputForm");
form.addEventListener("submit", function () {

   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let faultyItems = document.getElementById("faultyItems");
   let fuelStatus = document.getElementById("fuelStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let launchStatus = document.getElementById("launchStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   if (pilotName.value === ("") || copilotName.value === ("") || fuelLevel.value === ("") || cargoMass.value === ("")) {
      alert("All Fields are Required!");
      event.preventDefault();
   } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
       alert("A numerical response is required for Fuel Level and Cargo Mass.");
       event.preventDefault();
   } else if (!isNaN(pilotName.value) || !isNaN(copilotName)) {
      alert("Pilot and Co Pilot should be letters.")
      event.preventDefault();
   } else if (fuelLevel.value < 10000) {
      //part 1
      document.getElementById
      alert("There is not enough fuel for the journey")
   } else if (cargoMass.value > 10000) {
      //part 2
   }





   //check if the fuel level is too low; part 1
   //if too low change the faulty items to visible ----css, update the fuel status id stating not enough fuel
   //use inner html to change text in html element (.innerHTML)
   //use style property of html element to change the stying of the element (.style)
   //check if cargo mass is too high; part 2
   //

})

})




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">*/