const regularExpresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const isNotEmpty = value => (value !== '');
const isEmail = value => (regularExpresion.test(value))
const equalPassword = (password, confirPassword) => password === confirPassword;
const miniLenght = value => (value.length >= 6);
const isMessage = value => (value.trim() !== '');

// Validando Login: email y password correctos
const isValidLogin = (email, password) => (isEmail(email) && isNotEmpty(password));