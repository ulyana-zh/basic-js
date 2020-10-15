const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');

  if (!Array.isArray(arr)) {
		throw new Error('input argument must be an array')
	}

	let transformedArray = []

	let doubleNext = false
	let discardNext = false
	let prevHasBeenDiscarded = false

	for (let x of arr) {
		switch (x) {
			case '--discard-next':
				discardNext = true
				break;
			case '--double-next':
				doubleNext = true
				break;
			case '--discard-prev':
				if (transformedArray.length > 0 && !prevHasBeenDiscarded) {
					transformedArray.pop()	
					prevHasBeenDiscarded = false
				}
				break;
			case '--double-prev':
				if (transformedArray.length > 0 && !prevHasBeenDiscarded) {
					transformedArray.push(transformedArray[transformedArray.length - 1])
					prevHasBeenDiscarded = false
				}
				break;
			default:
				if (discardNext) {
					discardNext = false
					prevHasBeenDiscarded = true
					break;
				}

				prevHasBeenDiscarded = false;
				transformedArray.push(x)
				if (doubleNext) {
					doubleNext = false
					transformedArray.push(x)
				}
		}
	}

	return transformedArray;
}
