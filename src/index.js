
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
	if (!matrix) return result;

	matrix.forEach((el , index) => {
		if (index % 2 === 0) {
			result.push(...el)
		}
		else {
			result.push(...el.reverse());
		}
	});

	return result;
}
