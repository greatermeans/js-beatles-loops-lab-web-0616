function theBeatlesPlay(musicians,instruments) {
	const empty = []
	for (let i = 0; i < musicians.length; i++) {
		empty.push(`${musicians[i]} plays ${instruments[i]}`);
	}
	return empty
}


function johnLennonFacts(array) {
	var i = 0
	var newarr = []
	while (i < array.length) {
		newarr.push(`${array[i]}!!!`);
		i += 1;
	}
	return newarr
}


function iLoveTheBeatles(n) {
	var empty = []
	do {
		empty.push("I love the Beatles!")
		n++
	} while (n < 15);
	return empty;
}