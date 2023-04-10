function fibonacci(num) {
// your code here
 return fibonacci1(num);
}
funtion fibonacci2(num){
		 if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

module.exports = fibonacci;
