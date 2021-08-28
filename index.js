// Code your solutions in this file
// writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(names, event) {
	let messages = [];
	for (let i = 0; i < names.length; i++) {
		messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
	}
	return messages;
}

function countDown(int) {
	let count = int;

	while (count >= 0) {
		console.log(count);
		count--;
	}
}