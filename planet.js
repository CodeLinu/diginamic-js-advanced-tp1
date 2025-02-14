export default class Planet {
	constructor({name, population}) {
		this.name = name;
		if (population === 'unknown'){
			this.population = 0;
		} else {
			this.population = parseInt(population);
		}
   }
	get name() {
		return this._name;
   }
	set name(n) {
		this._name = n;
   }
	
	get population() {
		return this._population;
   }
	set population(pop) {
		this._population = pop;
   }
	static countPlanetsPopulation(listePlanet){
	let sum = listePlanet.reduce((a, x) => a + x.population);
	return sum;
   }
}
