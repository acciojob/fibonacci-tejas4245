function fibonacci(num) {
// your code here
	if(num<=1){
		return num;
	}
	let prevFib=0;
	let currFib=1;

	for(let i=2;i<=num;i++){
		let nextFib=prevFib+currFib;
		prevFib=currFib;
		currFib=nextFib;
	}
	retrun currFib;
}

module.exports = fibonacci;
