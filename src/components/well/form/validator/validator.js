export default function validate(value, rules) {
	let isValid = true;

	for (let rule in rules) {
		switch (rule) {
			case "minLength":
				isValid = isValid && minLengthValidator(value, rules[rule]);
				break;

			case "isRequired":
				isValid = isValid && requiredValidator(value);
				break;

			case "isEmail":
				isValid = isValid && emailValidator(value);
				break;

			case "isNumerical":
				isValid = isValid && numbersValidator(value);
				break;

			default:
				isValid = true;
		}
	}

	return isValid;
}

function minLengthValidator(value, minLength) {
	return value.length >= minLength;
}
function requiredValidator(value) {
	return value.trim() !== "";
}
function emailValidator(value) {
	let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regexEmail.test(String(value).toLowerCase());
}

function numbersValidator(value) {
	let regexPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
	return regexPhone.test(String(value).toLowerCase());
}
