function rootDigitSum(number) {
  if (number < 10) {
    return number
  } else {
    return rootDigitSum(
      number
        .toString()
        .split("")
        .reduce(
          (accumulator, currentValue) =>
            parseInt(accumulator) + parseInt(currentValue),
          0
        )
    )
  }
}
console.log(rootDigitSum(942))
