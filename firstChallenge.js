/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
	1. Store Mark's and John's mass and height in variables
	2. Calculate both their BMIs using the formula (you can even implement both versions)
	3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
 Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
 Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/

const MM1 = 78, MH1 = 1.69 , JM1 = 92, JH1 = 1.95;
const MM2 = 95, MH2 = 1.88 , JM2 = 85, JH2 = 1.76;

const BMICalculator = function(mass, height){
	return (mass/(height ** 2))
}

let MBMI = BMICalculator(MM1, MH1);
let JBMI = BMICalculator(JM1, JH1);
console.log(MBMI, JBMI);
let markHigherBMI = MBMI > JBMI;
console.log(markHigherBMI);

