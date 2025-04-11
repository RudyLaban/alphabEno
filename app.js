/**
 * Affiche la position dans l'alphabet de chaque lettre d'une chaine 
 * @param {*} input 
 */
function stringPositionInAlphabet(input) {

	inputIsFile(input);

	const pattern = /[^a-zA-Z]/g;
	
	// Animation en cas de caractère non autoris
	if (pattern.test(input.value)) {
		const label = document.querySelector('#inputLabel');
		label.classList.add('wiggle');
		setTimeout(function() {
			label.classList.remove('wiggle');
		}, 1000);
	}

	// Remplace les caractères non autorisés
	const cleanValue = input.value.replace(pattern, '');
	input.value = cleanValue;

	// Affiche la position de chaque lettre
	const upperLetters = cleanValue.toUpperCase().split('');
	const positions = upperLetters.map(c => (c.charCodeAt(0) - 64).toString());
	document.querySelector('#outputText').value = positions.join('');
	
	// Affiche la position de chaque lettre a l'envers
	const reversedPositions = positions
	.map(p => p.split('').reverse().join(''))
	.reverse()
	.join('');
	document.querySelector('#txetTuptuo').value = reversedPositions;
}

/**
 * Copie la valeur de l'input le plus proche de 'element'
 * @param {*} element 
 */
function copyInputValue(element) {
	const closestInput = element.closest('.input-container').querySelector('input');
	closestInput.select();
	// Pour mobile
	closestInput.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(closestInput.value);
}

/**
 * Active ou desactive les boutons Copy.
 */
function inputIsFile(input) {
	const copyBtns = document.querySelectorAll('.copy');
	for (const copyBtn of copyBtns) {
		if (input.value.length > 0) {
			copyBtn.disabled = false;
			copyBtn.classList.remove('opacity-50');
		} else {
			copyBtn.disabled = true;
			copyBtn.classList.add('opacity-50');
		}
	}
}