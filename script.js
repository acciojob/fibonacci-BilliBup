function fibonacci(num) {
// your code here
 return fibonacci1(num);
}
funtion fibonacci1(n){
		 if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci1(n - 1) + fibonacci1(n - 2);
  }
}

module.exports = fibonacci;
