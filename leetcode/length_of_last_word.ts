function lengthOfLastWord(s: string): number {
  const str = [...s.trimEnd()];

  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
      break;
    }
    count++;
  }
  return count;
}

// function lengthOfLastWord(s: string): number {
//     s = s.trim();
//     const arr = s.split(" ");
//     return arr[arr.length - 1].length;
// };
