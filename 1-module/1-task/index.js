function factorial(n) {
  let result = n;

  if(n === 1 || n === 0) return 1;
  do{
    result = result * (n-1);
    n--
  }while(n > 1)

  return result;
}
