// ES5
function calculatePayment(price, tax, discount) {
    tax = typeof tax === undefined ? 0.19 : tax
    discount = typeof discount === undefined ? 0 : discount
    // math
}

// ES6
function isRequired(name) {
	throw new Error(`${name} is Required`)
}

function calculatePayment(price = isRequired('price'), tax = 0.19, discount = 0) {
    // math
}