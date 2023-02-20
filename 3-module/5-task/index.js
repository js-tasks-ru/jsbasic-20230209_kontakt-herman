function getMinMax(str) {
  let sum = str.split(' ')
      .filter(item => !isNaN(item))
      .map(item => Number(item));

  return {
      min: Math.min(...sum),
      max: Math.max(...sum)
  }
}
