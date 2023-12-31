/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from before.

Your tasks:
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
	Odd of victory Bayern Munich: 1.33
	Odd of draw: 3.25
	Odd of victory Borrussia Dortmund: 6.5
   Get the team names directly from the game object, don't hardcode them (except for "draw").
   Hint: Note how the odds and the game objects have the same property names.

4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the
number of goals as the value. In this game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/

const game = {
 	team1: 'Bayern Munich',
 	team2: 'Borrussia Dortmund',
 	bayernMunich: {
 		gk: 'Neuer',
 		fieldPlayers: ['Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski']
 	},
 	allPlayers: [
 		    [ 
 		       'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'
		    ],
 		    [
 		      'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'
 		    ],
 		],
 	players1Final: ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',
 	'Thiago', 'Coutinho', 'Perisic'
 		       ],
 	score: '4:0',
 	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
 	date: 'Nov 9th, 2037',
 	odds: {
 		team1: 1.33,
 		draw: 3.25,
 		team2: 6.5
 	     },
 };
 
 const printScoredGoals = function(theScoredPlayers){
 	for(const item of theScoredPlayers.entries()){
 		let String = 'Goal';
 		console.log(`${String} ${item[0]}: ${item[1]}`);
 	}
 }
 
 printScoredGoals(game.scored);
 
 const calculateAverageOdd = function(){
 	let oddsAverage = 0;
 	let oddsLenghtCount = Object.values(game.odds);
 	for(const item of Object.values(game.odds)){
 		oddsAverage += item;
 	}
 	console.log(oddsAverage/oddsLenghtCount.length);
 }
 calculateAverageOdd();
 
 console.log(game.odds.team1);
  
 // Initializing the new object.
 let newObject = {};
 const createNewObject = function(scoreObject){
 	for(const item of scoreObject){
 		let keysArray = Object.keys(newObject);
 		if(keysArray.includes(item)){
 			newObject[item] = 2;
 		}
 		newObject[item] = 1;
 	}
 }
 
 createNewObject(game.scored);
 console.log(newObject);

