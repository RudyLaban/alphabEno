document.addEventListener('DOMContentLoaded', () => {
	const input = document.getElementById('inputText');
	const output = document.getElementById('outputText');
	const tuptuo = document.getElementById('txetTuptuo');
	const pattern = /[^a-zA-Z]/g;
	const label = document.getElementById('inputLabel');

	input.addEventListener('input', () => {
		if (pattern.test(input.value)) {
			label.classList.add('wiggle');
			setTimeout(function() {
				label.classList.remove('wiggle');
			}, 1000);
		}

		const cleanValue = input.value.replace(pattern, '');
		input.value = cleanValue;

		const upperLetters = cleanValue.toUpperCase().split('');
		const positions = upperLetters.map(c => (c.charCodeAt(0) - 64).toString());

		output.value = positions.join('');

		const reversedPositions = positions
			.map(p => p.split('').reverse().join(''))
			.reverse()
			.join('');

		tuptuo.value = reversedPositions;
	});
});
