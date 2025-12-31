function plusOne(digits: number[]): number[] {
  let numberStr = "";

  for (const digit of digits) {
    numberStr += digit.toString();
  }

  numberStr = (BigInt(numberStr) + BigInt(1)).toString();
  return numberStr.split("").map(Number);
}
