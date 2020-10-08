
const btn = document.getElementById('btn');
const color = document.querySelector('.Color');
const numbers = "0123456789";
const alphabets = "ABCDEF";


const getRandomNumber = numbers[Math.floor(Math.random()*numbers.length)];
console.log(getRandomNumber);
const getRandomAlphabet = alphabets[Math.floor(Math.random()*alphabets.length)];
console.log(getRandomAlphabet);

function hex () {
	let arr= [];
	console.log(arr);
	for (let i = 0; i <1; i++) {
			arr.push(getRandomNumber);
	        arr.push(getRandomAlphabet);
	}
	return arr[Math.floor(Math.random()*arr.length)]; 
}

btn.addEventListener('click', ()=>{
	let hexSymbol = '#';
	for (let i = 0; i <6; i++) {
		hexSymbol += hex();
	}
	document.body.style.backgroundColor = hexSymbol;
	color.textContent = hexSymbol;
})