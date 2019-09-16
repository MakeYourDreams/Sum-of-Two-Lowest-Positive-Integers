function sumTwoSmallestNumbers(numbers) {  
  
  lowestNumber = Math.min.apply(Math, numbers)
  
  lowestNumberIndex = numbers.indexOf(lowestNumber);
  
  numbers[lowestNumberIndex] = Math.pow(9999, 10);
  
  secondLowestNumber = Math.min.apply(Math, numbers)
  
  return(lowestNumber + secondLowestNumber)
}
