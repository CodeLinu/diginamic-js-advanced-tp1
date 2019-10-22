import Planet from "./planet"
const axios = require("axios");
axios({
   method: "get",
   url: "https://swapi.co/api/planets",
})
.then(function (response) {
	let arr = [];
	for (let planetData of response.data.results) {
		let p = new Planet(planetData);
		arr.push(p);
	}
	console.log(arr);
	for (let i =0; i<=arr.size; i++) {
		let template = `Planète : ${arr[i].name} - Population : ${arr[i].population}`;
		console.log(template);
	}
	console.log(Planet.countPlanetsPopulation(arr));
 })
.catch(function (error) {
   if (error.response) {
     console.log(error.response.data);
     console.log(error.response.status);
   } else if (error.request) {
     console.log(error.request);
   } else {
     console.log('Error', error.message);
   }
 });