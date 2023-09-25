export function multiply(a, b) {
	var aNumRows = a.length;
	var aNumCols = a[0].length;
	var bNumCols = b[0].length;
	var matrix = new Array(aNumRows);

	for (let r = 0; r < aNumRows; r++) {
		matrix[r] = new Array(bNumCols);
		for (let c = 0; c < bNumCols; c++) {
			matrix[r][c] = 0;
			for (var i = 0; i < aNumCols; i++) {
				matrix[r][c] += a[r][i] * b[i][c];
			}
		}
	}
	return matrix;
}

export function transform(a, v) {
	const c = a[0][0] * v[0] + a[0][1] * v[1] + a[0][2] * v[2] + a[0][3] * v[3];
	const d = a[1][0] * v[0] + a[1][1] * v[1] + a[1][2] * v[2] + a[1][3] * v[3];
	const e = a[2][0] * v[0] + a[2][1] * v[1] + a[2][2] * v[2] + a[2][3] * v[3];
	const f = a[3][0] * v[0] + a[3][1] * v[1] + a[3][2] * v[2] + a[3][3] * v[3];

	return [c, d, e, f];
}

export function identity() {
	return [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
	];
}

export function translation(dx, dy, dz) {
	return [
		[1, 0, 0, dx],
		[0, 1, 0, dy],
		[0, 0, 1, dz],
		[0, 0, 0, 1],
	];
}

export function scale(sx, sy, sz) {
	return [
		[sx, 0, 0, 0],
		[0, sy, 0, 0],
		[0, 0, sz, 0],
		[0, 0, 0, 1],
	];
}

export function rotationX(angle) {
	return [
		[1, 0, 0, 0],
		[0, Math.cos(angle), -Math.sin(angle), 0],
		[0, Math.sin(angle), Math.cos(angle), 0],
		[0, 0, 0, 1],
	];
}

export function rotationY(angle) {
	return [
		[Math.cos(angle), 0, Math.sin(angle), 0],
		[0, 1, 0, 0],
		[-Math.sin(angle), 0, Math.cos(angle), 0],
		[0, 0, 0, 1],
	];
}

export function rotationZ(angle) {
	return [
		[Math.cos(angle), -Math.sin(angle), 0, 0],
		[Math.sin(angle), Math.cos(angle), 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
	];
}

export function perspective(d) {
	return [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 1 / d, 0],
	];
}

export function viewport(x, y, w, h) {
	var matrix = [[1, 0, 0, 0], [0, -1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
	var out = multiply(translation(x + w / 2, -y - h / 2, 0), scale(w / 2, h / 2, 1));
	matrix = multiply(matrix, out);
	return matrix;
}