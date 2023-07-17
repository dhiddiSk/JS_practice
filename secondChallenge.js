/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/


const MM1 = 78, MH1 = 1.69 , JM1 = 92, JH1 = 1.95;
const MM2 = 95, MH2 = 1.88 , JM2 = 85, JH2 = 1.76;

const BMICalculator = function(mass, height){
	return (mass/(height ** 2));
}

const printToConsole = function(){
	let MBMI = BMICalculator(MM1, MH1);
	let JBMI = BMICalculator(JM1, JH1);
	
	if(MBMI > JBMI){
		console.log(`Mark's BMI ${MBMI} is higher than John's! ${JBMI}`);
	}else{
		console.log(`John's BMI ${JBMI} is higher than Mark's! ${MBMI}`);
	}	
};

printToConsole();
