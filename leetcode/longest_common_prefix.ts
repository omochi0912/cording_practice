function longestCommonPrefix(strs: string[]): string {
  let ans = strs[0];

  for (let i = 1; i < strs.length; i++) {
    if (ans.length === 0) {
      return "";
    }
    const str = strs[i];
    for (let j = 0; j < ans.length; j++) {
      if (ans[j] !== str[j]) {
        ans = ans.slice(0, j);
        break;
      }
    }
  }
  return ans;
}
