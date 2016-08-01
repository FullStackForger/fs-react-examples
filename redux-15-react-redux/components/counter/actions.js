export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET	= "RESET"
export const REMOVE	= "REMOVE"

export function onIncrement(index) {
	return { type: INCREMENT, index }
}

export function onDecrement(index) {
	return { type: DECREMENT, index }
}

export function onReset(index) {
	return { type: RESET, index }
}

export function onRemove(index) {
	return { type: REMOVE, index }
}