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
	resetCopyBtnsColor();
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
	changeCopyBtnColor(element);
}

/**
 * Active ou desactive les boutons Copy.
 */
function inputIsFile(input) {
	const copyBtns = document.querySelectorAll('.copy');
	for (const copyBtn of copyBtns) {
		if (input.value.length > 0) {
			copyBtn.disabled = false;
		} else {
			copyBtn.disabled = true;
			resetCopyBtnColor(copyBtn);
		}
	}
}

/**
 * Change le rendu du bouton Copier
 * @param {*} copyBtn 
 */
function changeCopyBtnColor(copyBtn) {
	copyBtn.classList.remove('border-indigo-500');
	copyBtn.classList.add('bg-green-600', 'border-green-600');
	copyBtn.textContent = "Copié !";
}

/**
 * Réinitialise le rendu du bouton Copier
 * @param {*} copyBtn 
 */
function resetCopyBtnColor(copyBtn) {
	copyBtn.classList.add('border-indigo-500');
	copyBtn.classList.remove('bg-green-600', 'border-green-600');
	copyBtn.textContent = "Copier";
}

/**
 * Réinitialise le rendu des boutons Copier
 */
function resetCopyBtnsColor() {
	const copyBtns = document.querySelectorAll('.copy');
	for (const copyBtn of copyBtns) {
		resetCopyBtnColor(copyBtn);
	}
}