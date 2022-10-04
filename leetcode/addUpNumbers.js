function addUp(num) {
	let output = num;
	for(let i = 1; i < num; i++){
		output+= num - i;
	}
	return output;
}

function addUpFaster(n){
	let total = 0;
	return n * (n+1) / 2
}

console.log(addUp(13))

