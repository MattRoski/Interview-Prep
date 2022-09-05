function addUp(num) {
	let output = num;
	for(let i = 1; i < num; i++){
		output+= num - i;
	}
	return output;
}

console.log(addUp(13))

